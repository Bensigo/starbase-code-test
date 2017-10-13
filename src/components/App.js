import React from 'react'
import { Container} from 'semantic-ui-react'
import {Route, Switch, Link} from 'react-router-dom'

import Navigation from './Navigation'
import Home from './Home'
import Bookmarks from './controller/Bookmarks'

const App = () => {
  const style = {
    margin: '-14px auto',
    padding: '20px',


  }
  return (
    <div >
      <Navigation />
      <main style={style}>
        <Switch>
          <Route 
            exact 
            path='/' 
            render={(props) => <Home {...props} />} 
          />
          <Route path="/bookmarks" render={(props)=> <Bookmarks {...props} />} />
          <Route exact path='/address/:id' render={() => <h1>Hello detail </h1>} />
          <Route  render={() => {
              return (
                <Container >
                  <h4>Oops page not found </h4>
                  <span>Try <Link to="/">Home</Link> </span>
                </Container>
              )
            }} />
        </Switch>
      </main>
    </div>
  )
}

export default App
