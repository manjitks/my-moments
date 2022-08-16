

import React, { Component } from "react";
import "./login.css";
import { Form, Input, Button, Icon, Row, Col, notification } from "antd";
import { Link } from "react-router-dom";

import LoginForm from "./LoginForm";


class Login extends Component {
  state = {};

  Logintest = ()=>{
    return{}
  }

  componentDidMount = () => {
    if (this.props.isAuthenticated) {
      this.props.history.push("/");
    }
    
  };

  render() {
    if (this.props.isAuthenticated) {
      this.props.history.push("/");
    }
    const AntWrappedLoginForm = Form.create()(LoginForm);
    return (
      <React.Fragment>
        <div className="login-container">
          <Row type="flex" justify="center">
            <Col pan={24}>
              <div className="logo-container">
                <span>𝓜𝔂 𝓜𝓸𝓶𝓮𝓷𝓽𝓼</span>
              </div>
            </Col>
            <Col pan={24}>
              <AntWrappedLoginForm onLogin={this.props.onLogin} />
            </Col>
          </Row>
        </div>
        <div className="signup-link-container">
          Don't have an account? <Link to="/signup">Signup</Link>
        </div>
      </React.Fragment>
    );
  }
}


export default Login;

