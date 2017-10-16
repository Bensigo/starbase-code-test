import React, {Component} from 'react'
import {Image, Header, Icon, Segment} from 'semantic-ui-react'
import etherPic from '../../1600.png'
import {connect} from 'react-redux'
import {addBookmark} from '../../actions/bookmarkActions'
import AlertContainer from 'react-alert'

class AddressDetails extends Component {
  alertOptions = {
    offset: 14,
    position: 'bottom left',
    theme: 'dark',
    time: 5000,
    transition: 'scale'
  }
  handleAddBookmark = (address) => {
    this.props.dispatch(addBookmark(address))
    this.msg.show('ethereum address added to bookmark', {
      time: 2000,
      type: 'success',
      icon: <Icon name='add' color='green'/>
    })
  }
  render() {
    const address = this.props.match.params.id
    return (
      
     <Segment>
       <Image src={etherPic} size="tiny" shape="rounded" />
       <Segment textAlign="center">
          <Header size="large" >
            Ether address: {address} 
          </Header>
          <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
          <Icon
            circular
            name="bookmark"
            color="green"
            onClick={() => this.handleAddBookmark(address)}
          />
        </Segment>  
     </Segment>
    )
  }
}

function mapStateToProps(state) {
  return{}
}

export default connect(mapStateToProps)(AddressDetails)