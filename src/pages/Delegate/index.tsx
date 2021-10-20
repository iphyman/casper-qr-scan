import { useRef } from "react";
import { Trans } from "@lingui/macro";
import { useParams } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import Layouts from "layouts";
import { Title } from "components/Text";
import { ContainerFluid } from "components/Container";
import { DelegateNavbar } from "components/Navbar";
import Scan from "components/QrScanner";
import Create from "./Create";
import Deploy from "./Deploy";

export default function Delegate() {
  const createRef = useRef<HTMLDivElement>(null);
  const scanRef = useRef<HTMLDivElement>(null);
  const deployRef = useRef<HTMLDivElement>(null);
  const { operation } = useParams<{ operation?: string }>();
  operation?.toLowerCase();

  return (
    <Layouts>
      <ContainerFluid p="1rem">
        <Title>
          <Trans>Delegate Stake</Trans>
        </Title>
        <DelegateNavbar />
      </ContainerFluid>
      <CSSTransition
        in={operation === undefined}
        unmountOnExit
        timeout={500}
        classNames="main"
        nodeRef={createRef}
      >
        <Create ref={createRef} />
      </CSSTransition>
      <CSSTransition
        in={operation === "scan"}
        unmountOnExit
        timeout={500}
        classNames="secondary"
        nodeRef={scanRef}
      >
        <Scan ref={scanRef} />
      </CSSTransition>
      <CSSTransition
        in={operation === "deploy"}
        unmountOnExit
        timeout={500}
        classNames="secondary"
        nodeRef={deployRef}
      >
        <Deploy ref={deployRef} />
      </CSSTransition>
    </Layouts>
  );
}
