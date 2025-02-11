import { useNavigate } from "react-router-dom";
import { footerLinks, headerLinks } from "./data";
import {
  Footer,
  Header,
  HeaderLogo,
  HeaderLogoContainer,
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

  // TODO: Add HeaderLogo src

  return (
    <LayoutWrapper>
      <Header>
        <HeaderLogoContainer onClick={goToHomePage}>
          <HeaderLogo src="" />
        </HeaderLogoContainer>
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
