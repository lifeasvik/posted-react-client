import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles.css";
import AppContext from "./Context";

// This is the component that allows you to view the postcard you created along with other postcards

export default class Viewpostcard extends Component {
  static contextType = AppContext;

  render() {
    const { postcards = [] } = this.context;
    return (
      <main className="contentliner">
        <div className="title">
          <h1>posted</h1>
        </div>
        <div>
          <div className="finishedpost">
            <div>
              <Link to="/">Go Back Home </Link>
            </div>

            <div>
              <Link to="/postcard">Create Another</Link>
            </div>
          </div>

          <div className="viewpage">
            <div>
              <h3>
                Thank you for your contribution! View your postcard and see what
                others have created
              </h3>
            </div>
          </div>

          {/* Displaying postcards here  */}

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
      </main>
    );
  }
}
