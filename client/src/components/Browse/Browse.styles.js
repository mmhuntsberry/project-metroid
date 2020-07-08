import React from "react";
import styled from "@emotion/styled";
import { mq } from "../../styles/utilities/breakpoints.js";

export const BrowseContainer = styled.div`
height: 100vh;
  ${mq[6]} {
  }
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 540px;
  object-fit: cover;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.5) 0%,
      rgb(23, 24, 36, 0.5) 50%,
      rgb(23, 24, 36, 1) 100%
    ),
    url("https://staticdelivery.nexusmods.com/images/3024/18420914-1576469743.jpg")
      no-repeat;
  background-size: cover;
  background-position: center;
  box-shadow: inset 0 7px 9px -7px #000;
`;

export const TitleDiv = styled.div`
position: absolute;
left: 3.14%;
font-family: Open Sans;
font-style: normal;
font-size: 32px;
color: #28c7b7;

  ${mq[2]} {
  position: absolute;  
  left: 8.7%;
  font-family: Open Sans;
  font-style: normal;
  font-size: 32px;
  color: #28c7b7;
`;

export const CustomTitle = styled.h3`
  display: none;

${mq[2]} {
  display: initial;
  margin-left: 10px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 100%;
  text-decoration-line: underline;
  text-transform: uppercase;
  color: #999999;
}
`;

export const CustomTitleWithCarrot = styled.h3`
  display: initial;
  margin-left: 7px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 100%;
  color: #999999;
${mq[2]} {
  display: none;
}
`;
