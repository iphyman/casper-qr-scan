import styled from "styled-components/macro";
import useScrollPosition from "@react-hook/window-scroll";
import { Trans } from "@lingui/macro";
import media from "theme/media";
import Logo from "assets/images/casper-logo.png";
import { FlexRow } from "components/Row";
import Avatar from "components/Avatar";
import { ConnectCasperBtn } from "components/Button";
import FlyoutMenu from "components/FlyoutMenu";
import {
  useIsSignerConnected,
  useConnectToSigner,
} from "data/application/hooks";
import { useUserPubKey } from "data/user/hooks";
import { shortenPubkey } from "utils";
import {
  NavbarGroupNavLinks,
  NavbarHomeLink,
  NavbarNavLink,
  SubNavLink,
  SubNavLinkGroup,
} from "components/Link";

const NavbarWrapper = styled.div<{ addBg: boolean }>`
  display: grid;
  grid-template-columns: 120px 1fr 120px;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
  top: 0;
  position: relative;
  padding: 1rem;
  z-index: 21;
  position: relative;
  background-image: ${({ theme }) =>
    `linear-gradient(to bottom, transparent 50%, ${theme.bg100} 50% )}}`};
  background-position: ${({ addBg }) => (addBg ? "0 -100%" : "0 0")};
  background-size: 100% 200%;
  box-shadow: 0px 0px 0px 1px
    ${({ theme, addBg }) => (addBg ? theme.bg200 : "transparent;")};
  transition: background-position 0.1s, box-shadow 0.1s;
  background-blend-mode: hard-light;

  ${media.atLeastTablet`
    grid-template-columns: 48px 1fr 1fr;
  `};

  ${media.tabletL`
    grid-template-columns: 1fr 1fr;
  `};

  ${media.mobile`
    grid-template-columns: 36px 1fr;
  `};
`;

const NavItem = styled(FlexRow)`
  width: 100%;
  align-items: center;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.bg100};
  padding: 14px 12px;
`;

const ActivePubKey = styled.span`
  white-space: nowrap;
  color: ${({ theme }) => theme.text300};
  font-size: 1rem;
  font-weight: 500;
  padding-right: 8px;
  text-transform: uppercase;
`;

export default function Navbar() {
  const scrollY = useScrollPosition();
  const isConnected = useIsSignerConnected();
  const userPubKey = shortenPubkey(useUserPubKey());
  const connect = useConnectToSigner();

  return (
    <NavbarWrapper addBg={scrollY > 40}>
      <NavbarHomeLink href="/">
        <img src={Logo} alt="logo" />
      </NavbarHomeLink>
      <NavbarGroupNavLinks>
        <NavbarNavLink to="/transfer">
          <Trans>Transfer</Trans>
        </NavbarNavLink>
        <NavbarNavLink to="/delegate">
          <Trans>Delegate</Trans>
        </NavbarNavLink>
        <NavbarNavLink to="/undelegate">
          <Trans>Undelegate</Trans>
        </NavbarNavLink>
      </NavbarGroupNavLinks>
      <FlexRow>
        {isConnected && userPubKey && (
          <NavItem>
            <ActivePubKey>{userPubKey}</ActivePubKey>
            <Avatar />
          </NavItem>
        )}
        {!isConnected && (
          <ConnectCasperBtn onClick={connect}>
            <Trans>Connect Signer</Trans>
          </ConnectCasperBtn>
        )}
        <FlyoutMenu />
      </FlexRow>
    </NavbarWrapper>
  );
}

export function TransferNavbar() {
  return (
    <SubNavLinkGroup>
      <SubNavLink exact to="/transfer">
        <Trans>Create</Trans>
      </SubNavLink>
      <SubNavLink exact to="/transfer/scan">
        <Trans>Scan</Trans>
      </SubNavLink>
      <SubNavLink exact to="/transfer/deploy">
        <Trans>Deploy</Trans>
      </SubNavLink>
    </SubNavLinkGroup>
  );
}

export function DelegateNavbar() {
  return (
    <SubNavLinkGroup>
      <SubNavLink exact to="/delegate">
        <Trans>Create</Trans>
      </SubNavLink>
      <SubNavLink exact to="/delegate/scan">
        <Trans>Scan</Trans>
      </SubNavLink>
      <SubNavLink exact to="/delegate/deploy">
        <Trans>Deploy</Trans>
      </SubNavLink>
    </SubNavLinkGroup>
  );
}

export function UndelegateNavbar() {
  return (
    <SubNavLinkGroup>
      <SubNavLink exact to="/undelegate">
        <Trans>Create</Trans>
      </SubNavLink>
      <SubNavLink exact to="/undelegate/scan">
        <Trans>Scan</Trans>
      </SubNavLink>
      <SubNavLink exact to="/undelegate/deploy">
        <Trans>Deploy</Trans>
      </SubNavLink>
    </SubNavLinkGroup>
  );
}
