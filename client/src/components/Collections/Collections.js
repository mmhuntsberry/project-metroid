import React from "react";
import DropdownMenu from "../DropdownMenu";
import ListSearchBar from "../ListSearchBar";
import SortOrderButton from "../SortOrderButton";
import {
  PageWrapper,
  PageTitle,
  ContentWrapper,
  MetaWrapper,
  AddCollectionButton
} from "./Collection.styles";

const collectionList = ["All Games", "Best SNES RPGs You’ve Already Seen on Hundreds of Lists Already", "Best Shmups for REAL MANLY MEN!!", "Legendary Soundtracks"];
const itemsPerPage = ["10", "25", "50", "100"];
const sortByOptions = ["Title", "Release Date", "Date Added", "Rating"];

const Collections = () => {
  return (
    <PageWrapper>
      <PageTitle>Your Collections</PageTitle>
      <ContentWrapper>
        <MetaWrapper>
          <DropdownMenu
            text={""}
            options={collectionList}
            default={"Choose A Collection"}
          />
          <ListSearchBar />
          <DropdownMenu
            text={"Games Per Page: "}
            options={itemsPerPage}
            default={itemsPerPage[0]}
          />
          <DropdownMenu
            text={"Sort By: "}
            options={sortByOptions}
            default={sortByOptions[2]}
          />
          <SortOrderButton />
          <AddCollectionButton>Add A Collection</AddCollectionButton>
        </MetaWrapper>
        <div style={{height: "500px"}}></div>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default Collections;
