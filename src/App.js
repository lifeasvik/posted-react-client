import React from "react";
import { Route } from "react-router-dom";

import "./styles.css";

import AppContext from "./components/Context";

import Mainpage from "./components/Mainpage";
import Postcard from "./components/Postcard";
import Viewpostcard from "./components/Viewpostcard";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";

import config from "./config";
// import PrivateRoute from "../Utils/PrivateRoute";
// import PublicOnlyRoute from "../Utils/PublicOnlyRoute";

export default class App extends React.Component {
  state = {
    postcards: [],
    addPostcard: (content, title) => {
      const postcard = { content, title };
      this.setState({ postcards: [...this.state.postcards, postcard] });
    },
  };

  //start
  getStore = (endpoint) => {
    const url = `${config.API_ENDPOINT}/postcards`;

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error(res.ok);
        }
        return res;
      })
      .then((res) => res.json())
      .then((jsonRes) => {
        this.setState({
          postcards: jsonRes,
        });
        console.log(jsonRes);
      })
      .catch((err) => console.log(`Oops: ${err}`));
  };

  componentDidMount() {
    this.getStore();
  }
  // end

  render() {
    return (
      <AppContext.Provider
        value={{
          ...this.state,
          getStore: this.getStore,
        }}
      >
        <main>
          <Route path="/" component={Navbar} />
          <Route exact path="/" component={Mainpage} />
          <Route path="/postcard" component={Postcard} />
          <Route path="/viewpostcard" component={Viewpostcard} />
          <Route path="/signup" component={Signup} />
        </main>
      </AppContext.Provider>
    );
  }
}
