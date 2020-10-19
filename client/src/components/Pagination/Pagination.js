import React from "react";
import {
  PaginationWrapper,
  PaginationContainer,
  PrevNextButton,
  PageNumberContainer,
  PageNumberLink,
} from "./Pagination.styles";

export const Pagination = ({
  collectionsPerPage,
  totalCollections,
  paginate,
  pageNumber,
  setPageNumber,
}) => {
  const pageNumbers = [];

  for (let i = 1; i < Math.ceil(totalCollections / collectionsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handlePrevClick = () => {
    if (pageNumber !== pageNumbers[0] && pageNumbers[0] !== undefined) {
      setPageNumber(pageNumber - 1);
    }
  };

  const handleNextClick = () => {
    if (pageNumber !== pageNumbers.length && pageNumbers[0] !== undefined) {
      setPageNumber(pageNumber + 1);
    }
  };

  return (
    <PaginationWrapper>
      {pageNumber !== pageNumbers[0] && pageNumbers[0] !== undefined ? (
        <PrevNextButton onClick={handlePrevClick}>Prev</PrevNextButton>
      ) : null}
      <PaginationContainer>
        {pageNumbers.map((number) => (
          <PageNumberContainer key={number}>
            <PageNumberLink
              onClick={(e) => paginate(e, number)}
              href="!#"
              currentPage={pageNumber === number}
            >
              {number}
            </PageNumberLink>
          </PageNumberContainer>
        ))}
      </PaginationContainer>
      {pageNumber !== pageNumbers.length && pageNumbers[0] !== undefined ? (
        <PrevNextButton onClick={handleNextClick}>Next</PrevNextButton>
      ) : null}
    </PaginationWrapper>
  );
};

export default Pagination;
