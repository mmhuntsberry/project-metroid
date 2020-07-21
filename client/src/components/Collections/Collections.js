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
  AddCollectionButton
} from "./Collections.styles";
import CollectionsList from "../CollectionsList";
import CurrentlyPlayingList from "../CurrentlyPlayingList"

const currentlyPlaying = [
  {
    boxArt: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1qve.jpg",
    title: "The Legend of Zelda: Link's Awakening",
    releaseDate: "2019-09-20",
    platform: "Nintendo Switch",
    startedOn: "2019-11-21"
  },
  {
    boxArt: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1nic.jpg",
    title: "Persona 5 Royal",
    releaseDate: "2019-10-31",
    platform: "Playstation 4",
    startedOn: "2020-06-17"
  },
];

// hard-coded data that will eventually be filled by the database
const collectionListData = [
  {
    title: "All Games",
    thumbnail: "https://gamefaqs1.cbsistatic.com/box/4/1/0/48410_front.jpg",
    games: "381",
    comments: "",
    main: true,
    disabled: "disabled"
  },
  {
    title: "Best SNES RPGs You’ve Already Seen on Hundreds of Lists Already",
    thumbnail: "https://gamefaqs1.cbsistatic.com/box/2/2/1/24221_front.jpg",
    games: "14",
    comments: "1",
    main: false
  },
  {
    title: "Best Shmups for REAL MANLY MEN!!",
    thumbnail: "https://gamefaqs1.cbsistatic.com/box/2/0/2/49202_front.jpg",
    games: "27",
    comments: "4",
    main: false
  },
  {
    title: "Legendary Soundtracks",
    thumbnail: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2cm4.jpg",
    games: "39",
    comments: "1",
    main: false
  },
];

// get just the collection titles for our quick select dropdown menu
const collectionListTitles = collectionListData.map(collection => collection.title)

// our data for the other dropdown menus. these won't change.
const itemsPerPage = ["10", "25", "50", "100"];
const sortByOptions = ["Title", "Release Date", "Date Added", "Rating"];

const handleAddCollection = () => {
  // const button = document.querySelector(".add-collection-button");
  // const input = document.querySelector(".add-collection-input");
  // const metaToolbar = document.querySelector(".meta-toolbar");
  // const unusedCells = Array.from(metaToolbar.childNodes);
  
  // bad idea. use a modal instead.
  // if (button.innerText === "Add") {
  //   unusedCells.map(cell => (cell.style.display = "block"));
  //   metaToolbar.style.gridTemplateColumns =
  //     "300px auto min-content min-content 36px min-content";
  //   metaToolbar.style.alignItems = "flex-end";
  //   button.innerText = "Add A Collection";
  //   button.style.position = "relative";
  //   button.style.backgroundColor = "var(--dim-green)";
  //   window.setTimeout(() => {
  //     input.style.transform = "scaleX(0)";
  //   }, 100);
  //   input.style.display = "none";
  // } else {
  //   unusedCells.map((cell, index) =>
  //     index < unusedCells.length - 1
  //       ? (cell.style.display = "none")
  //       : (cell.style.display = "flex")
  //   );
  //   metaToolbar.style.gridTemplateColumns = "auto";
  //   metaToolbar.style.alignItems = "center";
  //   button.innerText = "Add";
  //   window.setTimeout(() => {
  //     input.style.transform = "scaleX(1)";
  //   }, 100);
  //   input.style.display = "block";
  //   button.style.position = "absolute";
  //   button.style.backgroundColor = "var(--pink)";
  //   input.focus();
  // }
};

const Collections = () => {
  const [previousButton, setPreviousButton] = useState("");

  return (
    <PageWrapper>
      <PageTitle>Your Collections</PageTitle>
      <ContentWrapper className="content-wrapper">
        <CurrentlyPlayingList currentlyPlaying={currentlyPlaying} />
        <MetaWrapper className="meta-toolbar">
          <DropdownWithTitle>
            <DropdownTitle>Quick Select</DropdownTitle>
            <DropdownMenu
              text={""}
              options={collectionListTitles}
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
          <AddCollectionButton
            className="add-collection-button"
            onClick={handleAddCollection}
          >
            Add A Collection
          </AddCollectionButton>
          <ListSearchBar />
        </MetaWrapper>
        <CollectionsList collectionListData={collectionListData}/>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default Collections;
