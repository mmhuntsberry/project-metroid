import React from "react";
import { 
    ModalOverlay,
    ModalContainer,
    ModalGraphicContainer,
    ModalGraphic,
    ModalContentContainer,
    CloseButtonContainer,
    CloseButton,
    ModalContent,
    ModalTitle,
    ModalBody,
    ActionButtons,
    CancelButton,
    ConfirmButton,
    DeleteTextContent,
    DeleteCollectionTitle
} from "./Modal.styles";
import TextInput from "../TextInput"

const DeleteText = (props) => <DeleteTextContent>Delete collection <DeleteCollectionTitle>{props.text}</DeleteCollectionTitle>? This action cannot be undone.</DeleteTextContent>;

// const Modal = ({ modalContent, collectionNameToEdit }) => {
const Modal = (props) => {
  

  if (!props.show) {
    return null;
  }
  const onClose = e => {
    if (e.target.classList.contains("modal__overlay") || e.target.classList.contains("modal__cancel-button") || e.target.classList.contains("modal__close-button")) {
      props.onClose && props.onClose(e)
      document.body.style.paddingRight = "0";
      document.body.style.overflowY = "auto";
    } else {
      return false;
    }
    
  }

    return (
        <ModalOverlay className={`modal__overlay ${props.modalContent.className}`} onClick={(e) => onClose(e)}>
            <ModalContainer show={props.show}>
                <ModalGraphicContainer>
                    <ModalGraphic src={props.modalContent.graphic} />
                </ModalGraphicContainer>
                <ModalContentContainer>
                    <CloseButtonContainer className="modal__close-button" onClick={(e) => onClose(e)}>
                        <CloseButton>×</CloseButton>
                    </CloseButtonContainer>
                    <ModalContent>
                        <ModalTitle>{props.modalContent.title}</ModalTitle>
                        <ModalBody>
                            {props.modalContent.bodyType === "input" 
                            ? <TextInput dark={true} placeholder={props.modalContent.bodyText} />
                            : <DeleteText text={props.modalContent.bodyText}/>}
                            
                        </ModalBody>
                        <ActionButtons>
                            <CancelButton className="modal__cancel-button" onClick={(e) => onClose(e)}>{props.modalContent.cancelText}</CancelButton>
                            <ConfirmButton  className="modal__confirm-button" confirmText={props.modalContent.confirmText}>{props.modalContent.confirmText}</ConfirmButton>
                        </ActionButtons>
                    </ModalContent>
                </ModalContentContainer>
            </ModalContainer>
        </ModalOverlay>
    )
}

export default Modal;