import React from "react";
import "../styles.css";
import { Link } from "react-router-dom";
import AppContext from "./Context";
import AuthApiService from "../services/auth-api-service";
import TokenService from "../services/token-service";

export default class App extends React.Component {
  static contextType = AppContext;
  state = {
    login: "",
    password: "",
    // error: null
  };

  static defaultProps = {
    onLoginSuccess: () => {},
  };

  handleSubmitJwtAuth = (ev) => {
    ev.preventDefault();
    this.setState({ error: null });
    const { user_name, password } = ev.target;

    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value,
    })
      .then((res) => {
        user_name.value = "";
        password.value = "";
        //TokenService.saveAuthToken(res.authToken);
        //this.props.onLoginSuccess();
        this.props.history.push("/postcard");
      })
      .catch((res) => {
        this.setState({
          error: res.error,
        });
      });
  };

  handleSubmitBasicAuth = (ev) => {
    ev.preventDefault();
    const { user_name, password } = ev.target;

    console.log("login form submitted");
    console.log({ user_name, password });

    TokenService.saveAuthToken(
      TokenService.makeBasicAuthToken(user_name.value, password.value)
    );

    user_name.value = "";
    password.value = "";
    this.props.onLoginSuccess();
  };

  loginHandler = (e) => {
    this.setState({ login: e.target.value });
  };

  passwordHandler = (e) => {
    this.setState({ password: e.target.value });
  };

  render() {
    const { postcards = [] } = this.context;
    return (
      <main className="contentliner">
        <div className="title">
          <h1>posted</h1>
        </div>
        <div className="slogan">create your digital postcard</div>
        <div>
          <h1>LOGIN</h1>
        </div>
        {/* Demo login username and password for testing purposes only */}
        <div className="demologin">
          We recommend you experience this web app with the following login
          credentials: - Username: Demo1 - Password: Password123!
        </div>
        <form onSubmit={this.handleSubmitJwtAuth}>
          <div className="contentliner">USER ID</div>
          <div className="contentliner">
            <input
              type="text"
              name="user_name"
              required
              onChange={this.loginHandler}
              value={this.state.login}
            />
          </div>
          <div className="contentliner">PASSWORD:</div>
          <div className="contentliner">
            <input
              type="password"
              name="password"
              required
              onChange={this.passwordHandler}
              value={this.state.password}
            />
          </div>
          <div className="contentliner">
            <button name="submitlogin" value="Button">
              SUBMIT
            </button>
          </div>

          <div className="contentliner">
            <p>
              Write some text, choose an image from the web and create your own
              postcard. Posted is your place where you can create a digital
              postcard to share with your friends. No account?
              <Link to="/signup">Sign up</Link>
            </p>
          </div>
        </form>
        <div>
          <h1>Latest Postcards:</h1>
        </div>

        <div>
          {postcards.map((postcard, i) => (
            <div
              key={i}
              className="postcard"
              style={{
                backgroundImage: `url(${postcard.content})`,
              }}
            >
              <p className="postcardText">{postcard.title}</p>
            </div>
          ))}
        </div>
      </main>
    );
  }
}
