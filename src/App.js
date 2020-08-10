import React from "react"
//component
import HomePage from "./pages/Homepage"
import LoginPage from "./pages/Loginpage"
import HeaderIndex from "./components/header/headerIndex"
import WebinarDetail from "./pages/WebinarDetail"
import Registerd from "./pages/Registered"

//utils
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
          <Route path="/webinar/:id" component={WebinarDetail} />
          <Route path="/registerd" component={Registerd} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
