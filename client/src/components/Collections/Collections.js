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
  AddCollectionButton,
} from "./Collections.styles";
import CollectionsList from "../CollectionsList";
import CurrentlyPlayingList from "../CurrentlyPlayingList";
import Modal from "../Modal";
import addCollectionGraphic from "../../assets/collection-add.svg";
import editCollectionGraphic from "../../assets/collection-edit.svg";
import deleteCollectionGraphic from "../../assets/collection-delete.svg";
import collectionListData from "./collectionListData";

const currentlyPlaying = [
  {
    boxArt: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1qve.jpg",
    title: "The Legend of Zelda: Link's Awakening",
    releaseDate: "2019-09-20",
    platform: "Nintendo Switch",
    startedOn: "2019-11-21",
  },
  {
    boxArt: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1nic.jpg",
    title: "Persona 5 Royal",
    releaseDate: "2019-10-31",
    platform: "Playstation 4",
    startedOn: "2020-06-17",
  },
];

// get just the collection titles for our quick select dropdown menu
const collectionListTitles = collectionListData.map(
  (collection) => collection.title
);

// our data for the other dropdown menus. these won't change.
const itemsPerPage = ["5", "10", "25", "50", "100"];
const sortByOptions = ["Title", "Date Added", "Games", "Comments"];

