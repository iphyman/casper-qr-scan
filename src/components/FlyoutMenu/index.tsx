import { useRef, useState, ReactNode, Fragment } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import { Trans } from "@lingui/macro";
import { CgMenuGridR } from "react-icons/cg";
import { FaGithub, FaCheckCircle } from "react-icons/fa";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { CSSTransition } from "react-transition-group";
import ReactCountryFlag from "react-country-flag";
import {
  IoGlobeOutline,
  IoChevronForwardSharp,
  IoChevronBackSharp,
} from "react-icons/io5";
import { MenuButton, BaseButton } from "components/Button";
import { useOnClickOutside } from "hooks/events";
import { useRouteProps, useActiveLocale } from "hooks/application";
import { useDarkModeToggle } from "data/user/hooks";
import {
  SUPPORTED_LOCALES,
  LOCALE_LABEL,
  SupportedLocale,
} from "data/constants";

const FlyoutMenuWrap = styled.div`
  position: relative;
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const LeftIcon = styled(FlexRow)`
  margin-right: 10px;
  & > svg {
    path {
      stroke: inherit;
    }
  }
`;

const RightIcon = styled(LeftIcon)`
  margin: 0px 0px 0px auto;
`;

const Menu = styled.div`
  min-width: 200px;
  min-height: 110px;
  max-height: 400px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 55px;
  right: 0px;
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.bg300};
  background-color: ${({ theme }) => theme.bg200};
  border-radius: 8px;
  overflow: hidden;
  overflow-y: auto;
  z-index: 600;

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #f5f5f5;
  }
  ::-webkit-scrollbar {
    width: 4px;
    background-color: #f5f5f5;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #555;
  }
`;

const MenuContainer = styled.div`
  width: 100%;
  &.main-enter {
    position: absolute;
    transform: translateX(-110%);
  }

  &.main-enter-active {
    transform: translateX(0%);
    transition: all 400ms ease;
  }

  &.main-exit {
    position: absolute;
  }
  &.main-exit-active {
    transform: translateX(-110%);
  }

  &.secondary-enter {
    position: absolute;
    transform: translateX(110%);
  }
  &.secondary-enter-active {
    transform: translateX(0%);
    transition: all 400ms ease;
  }

  &.secondary-exit {
    position: absolute;
  }
  &.secondary-exit-active {
    transform: translateX(110%);
  }
`;

const ToggleSubMenuWrap = styled(BaseButton)`
  width: 100%;
  height: 38px;
  line-height: 1;
  padding: 8px;
  flex: 1;
  justify-content: space-between;
  font-weight: 500;
  color: ${({ theme }) => theme.text200};
  &:hover {
    color: ${({ theme }) => theme.text300};
    background-color: ${({ theme }) => theme.bg100};
  }
`;

interface ToggleSubMenuProps {
  title: ReactNode;
  rightIcon?: ReactNode;
  leftIcon?: ReactNode;
  onClick?: () => void;
}

function ToggleSubMenu(props: ToggleSubMenuProps) {
  const { rightIcon, leftIcon, title, onClick } = props;

  return (
    <ToggleSubMenuWrap onClick={onClick}>
      <FlexRow>
        <LeftIcon>{leftIcon}</LeftIcon>
        <FlexRow>{title}</FlexRow>
      </FlexRow>
      {rightIcon}
    </ToggleSubMenuWrap>
  );
}

const InternalLink = styled(Link)`
  display: flex;
  height: 38px;
  line-height: 1;
  padding: 8px;
  flex: 1;
  justify-content: flex-start;
  font-weight: 400;
  color: ${({ theme }) => theme.text200};
  text-decoration: none;
  border: 1px solid transparent;
  transition: all 0.25s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.text300};
    background-color: ${({ theme }) => theme.bg100};
    text-decoration: none;
  }
`;

const ExternalLink = styled.a.attrs({
  target: "_blank",
})`
  display: flex;
  height: 38px;
  line-height: 1;
  padding: 8px;
  flex: 1;
  justify-content: flex-start;
  font-weight: 400;
  color: ${({ theme }) => theme.text200};
  text-decoration: none;
  border: 1px solid transparent;
  transition: all 0.25s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.text300};
    background-color: ${({ theme }) => theme.bg100};
    text-decoration: none;
  }
