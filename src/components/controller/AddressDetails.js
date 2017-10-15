import React, {Component} from 'react'
import {Image, Header, Icon, Segment} from 'semantic-ui-react'
import etherPic from '../../1600.png'
import {connect} from 'react-redux'
import {addBookmark} from '../../actions/bookmarkActions'

class AddressDetails extends Component {
  handleAddBookmark = (address) => {
    this.props.dispatch(addBookmark(address))
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