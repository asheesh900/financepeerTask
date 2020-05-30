import React, { Component } from 'react'
import axios from 'axios';

export default class FileUpload extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            uploadFile: ""
        }
    }
    
    handleChange = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.files[0]
        })
        // let file =  e.target.uploadFile.files[0]
        console.log(e.target.files)
    }

    handleClick = (e) => {
        const data = new FormData()
        data.append('file', this.state.uploadFile)

        const url = `http://localhost:5000/upload/file`
        axios
            .post(url, data)
            .then(res => {
                console.log(res.data)
            })
    }

    componentDidMount = () => {
        
    }


    render() {
        return (
          <div className="container col-8">
            <h1>File upload module</h1>
            <form className="upload">
              <div className="custom-file mb-3">
                <input
                  onChange={this.handleChange}
                  type="file"
                  name="uploadFile"
                  accept=".json"
                  className="custom-file-input"
                  id="validatedCustomFile"
                  required
                />
                <label
                  className="custom-file-label"
                  htmlFor="validatedCustomFile"
                >
                  Choose file...
                </label>
                <button
                  type="button"
                  class="btn btn-success btn-block mt-4"
                  onClick={this.handleClick}
                >
                  Upload File
                </button>
              </div>
            </form>
            {/* <form class="upload">
                        <input type="file" name="uploadFile" accept=".json" required />
                        <br/><br/>
                        <input type="submit" />
                    </form> */}
          </div>
        );
    }
}
