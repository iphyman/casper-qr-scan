import { Trans } from "@lingui/macro";
import { useParams } from "react-router-dom";
import Layouts from "layouts";
import { Title } from "components/Text";
import { ContainerFluid } from "components/Container";
import { TransferNavbar } from "components/Navbar";
import { Create } from "./Create";
import { Scan } from "./Scan";
import { Payment } from "./Payment";

export default function Transfer() {
  const { operation } = useParams<{ operation?: string }>();
  operation?.toLowerCase();

  function switchView(param?: string) {
    switch (param) {
      case "scan":
        return <Scan />;

      case "payment":
        return <Payment />;

      default:
        return <Create />;
    }
  }

  return (
    <Layouts>
      <ContainerFluid p="1rem">
        <Title>
          <Trans>Transfer</Trans>
        </Title>
        <TransferNavbar />
        {switchView(operation)}
      </ContainerFluid>
    </Layouts>
  );
}
