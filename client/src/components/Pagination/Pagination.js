import React from 'react'
import {
  PaginationWrapper,
  PaginationContainer,
  PrevNextButton,
  PageNumberContainer,
  PageNumberLink
} from "./Pagination.styles"

export const Pagination = ({ collectionsPerPage, totalCollections, paginate, pageNumber }) => {
  const pageNumbers = [];

  for (let i = 1; i < Math.ceil(totalCollections / collectionsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <PaginationWrapper>
      {pageNumber !== 1 ? <PrevNextButton>Prev</PrevNextButton> : null}
      <PaginationContainer>
        
        {pageNumbers.map(number => (
          <PageNumberContainer key={number}>
            <PageNumberLink onClick={(e) => paginate(e, number)} href="!#" currentPage={pageNumber === number}>
              {number}
            </PageNumberLink>
          </PageNumberContainer>
        ))}
      </PaginationContainer>
      {pageNumber !== pageNumbers.length ? <PrevNextButton>Next</PrevNextButton> : null}
    </PaginationWrapper>
  )
}

export default Pagination;
