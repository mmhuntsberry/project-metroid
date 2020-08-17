import styled from "@emotion/styled";
import "../../styles/base/variables.css";
import { mq } from "../../styles/utilities/breakpoints.js";


const ModalOverlay = styled.div`
  display: grid;
  position: fixed;
  z-index: 1000;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  transition: opacity 150ms;

  background-color: var(--black);
  background-color: #0007;

  &.modal--open {
    display: grid;
    overflow-x: hidden;
    overflow-y: auto;
  }
`

const ModalContainer = styled.div`
  display: flex;
  z-index: 1100;
  margin: auto;
  transform: ${props => props.show ? "translateY(0)" : "translateY(-100vh)"};
  transition: all 250ms;
  border: 0;
  border-radius: var(--spacing-01);
  opacity: ${props => props.show ? 1 : 0};
`

const ModalGraphicContainer = styled.div`
  display: none;

  ${mq[2]} {
    display: flex;
    padding: var(--spacing-07);
    border-radius: var(--spacing-01) 0 0 var(--spacing-01);
    background-color: var(--foreground-lighter-dark-blue);
  }
`

const ModalGraphic = styled.img`
max-width: 250px;

${mq[2]} {
  width: 25vw;
}

`

const ModalContentContainer = styled.div`
  display: flex;
  position: relative;
  padding: var(--spacing-04) var(--spacing-06);
  border-radius: var(--spacing-01);
  background-color: var(--foreground-dark-blue);

  ${mq[1]} {
    padding: var(--spacing-07) var(--spacing-08);
  }

  ${mq[2]} {
    border-radius: 0 var(--spacing-01) var(--spacing-01) 0;
  }
`

const CloseButtonContainer = styled.button`
  position: absolute;
  top: var(--spacing-02);
  right: var(--spacing-02);
  padding: var(--spacing-03) var(--layout-01);
  border: 0;
  background-color: transparent;
  color: var(--grey-01);
  cursor: pointer;
  appearance: none;

  &:hover {
    color: var(--white);
  }
`

const CloseButton = styled.span`
  font-size: var(--title-font-size-06);
  font-weight: var(--font-weight-bold);
  line-height: 1;
  text-shadow: 0 1px 0 #000;
  pointer-events: none;
`

const ModalContent = styled.div`
  display: flex;
  grid-gap: var(--spacing-04);
  flex-direction: column;
  width: 70vw;
  padding: var(--spacing-06) 0;

  ${mq[1]} {
    grid-gap: var(--spacing-06);
  }

  ${mq[2]} {
    width: 40vw;
    padding: var(--spacing-08) 0;
  }

  ${mq[3]} {
    width: 400px;
  }
`

const ModalTitle = styled.h2`
  margin: 0;
  padding: 0;
  color: var(--green);
  font-size: var(--title-font-size-06);
  font-weight: var(--font-weight-normal);

  ${mq[1]} {
    font-size: var(--title-font-size-07);
  }
`

const ModalBody = styled.div`
`

const ActionButtons = styled.div`
  display: flex;
  grid-gap: var(--spacing-06);
  justify-content: flex-end;
`;

const CancelButton = styled.button`
  width: var(--layout-07);
  height: var(--layout-03);
  padding: var(--spacing-02);
  transition: background-color 200ms;
  border: 0;
  border-radius: var(--spacing-01);
  background-color: var(--grey-05);
  color: var(--white);
  font-size: var(--body-font-size-03);
  white-space: nowrap;

  ${mq[1]} {
    height: var(--toolbar-height);
  }
`

const ConfirmButton = styled.button`
  width: var(--layout-07);
  height: var(--layout-03);
  padding: 7px var(--spacing-02);
  transition: background-color 200ms;
  border: 0;
  border-radius: var(--spacing-01);
  background-color: ${props => props.confirmText === "Yes" ? "var(--red)" : "var(--dim-green)"};
  color: var(--white);
  font-size: var(--body-font-size-03);
  white-space: nowrap;

  ${mq[1]} {
    height: var(--toolbar-height);
  }
`

const DeleteTextContent = styled.p`
  color: var(--grey-01);
`

const DeleteCollectionTitle = styled.span`
  color: var(--green);
`

export { 
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
};