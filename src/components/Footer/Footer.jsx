import * as React from "react";

export class Footer extends React.Component {
  render() {
    const {currentPage, onPageChange} = this.props;

    return (
      <footer>
        <button onClick={() => onPageChange(currentPage + 1)}>Prev</button>
        <button onClick={() => onPageChange(currentPage - 1)}>Next</button>
      </footer>
    )
  }
}
