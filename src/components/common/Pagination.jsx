/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";
import ReactPaginate from "react-paginate";
import { useDispatch } from "react-redux";
import { getCurrentItems, setIsLoading } from "../../features/dataSlice";

const Pagination = ({ itemsPerPage, url }) => {
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  const fetchData = async () => {
    dispatch(setIsLoading(true));
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      dispatch(setIsLoading(false));
    } catch (error) {
      dispatch(setIsLoading(false));
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const endOffset = offset + itemsPerPage;
  const currentItems = data.slice(offset, endOffset);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  useEffect(() => {
    dispatch(getCurrentItems(currentItems));
  }, [currentItems]);

  const handlePageClick = (e) => {
    const newOffset = (e.selected * itemsPerPage) % data.length;
    setOffset(newOffset);
  };

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel={<FiChevronsRight />}
      onPageChange={handlePageClick}
      pageRangeDisplayed={2}
      pageCount={pageCount}
      previousLabel={<FiChevronsLeft />}
      renderOnZeroPageCount={null}
      containerClassName="wb-pagination"
      pageClassName="pagination-item"
      pageLinkClassName="pagination-link"
      activeClassName="pagination-link-active"
      previousLinkClassName="prev"
      nextLinkClassName="next"
      disabledClassName="disabled"
    />
  );
};

export default Pagination;
