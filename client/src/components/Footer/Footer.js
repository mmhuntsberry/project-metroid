import React from "react";
import twitter from "../../assets/social-icon-twitter.svg";
import facebook from "../../assets/social-icon-facebook.svg";
import github from "../../assets/social-icon-github.svg";
import {
  FooterContainer,
  FooterLinksContainer,
  FooterLink,
  SocialLinkContainer,
  SocialLink,
  SocialLinkIcon,
  Copyright,
} from "./Footer.styles";



const Footer = () => {

  return <FooterContainer>
    <FooterLinksContainer>
      <FooterLink href="#">About</FooterLink>
      <FooterLink href="#">News</FooterLink>
      <FooterLink href="#">Contact</FooterLink>
      <Copyright>&copy; 2020 Project Metroid</Copyright>
      <SocialLinkContainer>
        <SocialLink href="#" twitter><SocialLinkIcon src={twitter} alt="Twitter" /></SocialLink>
        <SocialLink href="#" facebook><SocialLinkIcon src={facebook} alt="Facebook" /></SocialLink>
        <SocialLink href="#" github><SocialLinkIcon src={github} alt="Github" /></SocialLink>
      </SocialLinkContainer>
    </FooterLinksContainer>
    
  </FooterContainer>;
};

export default Footer;
