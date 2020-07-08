import React from "react";
import styled from "@emotion/styled";
import {
  mq
} from "../../styles/utilities/breakpoints.js";

export const BrowseContainer = styled.div `



${mq[6]} {
  

}
`;

export const BackgroundImage = styled.div `
  width: 100%;
  height: 540px;
  object-fit: cover;
  background: linear-gradient(to bottom,
    rgba(0, 0, 0, 0.5) 0%,
    rgb(23, 24, 36, .5) 50%,
    rgb(23, 24, 36, 1) 100%),
    url("https://staticdelivery.nexusmods.com/images/3024/18420914-1576469743.jpg")
    no-repeat;
  background-size: cover;
  background-position: center;
  box-shadow: inset 0 7px 9px -7px #000;

`;