const Collections = () => {
  const [previousButton, setPreviousButton] = useState("");
  const [show, setShow] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [collectionList, setCollectionList] = useState([]);
  // const [selectedCollection, setSelectedCollection] = useState("");
  const [collectionsPerPage, setCollectionsPerPage] = useState(5);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(false);
  const [collectionSortBy, setCollectionSortBy] = useState("Date Added");
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchKeyword, setSearchKeyword] = useState(null);

  useEffect(() => {
    // for hard-coded data only.
    // remove and use async/await with fetch to get data from DB
    if (collectionList[0] === undefined) {
      const fetchCollectionList = async () => {
        setLoading(true);
        // TODO change for actual fetch request from DB
        await setCollectionList(collectionListData);
        setLoading(false);
      };

      fetchCollectionList();
    }
  }, [collectionList]);

  // trigger list sort
  useEffect(() => {
    handleCollectionsSortSelect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collectionSortBy]);

  // Get current posts
  const indexOfLastCollection = pageNumber * collectionsPerPage;
  const indexOfFirstCollection = indexOfLastCollection - collectionsPerPage;
  const currentCollections = collectionList.slice(
    indexOfFirstCollection,
    indexOfLastCollection
  );

  // Change page
  const paginate = (event, number) => {
    event.preventDefault();
    setPageNumber(number);
  };

  const handleCollectionSelect = (collection) => {};

  // set # of collections per page
  const handleCollectionsPerPageSelect = (pageCount) => {
    setCollectionsPerPage(parseInt(pageCount));
  };

  // sort list
  const handleCollectionsSortSelect = (order) => {
    const sortBy = collectionSortBy;
    let sortedArray;
    if (sortBy === "Title") {
      // sort by Title
      if (!order) {
        sortedArray = [...collectionList].sort((a, b) =>
          a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1
        );
        // default Title sort: ascending
        setSortOrder("asc");
      }
      if (order === "asc") {
        sortedArray = [...collectionList].sort((a, b) =>
          a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1
        );
      } else if (order === "desc") {
        sortedArray = [...collectionList].sort((a, b) =>
          b.title.toLowerCase() > a.title.toLowerCase() ? 1 : -1
        );
      }
      setCollectionList(sortedArray);
    } else if (sortBy === "Date Added") {
      // sort by Date Added
      if (!order) {
        sortedArray = [...collectionList].sort(
          (a, b) => Date.parse(a.dateAdded) - Date.parse(b.dateAdded)
        );
        // default Date sort: ascending
        setSortOrder("asc");
      }
      if (order === "asc") {
        sortedArray = [...collectionList].sort(
          (a, b) => Date.parse(a.dateAdded) - Date.parse(b.dateAdded)
        );
      } else if (order === "desc") {
        sortedArray = [...collectionList].sort(
          (a, b) => Date.parse(b.dateAdded) - Date.parse(a.dateAdded)
        );
      }
      setCollectionList(sortedArray);
    } else if (sortBy === "Games") {
      // sort by Games
      if (!order) {
        sortedArray = [...collectionList].sort((a, b) =>
          parseInt(a.games) < parseInt(b.games) ? 1 : -1
        );
        // default Games sort: descending
        setSortOrder("desc");
      }
      if (order === "asc") {
        sortedArray = [...collectionList].sort((a, b) =>
          parseInt(a.games) > parseInt(b.games) ? 1 : -1
        );
      } else if (order === "desc") {
        sortedArray = [...collectionList].sort((a, b) =>
          parseInt(a.games) < parseInt(b.games) ? 1 : -1
        );
      }
      setCollectionList(sortedArray);
    } else if (sortBy === "Comments") {
      // sort by Comments
      if (!order) {
        sortedArray = [...collectionList].sort((a, b) =>
          parseInt(a.comments) < parseInt(b.comments) ? 1 : -1
        );
        // default Comments sort: descending
        setSortOrder("desc");
      }
      if (order === "asc") {
        sortedArray = [...collectionList].sort((a, b) =>
          parseInt(a.comments) > parseInt(b.comments) ? 1 : -1
        );
      } else if (order === "desc") {
        sortedArray = [...collectionList].sort((a, b) =>
          parseInt(a.comments) < parseInt(b.comments) ? 1 : -1
        );
      }

      setCollectionList(sortedArray);
    }
  };

  const getScrollbarWidth = () => {
    return window.innerWidth - document.body.clientWidth;
  };

  const showModal = (e) => {
    const body = document.body;
    const scrollbarWidth = getScrollbarWidth();
    // add padding to account for disappearing scrollbar
    if (scrollbarWidth > 0) {
      body.style.paddingRight = scrollbarWidth + "px";
      body.style.overflowY = "hidden";
    }
    setShow(!show);
  };

  const modalData = {
    addCollection: {
      className: "modal__add-collection",
      graphic: addCollectionGraphic,
      title: "Add Collection",
      bodyType: "input",
      bodyText: `Enter collection name`,
      cancelText: "Cancel",
      confirmText: "Save",
    },
    editCollection: {
      className: "modal__edit-collection",
      graphic: editCollectionGraphic,
      title: "Edit Collection",
      bodyType: "input",
      bodyText: "",
      cancelText: "Cancel",
      confirmText: "Save",
    },
    deleteCollection: {
      className: "modal__delete-collection",
      graphic: deleteCollectionGraphic,
      title: "Are you sure?",
      bodyType: "text",
      bodyText: ``,
      cancelText: "Cancel",
      confirmText: "Yes",
    },
  };

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
              chosenOption={handleCollectionSelect}
            />
          </DropdownWithTitle>
          <DropdownMenu
            text={"Collections Per Page: "}
            menuType={"perpage"}
            options={itemsPerPage}
            default={itemsPerPage[0]}
            spanMultiple={true}
            previousButton={previousButton}
            setPreviousButton={setPreviousButton}
            chosenOption={handleCollectionsPerPageSelect}
          />
          <DropdownMenu
            text={"Sort By: "}
            menuType={"sortby"}
            options={sortByOptions}
            default={sortByOptions[1]}
            spanMultipleMQ2={true}
            previousButton={previousButton}
            setPreviousButton={setPreviousButton}
            chosenOption={setCollectionSortBy}
          />
          <SortOrderButton
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
            handleCollectionsSortSelect={handleCollectionsSortSelect}
          />
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
          <ListSearchBar
            placeholder="Search this collection"
            type="search"
            setSearchKeyword={setSearchKeyword}
          />
        </MetaWrapper>
        <CollectionsList
          collectionListData={currentCollections}
          getScrollbarWidth={getScrollbarWidth}
          showModal={showModal}
          setModalContent={setModalContent}
          modalData={modalData}
          show={show}
          searchKeyword={searchKeyword}
          pageNumber={pageNumber}
          loading={loading}
          collectionsPerPage={collectionsPerPage}
          paginate={paginate}
          setPageNumber={setPageNumber}
        />
        <Modal modalContent={modalContent} onClose={showModal} show={show} />
      </ContentWrapper>
    </PageWrapper>
  );
};

export default Collections;
