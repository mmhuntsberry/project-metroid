import React, { useState } from "react";
import { useTransition } from 'react-spring'
import {
  CollectionItem,
  CollectionContainer,
  CollectionThumbnail,
  CollectionInfoContainer,
  CollectionMetaAndTitle,
  CollectionTitle,
  CollectionMetaInfo,
  CollectionGames,
  CollectionGamesText,
  CollectionComments,
  CollectionCommentsText,
  CollectionControlsDropdownArrowContainer,
  CollectionControlsDropdownArrow,
  CollectionControlsContainer,
  CollectionControlContainer,
  CollectionControlIcon,
  CollectionControlText,  
  CollectionControlsDropdownList,
  CollectionControlsDropdownListItem
} from "./CollectionListItem.styles"

const CollectionListItem = ({ collection, populateModalData }) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const transitions = useTransition(drawerIsOpen, null, {
    from: {overflow: 'hidden', maxHeight: "0px"},
    enter: {maxHeight: "129px"},
    leave: {maxHeight: "0px"},
    config: {duration: 150}
    // config: {mass:1, tension:500, friction:1, clamp: true}
  })

  const handleControlsDrawerToggle = (e, isMain) => {
    e.stopPropagation()
    if (!isMain) {
      setDrawerIsOpen(!drawerIsOpen);
    }
  }

  return (
    <CollectionItem className="collection-list__item">
      <CollectionContainer>
        <CollectionThumbnail src={collection.thumbnail} />
        <CollectionInfoContainer>
          <CollectionMetaAndTitle>
            <CollectionTitle className="text-truncate--three-lines">
              {collection.title}
            </CollectionTitle>
            <CollectionMetaInfo>
              <CollectionGames>
                <svg
                  width="20"
                  height="14"
                  viewBox="0 0 20 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.4583 10.3316L18.4676 4.04993C18.2045 2.55781 17.0307 1.35516 15.4792 0.988217H15.4771C11.875 0.138042 8.12441 0.138042 4.52229 0.988217C2.96902 1.35516 1.79546 2.55752 1.53243 4.04993L0.541743 10.3316C0.235661 12.0686 1.65177 13.6501 3.5135 13.6501C4.98809 13.6501 6.29733 12.7574 6.76373 11.4342L6.98698 10.8001H13.0136L13.236 11.4342C13.7027 12.7574 15.0119 13.6501 16.4865 13.6501C18.3482 13.6501 19.7643 12.0686 19.4583 10.3316ZM8.81249 6.40625C8.81249 6.50074 8.77495 6.59135 8.70814 6.65816C8.64133 6.72497 8.55072 6.76251 8.45623 6.76251H6.91246V8.30628C6.91246 8.40076 6.87493 8.49137 6.80812 8.55819C6.74131 8.625 6.65069 8.66253 6.55621 8.66253H5.8437C5.74921 8.66253 5.6586 8.625 5.59179 8.55819C5.52498 8.49137 5.48744 8.40076 5.48744 8.30628V6.76251H3.94368C3.84919 6.76251 3.75858 6.72497 3.69177 6.65816C3.62495 6.59135 3.58742 6.50074 3.58742 6.40625V5.69374C3.58742 5.59926 3.62495 5.50864 3.69177 5.44183C3.75858 5.37502 3.84919 5.33749 3.94368 5.33749H5.48744V3.79372C5.48744 3.69924 5.52498 3.60862 5.59179 3.54181C5.6586 3.475 5.74921 3.43747 5.8437 3.43747H6.55621C6.65069 3.43747 6.74131 3.475 6.80812 3.54181C6.87493 3.60862 6.91246 3.69924 6.91246 3.79372V5.33749H8.45623C8.55072 5.33749 8.64133 5.37502 8.70814 5.44183C8.77495 5.50864 8.81249 5.59926 8.81249 5.69374V6.40625ZM13.325 8.66253C13.0902 8.66253 12.8606 8.59288 12.6653 8.4624C12.47 8.33191 12.3178 8.14645 12.2279 7.92946C12.138 7.71247 12.1145 7.4737 12.1603 7.24334C12.2062 7.01299 12.3193 6.80139 12.4853 6.63532C12.6514 6.46924 12.863 6.35614 13.0934 6.31032C13.3237 6.2645 13.5625 6.28801 13.7795 6.37789C13.9965 6.46778 14.1819 6.61998 14.3124 6.81527C14.4429 7.01055 14.5126 7.24015 14.5126 7.47502C14.5126 7.78996 14.3874 8.09201 14.1647 8.31471C13.942 8.53742 13.64 8.66253 13.325 8.66253ZM15.2251 5.8125C14.9902 5.8125 14.7606 5.74285 14.5653 5.61236C14.37 5.48188 14.2178 5.29641 14.1279 5.07942C14.0381 4.86243 14.0145 4.62366 14.0604 4.39331C14.1062 4.16295 14.2193 3.95136 14.3854 3.78528C14.5514 3.6192 14.763 3.5061 14.9934 3.46028C15.2237 3.41446 15.4625 3.43798 15.6795 3.52786C15.8965 3.61774 16.082 3.76995 16.2124 3.96523C16.3429 4.16052 16.4126 4.39011 16.4126 4.62498C16.4126 4.93993 16.2875 5.24198 16.0648 5.46468C15.8421 5.68738 15.54 5.8125 15.2251 5.8125Z"
                    fill="currentColor"
                  />
                </svg>
                {collection.games}
                <CollectionGamesText>{`${
                  collection.games === "1" ? " Game" : " Games"
                }`}</CollectionGamesText>
              </CollectionGames>
              <CollectionComments isMain={collection.isMain}>
                <svg
                  width="17"
                  height="15"
                  viewBox="0 0 17 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.5 0.154297C4.08125 0.154297 0.5 3.06367 0.5 6.6543C0.5 8.2043 1.16875 9.62305 2.28125 10.7387C1.89062 12.3137 0.584375 13.7168 0.56875 13.7324C0.5 13.8043 0.48125 13.9105 0.521875 14.0043C0.5625 14.098 0.65 14.1543 0.75 14.1543C2.82188 14.1543 4.375 13.1605 5.14375 12.548C6.16563 12.9324 7.3 13.1543 8.5 13.1543C12.9187 13.1543 16.5 10.2449 16.5 6.6543C16.5 3.06367 12.9187 0.154297 8.5 0.154297Z"
                    fill="currentColor"
                  />
                </svg>
                {collection.comments}
                <CollectionCommentsText>{`${
                  collection.comments === "1" ? " Comment" : " Comments"
                }`}</CollectionCommentsText>
              </CollectionComments>
            </CollectionMetaInfo>
          </CollectionMetaAndTitle>
          <CollectionControlsContainer className="collection-controls-container">
            <CollectionControlContainer
              className="button__collection-control"
              disabled={collection.isMain}
              onClick={(e) => populateModalData(collection.title, "edit")}
              title={collection.isMain ? "This is a default list" : "Edit Collection"}
            >
              <CollectionControlIcon
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.410156 15.52V19.5H4.38288L16.0592 7.80237L12.0865 3.8224L0.410156 15.52ZM19.0992 4.75683C19.5138 4.34153 19.5138 3.68397 19.0992 3.26867L16.6465 0.811475C16.232 0.396175 15.5756 0.396175 15.1611 0.811475L13.2265 2.71494L17.1647 6.66029L19.0992 4.75683Z"
                  fill="currentColor"
                />
              </CollectionControlIcon>
              <CollectionControlText>Edit</CollectionControlText>
            </CollectionControlContainer>
            <CollectionControlContainer
              className="button__collection-control"
              disabled={collection.isMain}
              title={collection.isMain ? "This is a default list" : "Merge With Another Collection"}
            >
              <CollectionControlIcon
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.07682 0.5C1.43249 0.5 0.910156 1.02233 0.910156 1.66667V14.3333C0.910156 14.9777 1.43249 15.5 2.07682 15.5H5.91016V19.3333C5.91016 19.9777 6.43249 20.5 7.07682 20.5H19.7435C20.3878 20.5 20.9102 19.9777 20.9102 19.3333V6.66667C20.9102 6.02233 20.3878 5.5 19.7435 5.5H15.9102V1.66667C15.9102 1.02233 15.3878 0.5 14.7435 0.5H2.07682ZM15.9102 5.5H7.07682C6.43249 5.5 5.91016 6.02234 5.91016 6.66667V15.5H14.7435C15.3878 15.5 15.9102 14.9777 15.9102 14.3333V5.5Z"
                  fill="currentColor"
                />
                <path
                  d="M11.7435 7.41667C11.7435 7.2786 11.6316 7.16667 11.4935 7.16667H10.3268C10.1888 7.16667 10.0768 7.2786 10.0768 7.41667V9.66667H7.82682C7.68875 9.66667 7.57682 9.7786 7.57682 9.91667V11.0833C7.57682 11.2214 7.68875 11.3333 7.82682 11.3333H10.0768V13.5833C10.0768 13.7214 10.1888 13.8333 10.3268 13.8333H11.4935C11.6316 13.8333 11.7435 13.7214 11.7435 13.5833V11.3333H13.9935C14.1316 11.3333 14.2435 11.2214 14.2435 11.0833V9.91667C14.2435 9.7786 14.1316 9.66667 13.9935 9.66667H11.7435V7.41667Z"
                  fill="currentColor"
                />
              </CollectionControlIcon>
              <CollectionControlText>Merge</CollectionControlText>
            </CollectionControlContainer>
            <CollectionControlContainer
              className="button__collection-control button__delete"
              disabled={collection.isMain}
              onClick={(e) => populateModalData(collection.title, "delete")}
              title={collection.isMain ? "This is a default list" : "Delete Collection"}
            >
              <CollectionControlIcon
                width="18"
                height="21"
                viewBox="0 0 18 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.0352 1.75001H12.3477L11.9805 1.01954C11.9027 0.863372 11.7829 0.732008 11.6345 0.640225C11.4861 0.548442 11.3151 0.499882 11.1406 0.500007H6.67578C6.50171 0.499338 6.33097 0.547717 6.18313 0.639602C6.03528 0.731487 5.91631 0.863161 5.83984 1.01954L5.47265 1.75001H0.785156C0.619396 1.75001 0.460425 1.81585 0.343214 1.93306C0.226004 2.05027 0.160156 2.20925 0.160156 2.37501L0.160156 3.62501C0.160156 3.79077 0.226004 3.94974 0.343214 4.06695C0.460425 4.18416 0.619396 4.25001 0.785156 4.25001H17.0352C17.2009 4.25001 17.3599 4.18416 17.4771 4.06695C17.5943 3.94974 17.6602 3.79077 17.6602 3.62501V2.37501C17.6602 2.20925 17.5943 2.05027 17.4771 1.93306C17.3599 1.81585 17.2009 1.75001 17.0352 1.75001ZM2.23828 18.7422C2.26809 19.2182 2.47819 19.665 2.8258 19.9915C3.17342 20.3181 3.63242 20.4999 4.10937 20.5H13.7109C14.1879 20.4999 14.6469 20.3181 14.9945 19.9915C15.3421 19.665 15.5522 19.2182 15.582 18.7422L16.4102 5.5H1.41016L2.23828 18.7422Z"
                  fill="currentColor"
                />
              </CollectionControlIcon>
              <CollectionControlText className="delete">
                Delete
              </CollectionControlText>
            </CollectionControlContainer>
          </CollectionControlsContainer>
        </CollectionInfoContainer>
        <CollectionControlsDropdownArrowContainer
          className="collection-list__dropdown-arrow"
          onClick={(e) => handleControlsDrawerToggle(e, collection.isMain)}
          disabled={collection.isMain}
        >
          <CollectionControlsDropdownArrow
            className="dropdown-arrow"
            width="19"
            height="12"
            viewBox="0 0 19 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.385 0L9.5 6.87L2.615 0L0.5 2.115L9.5 11.115L18.5 2.115L16.385 0Z"
              fill="currentColor"
            />
          </CollectionControlsDropdownArrow>
        </CollectionControlsDropdownArrowContainer>
      </CollectionContainer>
      
      {collection.isMain !== true && 
        (transitions.map(({ item, key, props }) => (
          item && (
          <CollectionControlsDropdownList
            key={key}
            style={props}
          >
            <CollectionControlsDropdownListItem
              onClick={(e) => populateModalData(collection.title, "edit")}
            >
              Edit collection
            </CollectionControlsDropdownListItem>
            <CollectionControlsDropdownListItem>
              Combine with another collection
            </CollectionControlsDropdownListItem>
            <CollectionControlsDropdownListItem
              className="delete"
              onClick={(e) => populateModalData(collection.title, "delete")}
            >
              Delete collection
            </CollectionControlsDropdownListItem>
          </CollectionControlsDropdownList>
          ))
        ))}
    </CollectionItem>
  );
}

export default CollectionListItem;