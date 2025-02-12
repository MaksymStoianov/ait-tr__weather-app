import { useNavigate } from "react-router-dom";
import { footerLinks, headerLinks } from "./data";
import {
  Footer,
  Header,
  LayoutWrapper,
  Main,
  NavContainer,
  StyledNavLink,
} from "./styles";
import type { LayoutProps } from "./types";

function Layout({ children }: LayoutProps) {
  const navigate = useNavigate();
  const goToHomePage = () => navigate("/");

  const elHeaderLinks = headerLinks.map(({ text, path }) => (
    <StyledNavLink
      key={path}
      to={path}
      style={({ isActive }) => ({
        textDecoration: isActive ? "underline" : "none",
      })}
    >
      {text}
    </StyledNavLink>
  ));

  const elFooterLinks = footerLinks.map(({ text, path }) => (
    <StyledNavLink
      key={path}
      to={path}
      style={({ isActive }) => ({
        textDecoration: isActive ? "underline" : "none",
      })}
    >
      {text}
    </StyledNavLink>
  ));

  return (
    <LayoutWrapper>
      <Header>
        <NavContainer>{elHeaderLinks}</NavContainer>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <NavContainer>{elFooterLinks}</NavContainer>
      </Footer>
    </LayoutWrapper>
  );
}

export default Layout;
