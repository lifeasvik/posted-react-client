import React from "react";
import "../styles.css";
// import { Link } from "react-router-dom";
import AppContext from "./Context";
import TokenService from "../services/token-service";
import { Redirect } from "react-router-dom";
import postedapiservice from "../services/postedapiservice";

// This component is the page that allows the user to input text and url for image to display as a postcard

export default class Createpostcard extends React.Component {
  static contextType = AppContext;
  state = {
    postcardText: "",
    image: "",
    finishedpostcard: "",
  };

  // This function handles sending the contents to the db pulling data from user inputs

  handleSubmit = (ev) => {
    ev.preventDefault();
    this.setState({ error: null });
    const { postcard_text, image_url } = ev.target;

    postedapiservice
      .postCard(image_url.value, postcard_text.value)
      .then((res) => {
        this.context.addPostcard(this.state.image, this.state.postcardText);
        this.props.history.push("/viewpostcard");
      })
      .catch((res) => {
        this.setState({
          error: res.error,
        });
      });
  };

  render() {
    return TokenService.getAuthToken() ? (
      <main className="contentliner">
        <div className="title">
          <h1>posted</h1>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              name="postcard_text"
              placeholder="Postcard Text"
              value={this.state.postcardText}
              onChange={(e) => this.setState({ postcardText: e.target.value })}
            />
          </div>
          <div>
            <input
              type="text"
              name="image_url"
              placeholder="Image URL"
              value={this.state.image}
              onChange={(e) => this.setState({ image: e.target.value })}
            />
          </div>
          <div className="contentliner">
            <input type="submit" />
          </div>
        </form>
        <div className="howto">
          <p>
            To begin simply enter the text you want to see on your postcard
            above. Then enter the url of an image you would like as you
            background. Hit submit and watch the magic happen!
          </p>
        </div>
        {/* Code for Viewing Postcard live on the page while client is creating a postcard*/}
        <div className="cardholder">
          <div
            className="postcard"
            style={{
              backgroundImage: `url(${this.state.image})`,
            }}
          >
            <p className="postcardText">{this.state.postcardText}</p>
          </div>
        </div>
        {/* End Code for Viewing Postcard */}
      </main>
    ) : (
      <Redirect to="/" />
    );
  }
}
