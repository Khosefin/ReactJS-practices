import React, { Component } from "react";
import "../css/css.css";
import { MdEmail } from "react-icons/md";
import { BiSolidLock } from "react-icons/bi";

export default class template extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emailClass: "",
      passwordClass: "",
      eBoxClass: "",
      pBoxClass: "",
      email: "",
      password: "",
    };

    this.emailValidation = this.emailValidation.bind(this);
    this.passwordValidation = this.passwordValidation.bind(this);
    this.submitvalidation = this.submitvalidation.bind(this);
  }

  emailValidation(event) {
    console.log(event);
    this.setState({
      email: event.target.value,
      emailClass: "",
      eBoxClass: "",
    });
  }
  passwordValidation(event) {
    this.setState({
      password: event.target.value,
      passwordClass: "",
      pBoxClass: "",
    });
  }

  submitvalidation() {
    if (this.state.email.length === 0) {
      this.setState({
        emailClass: "red active",
        eBoxClass: "red",
      });
      setTimeout(() => {
        this.setState({
          emailClass: "red",
        });
      }, 1000);
    }
    if (this.state.password.length === 0) {
      this.setState({
        passwordClass: "red active",
        pBoxClass: "red",
      });
      setTimeout(() => {
        this.setState({
          passwordClass: "input red",
        });
      }, 1000);
    }

    this.state.password &&
      this.state.email &&
      window.location.reload();
  }

  render() {
    return (
      <div className="body">
        <div className="center">
          <form action="">
            <div className="title">Login</div>
            <span className="inputs">
              <span className="inputf">
                <input
                  type="email"
                  onChange={this.emailValidation}
                  className={`input ${this.state.emailClass}`}
                  placeholder="Email"
                  value={this.state.email}
                />
                <span className={`label ${this.state.eBoxClass}`}>Email</span>
                <span className={`material-icons icon ${this.state.eBoxClass}`}>
                  <MdEmail className={this.state.eBoxClass} />
                </span>
              </span>
              <span className="inputf">
                <input
                  type="password"
                  onChange={this.passwordValidation}
                  className={`input ${this.state.passwordClass}`}
                  placeholder="Password"
                  value={this.state.password}
                />
                <span className={`label ${this.state.pBoxClass}`}>Password</span>
                <span className={`material-icons icon ${this.state.pBoxClass}`}>
                  <BiSolidLock className={`material-icons icon ${this.state.pBoxClass}`} />
                </span>
              </span>
            </span>
            <div className="links">
              <a href="#">Forgot Password</a>
              <label>
                <input type="checkbox" id="remember" />
                Remember Me
              </label>
            </div>
            <button
              type="button"
              className="btn"
              onClick={this.submitvalidation}
            >
              <span>Login</span>
            </button>
            <div className="text">
              New user? Create an account <a href="#">Register</a>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
