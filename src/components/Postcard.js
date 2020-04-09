import React from "react";
import "../styles.css";
// import { Link } from "react-router-dom";
import AppContext from "./Context";
import TokenService from "../services/token-service";
import { Redirect } from "react-router-dom";
import PostedApiService from "../services/postedapiservice";

export default class Createpostcard extends React.Component {
  static contextType = AppContext;
  state = {
    postcardText: "",
    image: "",
    finishedpostcard: "",
  };

  handleSubmit = (e) => {
    // this.context.addPostcard(this.state.image, this.state.postcardText);
    // this.props.history.push("/viewpostcard");

    ev.preventDefault();
    this.setState({ error: null });
    const { postcard_text, image_url } = ev.target;

    postedapiservice
      .postCard({
        postcard_text: postcard_text.value,
        image_url: image_url.value,
      })
      .then((res) => {
        postcard_text.value = "";
        image_url.value = "";
        this.props.history.push("/postcard");
      })
      .catch((res) => {
        this.setState({
          error: res.error,
        });
      });
  };

  render() {
    return TokenService.getAuthToken() ? (
      <div className="postpage">
        <h1>Posted</h1>
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

        {/* Code for Viewing Postcard */}
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
      </div>
    ) : (
      <Redirect to="/" />
    );
  }
}
