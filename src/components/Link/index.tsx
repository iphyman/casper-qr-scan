import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
import { darken } from "polished";
import media from "theme/media";

const activeClassName = "ACTIVE";

export const NavbarNavLink = styled(NavLink).attrs({
  activeClassName,
})`
  display: flex;
  flex-wrap: nowrap;
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text200};
  white-space: nowrap;
  cursor: pointer;
  text-decoration: none;
  outline: none;
  border-radius: 50px;
  overflow: hidden;
  padding: 8px 12px;
  &.${activeClassName} {
    font-weight: 600;
    color: ${({ theme }) => theme.text100};
    background-color: ${({ theme }) => theme.bg200};
    justify-content: center;
    border-radius: 12px;
  }
  :hover,
  :focus {
    color: ${({ theme }) => darken(0.1, theme.text100)};
  }
`;

export const NavbarHomeLink = styled.a`
  display: flex;
  align-items: center;
  justify-self: flex-start;
  margin-right: 1rem;
  & > img {
    width: 24px;
    height: 100%;
  }
  :hover {
    cursor: pointer;
  }
`;

export const NavbarGroupNavLinks = styled.div`
  width: fit-content;
  display: grid;
  align-items: center;
  grid-auto-flow: column;
  grid-gap: 10px;
  overflow: auto;
  padding: 6px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.bg100};

  ${media.atLeastLaptopL`
    justify-self: start;
`};

  ${media.tabletL`
    flex-direction: row;
    justify-content: space-between;
    justify-self: center;
    z-index: 99;
    position: fixed;
    bottom: 0; right: 50%;
    transform: translate(50%, -50%);
    margin: 0 auto;
    background-color: ${(props: any) => props.theme.bg100};
    border: 1px solid ${(props: any) => props.theme.bg200};
    box-shadow: 0px 6px 10px rgb(0 0 0 / 2%);
  `}
`;

export const SubNavLink = styled(NavbarNavLink)`
  border-radius: 4px;
  &.${activeClassName} {
    border-radius: 4px;
  }
`;

export const SubNavLinkGroup = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  justify-self: center;
  margin: 20px 0px 30px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.bg100};
  border: 1px solid ${({ theme }) => theme.bg200};
  box-shadow: 0px 6px 10px rgb(0 0 0 / 2%);
`;
