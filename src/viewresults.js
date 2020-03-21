import React from "react";
import "./styles.css";

export default class App extends React.Component {
  state = {
    postcardImage: "",
    userName: ""
    //need to figure out how to get the postcard pulled and showing up here
    //need to figure out how to connect the username so we can pull it into the state and keep calling them by their name
  };

  render() {
    return (
      <div className="App">
        <h1>{this.state.username} View your Postcard</h1>
        <div classname="postcardImage">{this.state.postcardImage}</div>
      </div>
    );
  }
}