`;

const ClickElement = styled.div`
  display: flex;
  height: 38px;
  line-height: 1;
  padding: 8px;
  flex: 1;
  justify-content: flex-start;
  font-weight: 400;
  color: ${({ theme }) => theme.text200};
  text-decoration: none;
  border: 1px solid transparent;
  transition: all 0.25s ease-in-out;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.text300};
    background-color: ${({ theme }) => theme.bg100};
    text-decoration: none;
  }
`;

// interface MenuItemProps extends LinkProps {
//   icon: ReactNode;
//   title: string;
//   onClick?: () => void;
// }

// function MenuItem(props: MenuItemProps) {
//   const { to, icon, title, onClick } = props;

//   return (
//     <InternalLink to={to} onClick={onClick}>
//       <LeftIcon>{icon}</LeftIcon>
//       <Trans>{title}</Trans>
//     </InternalLink>
//   );
// }

function GoBack({ onClick }: { onClick: () => void }) {
  return (
    <ToggleSubMenuWrap onClick={onClick}>
      <FlexRow>
        <LeftIcon>
          <IoChevronBackSharp />
        </LeftIcon>
      </FlexRow>
    </ToggleSubMenuWrap>
  );
}

interface LanguageMenuItemProps {
  locale: SupportedLocale;
}

function LanguageMenuItem(props: LanguageMenuItemProps) {
  const { locale } = props;
  const activeLocale = useActiveLocale();
  const { to, onClick } = useRouteProps(locale);

  if (!to) return null;

  const getCountry = (locale: SupportedLocale) => locale.split("-")[1];

  return (
    <Fragment>
      <InternalLink to={to} onClick={onClick}>
        <LeftIcon>
          <ReactCountryFlag countryCode={getCountry(locale)} svg />
        </LeftIcon>
        {LOCALE_LABEL[locale]}
        {activeLocale === locale && (
          <RightIcon>
            <FaCheckCircle color="#00897B" />
          </RightIcon>
        )}
      </InternalLink>
    </Fragment>
  );
}

function LanguageMenu() {
  return (
    <Fragment>
      {SUPPORTED_LOCALES.map((locale) => (
        <LanguageMenuItem key={locale} locale={locale} />
      ))}
    </Fragment>
  );
}

export default function FlyoutMenu() {
  const node = useRef<HTMLDivElement>();
  const mainMenuRef = useRef<HTMLDivElement>(null);
  const langMenuRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [menu, setMenu] = useState<"main" | "themes" | "lang">("main");
  useOnClickOutside(node, open ? () => setOpen(false) : undefined);

  const [darkMode, toggleDarkMode] = useDarkModeToggle();

  return (
    <FlyoutMenuWrap ref={node as any}>
      <MenuButton onClick={() => setOpen(!open)}>
        <CgMenuGridR size={24} />
      </MenuButton>
      {open && (
        <Menu>
          <CSSTransition
            in={menu === "main"}
            unmountOnExit
            timeout={500}
            classNames="main"
            nodeRef={mainMenuRef}
          >
            <MenuContainer ref={mainMenuRef}>
              <ClickElement onClick={() => toggleDarkMode()}>
                <LeftIcon>
                  {darkMode ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
                </LeftIcon>
                {darkMode ? <Trans>Lite Mode</Trans> : <Trans>Dark Mode</Trans>}
              </ClickElement>
              <ExternalLink
                href="https://github.com/iphyman/casper-qr-scan"
                onClick={() => setOpen(false)}
              >
                <LeftIcon>
                  <FaGithub />
                </LeftIcon>
                <Trans>Github</Trans>
              </ExternalLink>
              <ToggleSubMenu
                leftIcon={<IoGlobeOutline />}
                rightIcon={<IoChevronForwardSharp />}
                title={<Trans>Language</Trans>}
                onClick={() => setMenu("lang")}
              />
            </MenuContainer>
          </CSSTransition>
          <CSSTransition
            in={menu === "lang"}
            unmountOnExit
            timeout={500}
            classNames="secondary"
            nodeRef={langMenuRef}
          >
            <MenuContainer ref={langMenuRef}>
              <GoBack onClick={() => setMenu("main")} />
              <LanguageMenu />
            </MenuContainer>
          </CSSTransition>
        </Menu>
      )}
    </FlyoutMenuWrap>
  );
}
