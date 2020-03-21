import React from "react";
import "./styles.css";

function App() {
  state = {
    logininput: "",
    password: ""
  };

  loginHandler = e => {
    e.preventDefault();
    this.setState({ username: e.target.value });
  };

  passwordHandler = e => {
    e.preventDefault();
    this.setState({ password: e.target.value });
  };

  // why is this not working? is it because it is stateless and i need to add class App extends Component?

  // Can i also write it like this? import React, {useState} from 'react';
  //const [userInput, setUserInput] = useState('')??

  //am i doing multiple inputs wrong should i set 2 const
  let nam = event.target.name;
  let val = event.target.value;
  this.setState({ [nam]: val });

  const [userInput, setUserInput] = useState("");

  return (
    <main className="App">
      <div>
        <h1>Welcome to Posted</h1>
      </div>
      <div>Sign in</div>

      <div>
        <h4>Login:</h4>
        <input
          type="text"
          name="logininput"
          required
          onChange={this.loginHandler}
          value={this.state.loginhandler}
        />
        <h4>Password:</h4>
        <input
          type="password"
          name="passwordInput"
          required
          onChange={this.passwordHandler}
          value={this.state.passwordhandler}
        />
      </div>
      <div>
        <input type="button" name="submitlogin">
          Submit
        </input>
      </div>
      <div>
        <h1>Latest Postcards:</h1>
      </div>
    </main>
  );
}

export default App;
