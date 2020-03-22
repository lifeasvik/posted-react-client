import React, { Component } from "react";
// import "./styles.css";

export default class Viewpostcard extends Component {
  // state = {
  //   postcardText: "this.state",
  //   image: ""
  // };
  // static contextType = AppContext;

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="App">
        <h1>Posted</h1>
        <form onSubmit={this.handleSubmit}>
          <p>
            <input
              type="text"
              name="postcard-text"
              placeholder="Postcard Text"
              value={this.state.postcardText}
              onChange={e => this.setState({ postcardText: e.target.value })}
            />
          </p>
          <p>
            <input
              type="text"
              name="image-url"
              placeholder="Image URL"
              value={this.state.image}
              onChange={e => this.setState({ image: e.target.value })}
            />
          </p>
          <p>
            <input type="submit" />
          </p>
        </form>
        <div
          className="postcard"
          style={{
            backgroundImage: `url(${this.state.image})`
          }}
        >
          <p class="postcardText">{this.state.postcardText}</p>
        </div>
      </div>
    );
  }
}
