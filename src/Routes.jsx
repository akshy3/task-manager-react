import {Switch, Route} from "react-router-dom"


import React from 'react'
import View from "./pages/View/View"
import Add from "./pages/Add/Add"

export default function Routes() {
    return (
        <Switch>
          <Route exact path="/">
            <View/>
          </Route>
          <Route exact path="/add">
            <Add />
          </Route>
          </Switch>
    )
}
