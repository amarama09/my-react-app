import React, { Component } from "react";
class Paginator extends Component {
  pagesToRender() {
    const { totalItems, itemsPerPage } = this.props;
    if (totalItems <= itemsPerPage) return null;
    let pageCount = Math.floor(totalItems / itemsPerPage);
    const reminder = totalItems % itemsPerPage;

    if (reminder > 0) pageCount++;

    return pageCount;
  }

  onPageClick=(pageNumber)=>{

    this.props.handlePageClick(pageNumber);

  }

  render() {
    const pageCount = this.pagesToRender();
    const currentPage = this.props.currentPage;
    if (!pageCount) return null;

    return (
      <nav aria-label="...">
        <ul className="pagination pagination-lg">
          {Array(pageCount)
            .fill()
            .map((_, i) => (
              <li
                className={
                  currentPage === i + 1 ? "page-item disabled" : "page-item"
                }
                key={i + 1}
              >
                <a className="page-link" href="#" onClick={()=>this.onPageClick(i+1)}>
                  {i + 1}
                </a>
              </li>
            ))}
        </ul>
      </nav>
    );
  }
}

export default Paginator;
