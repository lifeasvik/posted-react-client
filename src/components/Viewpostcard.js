import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles.css";
import AppContext from "./Context";

export default class Viewpostcard extends Component {
  static contextType = AppContext;

  componentDidMount() {
    // this.context.getStore();
  }

  render() {
    const { postcards = [] } = this.context;
    return (
      <div className="viewpage">
        <div>View Postcards</div>
        <div className="finishedpost"></div>
        <div>
          <Link to="/">Home </Link>
          <Link to="/postcard">Create Another</Link>
        </div>
        <div className="cardholder">
          {postcards.map((postcard) => (
            <div
              className="postcard"
              style={{
                backgroundImage: `url(${postcard.content})`,
              }}
            >
              <p className="postcardText">{postcard.title}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
