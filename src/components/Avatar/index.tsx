import { useRef, useEffect } from "react";
import styled from "styled-components/macro";
import Jazzicon from "@metamask/jazzicon";

const Container = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 1.125rem;
  margin-left: 5px;
`;

const address =
  "841d5e731def2c5e634e1ce005dafc4b36d0db25fbecc5f7d15983325eab0b90";

export default function Avatar() {
  const ref = useRef<HTMLDivElement>();

  const account = address;

  useEffect(() => {
    if (account && ref.current) {
      ref.current.innerHTML = "";
      ref.current.appendChild(Jazzicon(16, parseInt(account.slice(2, 10), 16)));
    }
  }, [account]);

  return <Container ref={ref as any}></Container>;
}
