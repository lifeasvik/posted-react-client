import React from "react";
import "./styles.css";
import AppContext from "./components/Context";
import { Route, Switch } from "react-router-dom";
import Mainpage from "./components/Mainpage.js";
import Postcard from "./components/Postcard.js";
import Viewpostcard from "./components/Viewpostcard.js";
import Signup from "./components/Signup.js";

export default class App extends React.Component {
  state = {
    postcards: [
      {
        image:
          "https://images.unsplash.com/photo-1523895665936-7bfe172b757d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        text: "test"
      },
      {
        image:
          "https://images.unsplash.com/photo-1523895665936-7bfe172b757d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        text: "test2"
      }
    ],
    addPostcard: (image, text) => {
      const postcard = { image, text };
      this.setState({ postcards: [...this.state.postcards, postcard] });
    }
  };
  render() {
    return (
      <AppContext.Provider value={this.state}>
        <Switch>
          <main>
            <Route exact path={"/"} component={Mainpage} />{" "}
            <Route path={"/postcard"} component={Postcard} />{" "}
            <Route path={"/viewpostcard"} component={Viewpostcard} />{" "}
            <Route path={"/signup"} component={Signup} />{" "}
          </main>
        </Switch>
      </AppContext.Provider>
    );
  }
}
