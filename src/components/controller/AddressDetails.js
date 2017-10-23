import React, {Component} from 'react'
import {Image, Header, Icon, Container,Segment, Popup} from 'semantic-ui-react'
import etherPic from '../../1600.png'
import {connect} from 'react-redux'
import {addBookmark} from '../../actions/bookmarkActions'
import AlertContainer from 'react-alert'
import QRCode from 'qrcode.react'
import io from 'socket.io-client'
import {getTransactions} from '../../actions/transaction'
import TransactionList from '../TransactionList'

class AddressDetails extends Component {
  componentWillMount() {
    const address = this.props.match.params.id
    this.props.dispatch(getTransactions(address))
    this.connectToEtherscanhandler('wss://socket.etherscan.io/wshandler')
  }
  connectToEtherscanhandler (url) {
    const socket = io(url)
    socket.on('connect', () => {
      console.log('conected to websocket')
    })
  }
  alertOptions = {
    offset: 14,
    position: 'bottom left',
    theme: 'dark',
    time: 5000,
    transition: 'scale'
  }
  handleAddBookmark = (address) => {
    console.log(this.props.transactions)
    this.props.dispatch(addBookmark(address))
    this.msg.show('ethereum address added to bookmark', {
      time: 2000,
      type: 'success',
      icon: <Icon name='add' color='green'/>
    })
  }
  render() {
    const address = this.props.match.params.id
    if (this.props.loading){
      return (
        <div>Loading....</div>
      )

    }
    if (this.props.err) {
      return (
        <div>
          <h4>{this.props.err}</h4>
        </div>
      )
    }
    return (
    <Container>  
     <Segment raised>
       <Image src={etherPic} size="tiny" shape="rounded" />
       <Popup 
        content="add to bookmark"
         trigger={
           <Icon
            circular
            name="bookmark"
            color="blue"
            style={{right: 5, position: 'absolute', top: 5, fontSize: 20}}
            onClick={() => this.handleAddBookmark(address)}
            /> 
          } >
          
      </Popup> 
       <Container textAlign="center">
          <Header size="large" >
            Ether address: {address} 
           
          </Header>
          <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
           <QRCode value={address} />
            <br/>
            <br/>
           <TransactionList transactions={this.props.transactions} /> 
        </Container>  
     </Segment>
    </Container> 
    )
  }
}

function mapStateToProps(state) {
  return{
    loading: state.transactions.fetching,
    transactions: state.transactions.transactions,
    err: state.transactions.error

  }
}

export default connect(mapStateToProps)(AddressDetails)