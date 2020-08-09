import React from "react"

import HomePage from "./pages/Homepage"
import LoginPage from "./pages/Loginpage"
import HeaderIndex from "./components/header/headerIndex"
import history from "./utils/history"

import { Router, Switch, Route } from "react-router-dom"

function App() {
  return (
    <Router history={history}>
      <div>
        <HeaderIndex />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
