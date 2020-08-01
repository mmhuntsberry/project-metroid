import React from "react";
import { 
  PageWrapper,
  ContentWrapper,
  CollectionListContainer,
} from "./CollectionsList.styles"
import CollectionListItem from "../CollectionListItem"

const CollectionsList = (props) => {
  const populateModalData = (title, modalType) => {
    let getModalData = {}
    if (modalType === "delete") {
      getModalData = props.modalData.deleteCollection;
    } else if (modalType ==="edit") {
      getModalData = props.modalData.editCollection;
    }
    // pass the clicked title to the modalData
    getModalData.bodyText = title;
    // set the updated modal content ot state
    props.setModalContent(getModalData);
    props.showModal()
  }

  return <PageWrapper className="collections-wrapper">
    <ContentWrapper currentlyPlaying={true}>
      <CollectionListContainer className="collection-list__container">
        {props.collectionListData.map(collection => {
          return (
            <CollectionListItem
              key={collection.title} 
              collection={collection}
              populateModalData={populateModalData}
            />
          );
        })}
      </CollectionListContainer>
    </ContentWrapper>
    </PageWrapper>;
};

export default CollectionsList;