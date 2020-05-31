import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { signOut } from "../../Redux/Authorization/Action";

class Navbar extends Component {
  render() {
    const { token, username } = this.props;
    // console.log(this.props)
    return (
      <div className="nav">
        <div className="nav-logo">
          <Link to="/">
            <img
              src="/logo.jpg"
              alt="logo"
              style={{ height: "50px", width: "50px" }}
            />
          </Link>
          {token ? (
            <div className="private-component">
              <Link className="mx-2 text-dark" to="/fileUpload">
                FileUpload
              </Link>
              <Link className="mx-2 text-dark" to="/display">
                Display Uploaded Data
              </Link>
            </div>
          ) : null}
        </div>

        <div className="nav-links">
          {token ? (
            <div className="nav-logOut">
              <span>{username} </span>
              <span className="signout-logo">
                <FontAwesomeIcon
                  onClick={this.props.signOut}
                  icon={faPowerOff}
                />
              </span>
            </div>
          ) : (
            <div className="nav-logOut">
              <span>
                <Link to="/logIn">LogIn</Link>
              </span>
              <span>
                <Link to="/signup">Signup</Link>
              </span>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.authReducer.token,
  isLogin: state.authReducer.isLogin,
  username: state.authReducer.username,
});

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
