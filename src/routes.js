import React from 'react'
import { Switch, Route } from 'react-router-dom'
import SignUp from './pages/SignUp'
import Home from './pages/Home'


export default function Routes() {
  return (
    <div>
      <Switch>
          <Route path="/" exact component={SignUp}/>
          <Route path="/Home" exact component={Home}/>
      </Switch>
    </div>
  )
}
