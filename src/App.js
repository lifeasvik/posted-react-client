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
    postcards: [
      {
        image:
          "https://images.unsplash.com/photo-1523895665936-7bfe172b757d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        text: "test",
      },
      {
        image:
          "https://images.unsplash.com/photo-1523895665936-7bfe172b757d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        text: "test2",
      },
    ],
    addPostcard: (image, text) => {
      const postcard = { image, text };
      this.setState({ postcards: [...this.state.postcards, postcard] });
    },
  };

  //start
  getStore = (endpoint) => {
    const url = `${config.API_URL}/${endpoint}`;

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error(res.ok);
        }
        return res;
      })
      .then((res) => res.json())
      .then((jsonRes) => this.updateState(jsonRes, endpoint))
      .catch((err) => console.log(`Oops: ${err}`));
  };

  addPostcard = (event, callback) => {
    event.preventDefault();
    const url = `${config.API_URL}/notes`;

    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        name: event.target.name.value, //change
        folder: event.target.folderId.value, //change
        // modified: moment().format(),
        content: event.target.content.value,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw Error(res.ok);
        }
        return res.json();
      })
      .then((res) => {
        this.updateState([...this.state.postcards, res], "postcards"); //change
        callback();
        return res;
      })
      .catch((err) => console.log(`Oops: ${err}`));
  };

  // componentDidMount() {
  //   this.getStore("folders"); //which endpoints it will link to
  //   this.getStore("notes"); //which
  // }
  // // end

  render() {
    return (
      <AppContext.Provider value={this.state}>
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
