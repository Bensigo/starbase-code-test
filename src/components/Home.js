import React, {Component} from 'react';
import {Container, Segment, Button, Form} from 'semantic-ui-react'
import {PropTypes} from 'prop-types'

import EtherConverter from './controller/EtherConverter'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      address: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange (event) {
    const value = event.target.value
    this.setState({address: value})
  }
  render() {
    const {address} = this.state
    return (
      <Container>
       <Segment  style={segmentStyle}  raised>
       <div>
          <Form onSubmit={()=> this.props.history.push(`/address/${address}`)} >
            <h5>Enter Your Ethereum Address To Watch Transaction</h5>
            <Form.Input
              type="text"
              value={this.state.address}
              onChange={this.handleChange}
              placeholder="Ether address"
            />
            <Button type="submit" inverted color="green" >Go</Button>
          </Form>
        </div>
        <EtherConverter />
       </Segment>
      </Container>
    )
  }

}
const segmentStyle = {
  backgroundColor: "#eeeeee"
}
Segment.propTypes = {
  color: PropTypes.string
}

export default Home
