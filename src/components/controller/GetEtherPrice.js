import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {Segment} from 'semantic-ui-react'

class GetEtherPrice extends Component {
  render () {
    return (
      <Segment ></Segment>
    )
  }
}
const mapStateToProps =  (state) => {

}
const mapDispatchToProps = () => {}
export default connect(mapDispatchToProps, mapStateToProps)(GetEtherPrice)