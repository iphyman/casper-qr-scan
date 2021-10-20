import { Fragment, ReactNode } from "react";
import styled from "styled-components/macro";
import Navbar from "../components/Navbar";
import { useIsDarkMode } from "data/user/hooks";
import { useSignerConnection } from "data/application/hooks";
import media from "theme/media";

const AppBackground = styled.div<{ darkMode: boolean }>`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background: ${({ darkMode }) =>
    darkMode
      ? "radial-gradient(150% 100% at 50% 0%, #0A294B 0%, #221E30 50%, #1F2128 100%)"
      : "radial-gradient(150% 100% at 50% 0%, #CDE8FB 0%, #FCF3F9 50%, #FFFFFF 100%)"};
  z-index: -1;
`;

const LayoutWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
`;

const PageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
`;

const PageHeader = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 3;
`;

const PageContainer = styled.main`
  width: 100%;
  padding: 7rem 0.8rem 0rem;
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  align-items: center;

  ${media.tabletL`
  padding: 7rem 0.8rem 6rem;
  `}
`;

const PageContent = styled.div<{ margin?: string; maxWidth?: string }>`
  width: 100%;
  position: relative;
  margin-top: ${({ margin }) => margin ?? "0px"};
  max-width: ${({ maxWidth }) => maxWidth ?? "580px"};
  border-radius: 8px;
  margin-top: 1rem;
  background: ${({ theme }) => theme.bg100};
  box-shadow: rgba(0, 0, 0, 0.04) -1px 1px 9px 0px,
    rgba(128, 163, 182, 0.2) 1px 1px 1px 0px;
  transition: background 0.25s ease-in-out, height 0.25s ease-in-out;
`;

interface LayoutsProps {
  children: ReactNode;
  margin?: string;
  maxWidth?: string;
}

export default function Layouts({ children, ...rest }: LayoutsProps) {
  const darkMode = useIsDarkMode();
  useSignerConnection();

  return (
    <Fragment>
      <AppBackground darkMode={darkMode} />
      <LayoutWrapper>
        <PageWrapper>
          <PageHeader>
            <Navbar />
          </PageHeader>
          <PageContainer>
            <PageContent {...rest}>{children}</PageContent>
          </PageContainer>
        </PageWrapper>
      </LayoutWrapper>
    </Fragment>
  );
}
