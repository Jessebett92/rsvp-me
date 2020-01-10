import React from "react";

export default class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: ""
    };
  }
  render() {
    return (
      <div className="login">
        <h1>Login Here!</h1>
      </div>
    );
  }
}
