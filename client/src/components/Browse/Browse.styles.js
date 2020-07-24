import styled from "@emotion/styled";
import { mq } from "../../styles/utilities/breakpoints.js";

export const BrowseContainer = styled.div`
height: fit-content;
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
font-family: Open Sans;
font-style: normal;
font-size: 32px;
color: #28c7b7;
margin-left: 35px;

  ${mq[2]} {
  position: absolute;  
  margin-left: 70px;
  font-family: Open Sans;
  font-style: normal;
  font-size: 32px;
  color: #28c7b7;
`;

export const ByTitle = styled.div`
  margin-bottom: 20px;
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

export const BrowseBtn = styled.button`
  background-color: #171824;
  padding: 5px;
  margin-bottom: 5px;
  margin-right: 5px;
  border: 1px solid #8c8c8c;
  border-radius: 8px;
  color: #aaaaaa;

${mq[2]} {
  background-color: #171824;
  padding: 10px;
  margin-bottom: 10px;
  margin-right: 10px;
  margin-right: 10px
  border: 1px solid #8c8c8c;
  border-radius: 8px;
  color: #aaaaaa;
}  
`;

export const ButtonContainer = styled.div`
  margin-left: 35px;
  margin-top: 50px;

${mq[2]} {
  margin-left: 70px;
  margin-top: 80px;
}  
`;
