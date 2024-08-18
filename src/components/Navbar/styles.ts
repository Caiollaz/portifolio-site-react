import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

export const NavBarCustom = styled(Navbar)`
  width: 60%;
  background: transparent;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  .nav-link:focus,
  .nav-link:hover {
    background: ${(props) => props.theme.colors.textGradient};
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const Link = styled(Nav.Link)`
  background: transparent;
  color: ${(props) => props.theme.colors.lightGray};
  font-size: 1.2rem;
  line-height: 3rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
