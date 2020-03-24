import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles.css";

export default class Viewpostcard extends Component {
  state = {
    username: "",
    password: "",
    verifypass: ""
  };
  // static contextType = AppContext;

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="signupbox">
        <div>
          <h4>Sign Up for an account</h4>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={this.state.username}
              onChange={e => this.setState({ username: e.target.value })}
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={e => this.setState({ password: e.target.value })}
            />
          </div>
          <div>
            <input
              type="verifypass"
              name="verifypass"
              placeholder="Retype Password"
              value={this.state.verifypass}
              onChange={e => this.setState({ verifypass: e.target.value })}
            />
          </div>
          <Link to="/">Submit</Link>
        </form>
      </div>
    );
  }
}
