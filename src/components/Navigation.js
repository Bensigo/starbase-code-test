import React, {Component} from 'react'
import {Menu} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

class Navigation  extends Component{
  state = {activeItem: 'Home'}
  handleClick = (e,{name}) => this.setState({activeItem: name})
 render () {
  const {activeItem} = this.state 
  return (
        <Menu   pointing secondary >
            <Menu.Item 
              name='Home' 
              as={Link} 
              active={activeItem === "Home"}
              to="/" 
              onClick={this.handleClick} 
            >
              </Menu.Item>
            <Menu.Item 
              name='Bookmarks' 
              as={Link} 
              active={activeItem === "Bookmarks"}
              to="/bookmarks" 
              onClick={this.handleClick}
            >
            </Menu.Item>
        </Menu>  
  )
 }
}

export default Navigation
