import React, { Component } from "react";
import { connect } from "react-redux";
import Login from "./Login";
import Logout from "./Logout";
import * as actions from "../../actions";

class Admin extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  renderContent() {
    switch (this.props.auth) {
      case null:
        return <div>JKHSDKJNASKJDNKJASND</div>;
      case false:
        return <Login />;
      default:
        return <Logout />;
    }
  }

  render() {
    return <>{this.renderContent()}</>;
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, actions)(Admin);
