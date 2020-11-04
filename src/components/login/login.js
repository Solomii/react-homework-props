import React from "react";
import "./FormErrors";
import "./login.css";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      formErrors: { email: "", password: "" },
      emailValid: false,
      passwordValid: false,
      formValid: false,
    };
    // this.handleUserInput = this.handleUserInput(this);
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch (fieldName) {
      case "email":
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? "" : " is invalid";
        break;
      case "password":
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? "" : " is too short";
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        emailValid: emailValid,
        passwordValid: passwordValid,
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid: this.state.emailValid && this.state.passwordValid,
    });
  }

  errorClass(error) {
    return error.length === 0 ? "" : "has-error";
  }

  render() {
    return (
      <div className="loginForm">
        <div className="loginForm-wrapper">
          <div className="loginForm-wraper-form">
            <form className="demoForm">
              <h4>SING IN TO YOUR ACCOUNT</h4>
              <div className="panel panel-default">
                <FormErrors formErrors={this.state.formErrors} />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={this.state.email}
                  placeholder="Email address"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  value={this.state.password}
                  placeholder="Password"
                  min="7"
                />
              </div>
              <div>
                <label>
                  <input type="checkbox" />
                  Keep me signed in
                </label>
              </div>
              <button type="submit" className="btn btn-primary">
                Sign up
              </button>
              <p>Forgot your password?</p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default LoginForm;
