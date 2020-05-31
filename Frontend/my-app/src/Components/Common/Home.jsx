import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div id="homeImg">
        <div>
          Upload your JSON file here.
          <br />
        </div>
        <Link to="/fileUpload">
          <button id="dash-btn">Upload a file</button>
        </Link>
      </div>
    );
  }
}
