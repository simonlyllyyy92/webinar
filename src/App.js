import React from "react"

import HomePage from "./pages/Homepage"
import HeaderIndex from "./components/header/headerIndex"

import { Switch, Route } from "react-router-dom"

function App() {
  return (
    <div>
      <HeaderIndex />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  )
}

export default App
