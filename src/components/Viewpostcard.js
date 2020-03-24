import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles.css";
import AppContext from "./Context";

export default class Viewpostcard extends Component {
  static contextType = AppContext;

  render() {
    return (
      <div className="viewpage">
        <div>View Postcards</div>
        <div className="finishedpost"></div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/postcard">Create Another</Link>
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
      </div>
    );
  }
}
