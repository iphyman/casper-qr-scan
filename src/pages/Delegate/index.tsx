import { Trans } from "@lingui/macro";
import { Title } from "components/Text";
import { ContainerFluid } from "components/Container";
import Layouts from "layouts";

export default function Delegate() {
  return (
    <Layouts>
      <ContainerFluid p="1rem">
        <Title>
          <Trans>Delegate</Trans>
        </Title>
      </ContainerFluid>
    </Layouts>
  );
}
