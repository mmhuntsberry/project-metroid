import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import "../../styles/base/variables.css"

const BottomNavContainer = styled.nav`
display: flex;
align-items: center;
justify-content: space-evenly;
width: 100%;
height: 3.5em;
background-color: #212433;

@media screen and (min-width: 768px) {
  display: none;
}
`

const BottomNavLink = styled(Link)`
width: 72px;
height: 34px;
background: url(${props => props.icon}) center center no-repeat;

&:hover {
  background: url(${props => props.hover}) center center no-repeat;
}
`

export { BottomNavContainer, BottomNavLink };