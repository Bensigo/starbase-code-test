import React, {Component} from 'react'
import {Container, Segment, Header, List, Button, Image} from 'semantic-ui-react'
import {connect} from 'react-redux'
import etherPic from '../../1600.png'
 import {removeBookmark} from '../../actions/bookmarkActions'

 const listStyle = { 
  backgroundColor: 'white', 
  color: 'grey',
  padding: '15px',
  margin: '5px auto',
}

class BookMarks extends Component {
  constructor(props) {
    super(props)
    this.deleteBookmark = this.deleteBookmark.bind(this)
  }
  deleteBookmark (address){
    console.log(address)
    this.props.dispatch(removeBookmark(address))
  }
  render () {
    const bookmarks =JSON.parse(localStorage.getItem('bookmarks'))
    console.log(bookmarks)
    if(bookmarks.length === 0){
      return (

    <Container>
      <Segment inverted style={segmentStyle} raised>
        <Header color="grey">Watch list of ethereum adresses</Header>
        <Segment>
          <h4>Sorry no bookmarks found</h4>
        </Segment> 
      </Segment>
    </Container>    
      )  
    }
   return (
    <Container>
      <Segment inverted style={segmentStyle} raised>
          <Header color="grey">Watch list of ethereum adresses</Header>
          <List divided verticalAlign='middle' animated >
            {
              bookmarks.map((address,i) => (
                <List.Item key={address} style={listStyle}>
                  <List.Content floated='right'>
                    <Button inverted color="red" onClick={() =>  this.deleteBookmark(address)}>Remove</Button>
                   </List.Content>
                  <Image avatar src={etherPic} />
                   <List.Content 
                      onClick={() => this.props.history.push(`address/${address}`)}
                      style={{cursor: 'pointer'}}
                   >
                    {address}
                  </List.Content>
                 </List.Item>))
            }
          </List>
      </Segment>
    </Container>
   )
  }
}

const segmentStyle = {
  backgroundColor: "#eeeeee"
}

function mapStateToProps(state) {
  return {
    bookmarks: state.bookmarks.bookmarks

  }
}
export default connect(mapStateToProps)(BookMarks)