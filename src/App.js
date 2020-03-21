import React from "react";

function App() {
  state = {
    logininput: "",
    password: ""
  };
  loginHandler = e => {
    this.setState({ username: e.target.value });
  };
  passwordHandler = e => {
    this.setState({ password: e.target.value });
  };

  // why is this not working? is it because it is stateless and i need to add class App extends Component?

  // Can i also write it like this? import React, {useState} from 'react';
  //const [userInput, setUserInput] = useState('')??

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
          name="logininput"
          required
          onChange={this.passwordHandler}
          value={this.state.passwordhandler}
        />
      </div>
      <div>
        <h1>Latest Postcards:</h1>
      </div>
    </main>
  );
}

export default App;
