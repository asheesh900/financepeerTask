import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../../Redux/GetData/Action";
import Card from "./Card";
import Paginate from "./Pagination";

class Display extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentData: [],
    };
  }

  componentDidMount = () => {
    this.props.getData();
  };

  render() {
    const { isData, data } = this.props;
    let PER_PAGE = 10;
    // console.log(data, isRequest, isData)
    return (
      <div className="container display-cont card-shadow">
        <h1 className="text-center">Uploaded Data </h1>
        <div className="row">
          {isData ? (
            data.records &&
            data.records.map((record) => {
              return (
                <div className="col-4">
                  <Card record={record} />
                </div>
              );
            })
          ) : (
            <p className="display-4">Loading...</p>
          )}
          {data.records && (
            <Paginate
              pageChange={this.pageChange}
              TOTAL_COUNT={data.records.length}
              PER_PAGE={PER_PAGE}
            />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isData: state.getDataReducer.isData,
  data: state.getDataReducer.data,
});

const mapDispatchToProps = (dispatch) => ({
  getData: () => dispatch(getData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Display);
