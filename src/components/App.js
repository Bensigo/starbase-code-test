import React from 'react'
import PropTypes from 'prop-types'
import {Menu, Segment} from 'semantic-ui-react'

const Navigation = () => {
  return (
      <Menu color="purple">
          <Menu.Item name='Home'  ></Menu.Item>
      </Menu>
  )
}

const App = ({children}) => {
  return (
    <div>
      <Navigation />
      <main>
        {children}
      </main>
    </div>
  )
}

export default App

App.propTypes = {
  children: PropTypes.element.isRequired
}