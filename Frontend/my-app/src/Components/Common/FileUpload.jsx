import React, { Component } from "react";
import { connect } from "react-redux";
import { uploadFile } from "../../Redux/FileUpload/Action";

class FileUpload extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uploadFile: "",
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.files[0],
    });
    // console.log(e.target.files);
  };

  handleClick = (e) => {
    const data = new FormData();
    data.append("file", this.state.uploadFile);

    this.props.uploadFile(data);
    this.fileInput.value = "";
  };

  render() {
    return (
      <>
        <h1 className="text-center mt-4">File upload module</h1>
        <div className="container  file-upload-cont">
          <div className="row">
            <div className="col-md-6">
              <form method="post" action="#" id="#">
                <div className="form-group files">
                  <label>Upload Your File </label>
                  <input
                    name="uploadFile"
                    onChange={this.handleChange}
                    type="file"
                    className="form-control"
                    accept=".json"
                    ref={(ref) => (this.fileInput = ref)}
                    multiple=""
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-6">
            <button
              type="button"
              className="btn btn-success  btn-block mt-4"
              onClick={this.handleClick}
            >
              Upload File
            </button>
          </div>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  uploadFile: (data) => dispatch(uploadFile(data)),
});

export default connect(null, mapDispatchToProps)(FileUpload);
