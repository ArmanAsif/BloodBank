import React from "react";
import ReactPaginate from "react-paginate";

const Paginate = ({pageCount, changePage}) => {
  return (
    <ReactPaginate
      previousLabel={"P"}
      nextLabel={"N"}
      pageCount={pageCount}
      onPageChange={changePage}
      containerClassName={"paginateButton"}
      activeClassName={"paginateActive"}
      previousLinkClassName={"previousBttn"}
      nextLinkClassName={"nextBttn"}
      disabledClassName={"paginateDisabled"}
    />
  );
};

export default Paginate;
