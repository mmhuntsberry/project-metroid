import React, { useState } from "react";
import DropdownMenu from "../DropdownMenu";
import ListSearchBar from "../ListSearchBar";
import SortOrderButton from "../SortOrderButton";
import {
  PageWrapper,
  PageTitle,
  ContentWrapper,
  MetaWrapper,
  DropdownWithTitle,
  DropdownTitle,
  AddCollectionContainer,
  AddCollectionInput,
  AddCollectionButton
} from "./Collections.styles";
import CollectionsList from "../CollectionsList";

const collectionList = [
  "All Games",
  "Best SNES RPGs You’ve Already Seen on Hundreds of Lists Already",
  "Best Shmups for REAL MANLY MEN!!",
  "Legendary Soundtracks"
];
const itemsPerPage = ["10", "25", "50", "100"];
const sortByOptions = ["Title", "Release Date", "Date Added", "Rating"];

const handleAddCollection = () => {
  const button = document.querySelector(".add-collection-button");
  const input = document.querySelector(".add-collection-input");
  const metaToolbar = document.querySelector(".meta-toolbar");
  const unusedCells = Array.from(metaToolbar.childNodes);

  if (button.innerText === "Add") {
    unusedCells.map(cell => (cell.style.display = "block"));
    metaToolbar.style.gridTemplateColumns =
      "300px auto min-content min-content 36px min-content";
    metaToolbar.style.alignItems = "flex-end";
    button.innerText = "Add A Collection";
    button.style.position = "relative";
    button.style.backgroundColor = "var(--dim-green)";
    window.setTimeout(() => {
      input.style.transform = "scaleX(0)";
    }, 100);
    input.style.display = "none";
  } else {
    unusedCells.map((cell, index) =>
      index < unusedCells.length - 1
        ? (cell.style.display = "none")
        : (cell.style.display = "flex")
    );
    metaToolbar.style.gridTemplateColumns = "auto";
    metaToolbar.style.alignItems = "center";
    button.innerText = "Add";
    window.setTimeout(() => {
      input.style.transform = "scaleX(1)";
    }, 100);
    input.style.display = "block";
    button.style.position = "absolute";
    button.style.backgroundColor = "var(--pink)";
    input.focus();
  }
};

const Collections = () => {
  const [previousButton, setPreviousButton] = useState("");

  return (
    <PageWrapper>
      <PageTitle>Your Collections</PageTitle>
      <ContentWrapper>
        <MetaWrapper className="meta-toolbar">
          <DropdownWithTitle>
            <DropdownTitle>Quick Select</DropdownTitle>
            <DropdownMenu
              text={""}
              options={collectionList}
              default={"Choose A Collection"}
              previousButton={previousButton}
              setPreviousButton={setPreviousButton}
            />
          </DropdownWithTitle>
          <DropdownMenu
            text={"Collections Per Page: "}
            options={itemsPerPage}
            default={itemsPerPage[0]}
            spanMultiple={true}
            previousButton={previousButton}
            setPreviousButton={setPreviousButton}
          />
          <DropdownMenu
            text={"Sort By: "}
            options={sortByOptions}
            default={sortByOptions[2]}
            spanMultipleMQ2={true}
            previousButton={previousButton}
            setPreviousButton={setPreviousButton}
          />
          <SortOrderButton />
          <AddCollectionContainer>
            <AddCollectionInput
              type="search"
              name="Search"
              className="add-collection-input"
              placeholder="Collection Name"
            />
            <AddCollectionButton
              className="add-collection-button"
              onClick={handleAddCollection}
            >
              Add A Collection
            </AddCollectionButton>
          </AddCollectionContainer>
          <ListSearchBar />
        </MetaWrapper>
        <CollectionsList />
      </ContentWrapper>
    </PageWrapper>
  );
};

export default Collections;
