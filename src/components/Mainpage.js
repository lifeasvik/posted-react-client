import React from "react";
import "../styles.css";
import { Link } from "react-router-dom";
import AppContext from "./Context";

export default class App extends React.Component {
  static contextType = AppContext;
  state = {
    login: "",
    password: ""
  };

  loginHandler = e => {
    this.setState({ login: e.target.value });
  };

  passwordHandler = e => {
    this.setState({ password: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <main className="App">
        <div className="contentliner">
          <h1>Welcome to Posted</h1>
        </div>
        {/* form starts here to login */}
        <div className="splashcontainer">
          <div className="contentliner">Sign in</div>
          <form onSubmit={this.handleSubmit}>
            <div>
              <div className="contentliner">
                <h4>Login:</h4>
              </div>
              <input
                type="text"
                name="loginInput"
                required
                onChange={this.loginHandler}
                value={this.state.login}
              />
              <div className="contentliner">
                <h4>Password:</h4>
              </div>
              <input
                type="password"
                name="passwordInput"
                required
                onChange={this.passwordHandler}
                value={this.state.password}
              />
            </div>
            <div className="contentliner">
              {/* <input
                type="button"
                name="submitlogin"
                value="Button"
                onClick={() => this.handleButtonClick()}
              /> */}
              <Link to="/postcard">Submit</Link>
            </div>
          </form>
          {/* End submit form code */}
          <div className="signinsplash">
            <Link to="/signup">Signup</Link>
          </div>
        </div>
        <div className="contentliner">
          <h1>Latest Postcards:</h1>
        </div>
        <div className="cardholder">
          {this.context.postcards.map(postcard => (
            <div
              className="postcard"
              style={{
                backgroundImage: `url(${postcard.image})`
              }}
            >
              <p className="postcardText">{postcard.text}</p>
            </div>
          ))}
        </div>
      </main>
    );
  }
}
