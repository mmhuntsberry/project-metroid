import React, { useState, useEffect } from "react";
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
import Modal from "../Modal"
import addCollectionGraphic from "../../assets/collection-add.svg"
import editCollectionGraphic from "../../assets/collection-edit.svg"
import deleteCollectionGraphic from "../../assets/collection-delete.svg"

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
    dateAdded: "2020-03-19 19:45:26",
    isMain: true,
    disabled: "disabled"
  },
  {
    title: "Totally Rad Games",
    thumbnail: "https://giantbomb1.cbsistatic.com/uploads/scale_medium/8/81005/2771287-2900330282-label.jpg",
    games: "52",
    comments: "12",
    dateAdded: "2020-07-08 01:26:02",
    isMain: false
  },
  {
    title: "Best SNES RPGs You’ve Already Seen on Hundreds of Lists Already",
    thumbnail: "https://gamefaqs1.cbsistatic.com/box/2/2/1/24221_front.jpg",
    games: "14",
    comments: "1",
    dateAdded: "2020-04-23 18:33:18",
    isMain: false
  },
  {
    title: "Best Shmups for REAL MANLY MEN!!",
    thumbnail: "https://gamefaqs1.cbsistatic.com/box/2/0/2/49202_front.jpg",
    games: "27",
    comments: "4",
    dateAdded: "2020-05-29 18:39:50",
    isMain: false
  },
  {
    title: "Legendary Soundtracks",
    thumbnail: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2cm4.jpg",
    games: "39",
    comments: "1",
    dateAdded: "2020-04-25 04:39:28",
    isMain: false
  },
];



// get just the collection titles for our quick select dropdown menu
const collectionListTitles = collectionListData.map(collection => collection.title)

// our data for the other dropdown menus. these won't change.
const itemsPerPage = ["10", "25", "50", "100"];
const sortByOptions = ["Title", "Date Added", "Games", "Comments"];

const Collections = () => {
  const [previousButton, setPreviousButton] = useState("");
  const [show, setShow] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [collectionList, setCollectionList] = useState(collectionListData);
  const [selectedCollection, setSelectedCollection] = useState("");
  const [collectionsPerPage, setCollectionsPerPage] = useState(10);
  const [collectionSortBy, setCollectionSortBy] = useState("Date Added")


  const handleCollectionSelect = () => {}
  const handleCollectionsPerPageSelect = () => {}
  const handleCollectionsSortSelect = () => {
    console.log(collectionSortBy)
    const sortBy = collectionSortBy
    let sortedArray;
    if (sortBy === "Title") {
      // sort by Title
      sortedArray = [...collectionList].sort((a, b) => (a.title.toLowerCase() > b.title.toLowerCase()) ? 1 : -1);
      setCollectionList(sortedArray);
    } else if (sortBy === "Date Added") {
      // sort by Date Added
      sortedArray = [...collectionList].sort((a, b) => (Date.parse(a.dateAdded) - Date.parse(b.dateAdded)));
      setCollectionList(sortedArray);
    } else if (sortBy === "Games") {
      // sort by Games
      sortedArray = [...collectionList].sort((a, b) => (parseInt(a.games) < parseInt(b.games)) ? 1 : -1);
      setCollectionList(sortedArray);
    } else if (sortBy === "Comments") {
      // sort by Comments
      sortedArray = [...collectionList].sort((a, b) => (parseInt(a.comments) < parseInt(b.comments)) ? 1 : -1);
      setCollectionList(sortedArray);
      console.log(sortedArray);
    }
  }

  useEffect(() => {
    handleCollectionsSortSelect();
  }, [collectionSortBy])

  const getScrollbarWidth = () => {
    return window.innerWidth - document.body.clientWidth;
  }

  const showModal = e => {
    const body = document.body
    const scrollbarWidth = getScrollbarWidth()
    // add padding to account for disappearing scrollbar
    if (scrollbarWidth > 0) {
      body.style.paddingRight = scrollbarWidth + "px";
      body.style.overflowY = "hidden";
    }
    setShow(!show)
  }

  const modalData = {
    addCollection: {
      className: "modal__add-collection",
      graphic: addCollectionGraphic,
      title: "Add Collection",
      bodyType: "input",
      bodyText: `Enter collection name`,
      cancelText: "Cancel",
      confirmText: "Save"
    },
    editCollection: {
      className: "modal__edit-collection",
      graphic: editCollectionGraphic,
      title: "Edit Collection",
      bodyType: "input",
      bodyText: "",
      cancelText: "Cancel",
      confirmText: "Save"
    },
    deleteCollection: {
      className: "modal__delete-collection",
      graphic: deleteCollectionGraphic,
      title: "Are you sure?",
      bodyType: "text",
      bodyText: ``,
      cancelText: "Cancel",
      confirmText: "Yes"
    }
  }

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
            default={sortByOptions[1]}
            spanMultipleMQ2={true}
            previousButton={previousButton}
            setPreviousButton={setPreviousButton}
            chosenOption={setCollectionSortBy}
          />
          <SortOrderButton />
          <AddCollectionButton
            className="add-collection-button"
            onClick={(e) => {
              e.preventDefault();
              setModalContent(modalData.addCollection);
              showModal(e);
            }}
          >
            Add A Collection
          </AddCollectionButton>
          <ListSearchBar placeholder="Search this collection" type="search" />
        </MetaWrapper>
        <CollectionsList
          collectionListData={collectionList}
          getScrollbarWidth={getScrollbarWidth}
          showModal={showModal}
          setModalContent={setModalContent}
          modalData={modalData}
          show={show}
        />
        <Modal
          modalContent={modalContent}
          onClose={showModal}
          show={show}
        />
      </ContentWrapper>
    </PageWrapper>
  );
};

export default Collections;
