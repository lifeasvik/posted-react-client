import React, { Component } from "react";
import "../styles.css";
import AuthApiService from "../services/auth-api-service";

export default class Viewpostcard extends Component {
  state = {
    username: "",
    password: "",
    error: null,
  };

  static defaultProps = {
    onRegistrationSuccess: () => {},
  };

  //add info here from thingful
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
      <div className="signupbox">
        <div>
          <h4>Sign Up for an account</h4>
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
              type="verifypass"
              name="verifypass"
              placeholder="Retype Password"
            />
          </div>
          <button name="submitlogin" value="Button">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
