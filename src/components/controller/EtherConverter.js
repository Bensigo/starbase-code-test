import React, { Component } from 'react'
import {connect} from 'react-redux'
// import {bindActionCreators} from 'redux'
import {toBTC, toUSD} from '../../utils/converter'
import {getEtherPrice, changeEthPrice} from '../../actions/etherPrice'
import {Segment, Container, Icon, Header} from 'semantic-ui-react'
import Calculator from '../Calculator'

class EtherConverter extends Component {
  componentWillMount() {
    this.props.dispatch(getEtherPrice())
    
  }
  handleChange = (e) => {
    const eth = e.target.value
    const btc = toBTC(eth, localStorage.getItem('btc'))
    const usd = toUSD(eth, localStorage.getItem('usd'))
    console.log(btc,usd)
    this.props.dispatch(changeEthPrice({eth, btc, usd}))
  }
  render () {
    if (this.props.fetching) {
      return <h3>loading......</h3>
    }
    return (
      <Segment raised>
        <Segment inverted color=" blue-grey darken-4" raised>
          <Header size='huge'> 
            <Icon name="sort" color="teal"/>
            Ether Price
          </Header>
        </Segment>
        <Container>
          <Calculator 
            ETH={this.props.ETH} 
            toBTC={this.props.toBTC} 
            toUSD={this.props.toUSD}
            handleChange={this.handleChange}
          />
        </Container>
      </Segment>
    )
  }
}

function mapStateToProps (state) {
  return {
    fetching: state.getEther.fetching,
    ETH: state.getEther.etherPrice.eth,
    toBTC: state.getEther.etherPrice.btc,
    toUSD: state.getEther.etherPrice.usd
  }
}
export default connect(mapStateToProps)(EtherConverter)