import React, { Component } from "react";
import "../styles.css";
import AuthApiService from "../services/auth-api-service";

// This component is the sign up page which allows users to create their user id and password

export default class Viewpostcard extends Component {
  // Using empty state and replacing with user inputs

  state = {
    username: "",
    password: "",
    error: null,
  };

  static defaultProps = {
    onRegistrationSuccess: () => {},
  };

  // Function to handle submit making sure passwords match

  handleSubmit = (ev) => {
    ev.preventDefault();
    const { user_name, password, verifypass } = ev.target;

    if (password.value !== verifypass.value) {
      this.setState({
        error: "Your password was not verified try again.",
      });
      return;
    }

    this.setState({ error: null });
    AuthApiService.postUser({
      user_name: user_name.value,
      password: password.value,
    })
      .then((user) => {
        user_name.value = "";
        password.value = "";
        this.props.history.push("/postcard");
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  render() {
    return (
      <main className="contentliner">
        <div className="title">
          <h1>posted</h1>
        </div>

        <div className="signupbox">
          <div>
            <h1>SIGN UP</h1>
          </div>

          {this.state.error}

          <form onSubmit={this.handleSubmit}>
            <div>
              <input type="text" name="user_name" placeholder="Username" />
            </div>
            <div>
              <input type="password" name="password" placeholder="Password" />
            </div>
            <div>
              <input
                type="password"
                name="verifypass"
                placeholder="Retype Password"
              />
            </div>
            <button name="submitlogin" value="Button">
              Submit
            </button>
          </form>
        </div>
      </main>
    );
  }
}
