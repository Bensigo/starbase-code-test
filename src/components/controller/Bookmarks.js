import React, {Component} from 'react'
import {Container, Segment} from 'semantic-ui-react'
import {connect} from 'react-redux'

class BookMarks extends Component {
  render () {
   return (
    <Container>
      <Segment></Segment>
    </Container>
   )
  }
}

export default connect()(BookMarks)