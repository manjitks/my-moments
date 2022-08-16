import React, { Component } from "react";
import { Route, withRouter, Switch } from "react-router-dom";
import { Layout, Affix } from "antd";
import { connect, useDispatch } from 'react-redux';


import "./App.css";
import LoadingIndicator from "../component/common/LoadingIndicator";
import AppHeader from "../component/common/AppHeader";
import Login from "../component/user/login/Login";
import Signup from "../component/user/signup/Signup";
import NewsFeed from "../component/post/newsfeed/NewsFeed";
import { getCurrentUser } from "../util/ApiUtil";
import { ACCESS_TOKEN } from "../component/common/constants";
import MeProfile from "../component/user/profile/MeProfile";
import Profile from "../component/user/profile/Profile";
import Discover from "../component/post/discover/Discover";
import { getCurrentUserPosts } from "../util/ApiUtil";

const { Header, Content } = Layout;

class App extends Component {
  state = {
    isAuthenticated: false,
    isLoading: false
  };

  componentDidMount = () => {
    console.log("manjit")
    //this.loadCurrentUser();
  };


  handleUpdateCurrentuser = currentuser => {
    this.setState({ currentUser: { ...currentuser } });
  };

  handleLogout = (redirectTo = "/login") => {
    console.log("lo re")
    localStorage.removeItem(ACCESS_TOKEN);

    this.setState({
      currentUser: null,
      isAuthenticated: false
    });
    this.props.history.push(redirectTo);
  };

  logout = () => {
    console.log("logg")
    localStorage.removeItem(ACCESS_TOKEN);

    this.setState({
      currentUser: null,
      isAuthenticated: false
    });
  };


  handleGetUserPosts = () => {
    getCurrentUserPosts().then(response => this.setState({ posts: response }));
  };

  render() {
    console.log("manjit")
    //this.loadCurrentUser();

    if (this.state.isLoading) {
      return <LoadingIndicator />;
    }

    let layoutHeader;

    if (this.props.isAuthenticated) {
      layoutHeader = (
        <Affix offsetTop={0}>
          <Header>
            <AppHeader
              isAuthenticated={this.props.isAuthenticated}
              currentUser={this.props.currentUser}
              onGetUserPosts={this.handleGetUserPosts}
              {...this.props}
            />
          </Header>
        </Affix>
      );
    }

    return (
      <Layout className="layout">
        {layoutHeader}
        <Content className="app-content">
          <div className="container">
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <NewsFeed
                    isAuthenticated={this.props.isAuthenticated}
                    currentUser={this.props.currentUser}
                    {...props}
                  />
                )}
              />
              <Route
                exact
                path="/login"
                render={props => (
                  <Login
                    isAuthenticated={this.props.isAuthenticated}
                    currentUser={this.props.currentUser}
                    {...props}
                  />
                )}
              />
              <Route
                exact
                path="/signup"
                render={props => (
                  <Signup
                    isAuthenticated={this.props.isAuthenticated}
                    currentUser={this.props.currentUser}
                    {...props}
                  />
                )}
              />
              <Route
                exact
                path="/users/me"
                render={props => (
                  <MeProfile
                    isAuthenticated={this.props.isAuthenticated}
                    currentUser={this.props.currentUser}
                    onLogout={this.handleLogout}
                    onUpdateCurrentUser={this.handleUpdateCurrentuser}
                    onGetUserPosts={this.handleGetUserPosts}
                    posts={this.state.posts}
                    {...props}
                  />
                )}
              />
              <Route
                path="/users/:username"
                render={props => (
                  <Profile
                    isAuthenticated={this.props.isAuthenticated}
                    currentUser={this.props.currentUser}
                    {...props}
                  />
                )}
              />
              <Route
                exact
                path="/discover"
                render={props => (
                  <Discover
                    isAuthenticated={this.props.isAuthenticated}
                    currentUser={this.props.currentUser}
                    {...props}
                  />
                )}
              />
            </Switch>
          </div>
        </Content>
      </Layout>
    );
  }
}


const mapStateToProps = state => {
  return {
    currentUser: state.auth.currentUser,
    isAuthenticated:state.auth.isAuthenticated
    //anotherProp: state.anotherProp
  };
};



const mapDispatchToProps = dispatch => ({
  //handleSubmittest: res=> dispatch(handleSubmitRed(res))
});


const withRouterApp= withRouter(App);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouterApp);

