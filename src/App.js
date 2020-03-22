import React from "react";
// import "./styles.css";
// import AppContext from "./components/Context";
import { Route, Switch } from "react-router-dom";
import Mainpage from "./components/Mainpage.js";
import Postcard from "./components/Postcard.js";
import Viewpostcard from "./components/Viewpostcard.js";

export default class App extends React.Component {
  render() {
    return (
      // <AppContext.provider>
      <Switch>
        <main>
          <Route exact path={"/"} component={Mainpage} />{" "}
          <Route path={"/postcard"} component={Postcard} />{" "}
          <Route path={"/viewpostcard"} component={Viewpostcard} />{" "}
        </main>
      </Switch>
      // </AppContext.provider>
    );
  }
}
