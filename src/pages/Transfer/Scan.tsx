import { Fragment } from "react";
import { Trans } from "@lingui/macro";
import { Title } from "components/Text";
import { ContainerFluid } from "components/Container";

export function Scan() {
  return (
    <Fragment>
      <ContainerFluid p="1rem">
        <Title>
          <Trans>Transfer</Trans>
        </Title>
        Comming soon...
      </ContainerFluid>
    </Fragment>
  );
}
