import React, { Component } from "react";
import Pagination from "react-js-pagination";

export default class Paginate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,
    };
  }

  handlePageChange = (pageNumber) => {
    console.log(`active page is ${pageNumber}`);
    this.setState({ activePage: pageNumber });
  };

  render() {
    const { TOTAL_COUNT, PER_PAGE } = this.props;
    return (
      <Pagination
        itemClass="page-item"
        linkClass="page-link"
        hideNavigation
        pageRangeDisplayed={10}
        activePage={this.state.activePage}
        itemsCountPerPage={PER_PAGE}
        totalItemsCount={TOTAL_COUNT}
        onChange={(pageNumber) => {
          this.handlePageChange(pageNumber);
        }}
      />
    );
  }
}
