import React, { Component } from "react";
import { Form, Input, Button, Icon, Row, Col, notification } from "antd";
import { connect, useDispatch } from 'react-redux';

import { ACCESS_TOKEN,USER_ID} from "../../common/constants";
import { login } from "../../../util/ApiUtil";
import { handleSubmitRed } from "../../../store/auth/authAction";


const FormItem = Form.Item;

class LoginForm extends Component {
    state = {};

    componentDidMount() {
    }
    handleSubmit = event => {
        event.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            const loginRequest = Object.assign({}, values);
            login(loginRequest)
              .then(response => {
                this.props.handleSubmittest(response);
                //this.props.onLogin();
              })
              .catch(error => {
                if (error.status === 401) {
                  notification.error({
                    message: "MyMoments",
                    description:
                      "Username or Password is incorrect. Please try again!"
                  });
                } else {
                  notification.error({
                    message: "MyMoments",
                    description:
                      error.message ||
                      "Sorry! Something went wrong. Please try again!"
                  });
                }
              });
          }
        });
      };
  
    render() {
      const { getFieldDecorator } = this.props.form;
      return (
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem>
            {getFieldDecorator("username", {
              rules: [
                {
                  required: true,
                  message: "Please input your username!"
                }
              ]
            })(
              <Input
                prefix={<Icon type="user" />}
                size="large"
                name="username"
                placeholder="Username"
              />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator("password", {
              rules: [{ required: true, message: "Please input your Password!" }]
            })(
              <Input
                prefix={<Icon type="lock" />}
                size="large"
                name="password"
                type="password"
                placeholder="Password"
              />
            )}
          </FormItem>
          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              className="login-form-button"
            >
              Login
            </Button>
          </FormItem>
        </Form>
      );
    }
  }

  const mapStateToProps = state => {
    return {
      someProp: state.someProp,
      anotherProp: state.anotherProp
    };
  };
  
  

  const mapDispatchToProps = dispatch => ({
    handleSubmittest: res=> dispatch(handleSubmitRed(res))
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoginForm);

  