import { Trans } from "@lingui/macro";
import { Title } from "components/Text";
import { ContainerFluid } from "components/Container";
import Layouts from "layouts";

export default function Undelegate() {
  return (
    <Layouts>
      <ContainerFluid p="1rem">
        <Title>
          <Trans>Undelegate</Trans>
        </Title>
      </ContainerFluid>
    </Layouts>
  );
}
