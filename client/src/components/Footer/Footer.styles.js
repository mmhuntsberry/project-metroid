import styled from "@emotion/styled";
import "../../styles/base/variables.css";

const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: var(--spacing-08);

  @media screen and (min-width: 768px) {
    display: flex;
    height: var(--layout-08);
    background-color: var(--foreground-dark-blue);
  }
`;

const FooterLinksContainer = styled.nav`
  display: flex;
  position: relative;
  align-items: center;
  width: 100%;
  margin: var(--spacing-07);

  @media screen and (min-width: 768px) {
    margin-right: var(--spacing-09);
    margin-left: var(--spacing-09);
  }
`;

const FooterLink = styled.a`
  display: none;
  color: ${(props) => (props.social ? "var(--grey-02)" : "var(--green)")};
  font-family: var(--body-font-family-primary);
  text-decoration: none;

  &:not(:nth-of-type(1)) {
    margin-left: var(--spacing-07);
  }

  &:hover {
    color: var(--pink);
  }

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

const SocialLinkContainer = styled.div`
  display: flex;
  margin-left: auto;
`;

const SocialLink = styled.a`
  width: var(--body-font-size-05);
  height: var(--body-font-size-05);
  margin-left: var(--spacing-05);

  @media screen and (min-width: 768px) {
    width: var(--title-font-size-06);
    height: var(--title-font-size-06);
  }
`;

const SocialLinkIcon = styled.img`
  width: 100%;
  /* Using CSS filter to give us the same 
  value as --green while using an SVG */
  &:hover {
    filter: invert(56%) sepia(58%) saturate(479%) hue-rotate(125deg)
      brightness(101%) contrast(99%);
  }
`;

const Copyright = styled.span`
  position: inherit;
  color: var(--grey-02);
  font-family: var(--footer-links-family-primary);
  font-size: var(--body-font-size-01);
  font-style: var(--emphasized);

  @media screen and (min-width: 768px) {
    position: absolute;
    top: 100%;
    left: 0;
  }
`;

export {
  FooterContainer,
  FooterLinksContainer,
  FooterLink,
  SocialLinkContainer,
  SocialLink,
  SocialLinkIcon,
  Copyright,
};
