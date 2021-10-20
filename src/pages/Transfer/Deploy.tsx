import { useState, forwardRef } from "react";
import { Trans } from "@lingui/macro";
import { ContainerFluid } from "components/Container";
import { Row } from "components/Row";
import { Column } from "components/Column";
import { Textbox, ReadOnlyTextbox } from "components/Textbox";
import { PrimaryButton } from "components/Button";

const Deploy = forwardRef<HTMLDivElement, any>((props, ref) => {
  const [receiver, setReceiver] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [transferId, setTransferId] = useState<string | number>(
    new Date().getTime()
  );

  return (
    <ContainerFluid ref={ref} p="1rem" bg>
      <Row>
        <Column column={6}>
          <ReadOnlyTextbox
            label={<Trans>Balance (CSPR)</Trans>}
            value="0.00000"
          />
        </Column>
        <Column column={6}>
          <ReadOnlyTextbox
            label={<Trans>Balance (USD)</Trans>}
            value="0.00000"
          />
        </Column>
      </Row>
      <Row>
        <Column>
          <ReadOnlyTextbox label={<Trans>Sender</Trans>} value="" />
        </Column>
        <Column>
          <Textbox
            type="text"
            value={receiver}
            label={<Trans>Recipient</Trans>}
            disabled
            placeholder="Enter receiver address"
            onChange={(e) => setReceiver(e.target.value)}
          />
        </Column>
        <Column>
          <Textbox
            inputMode="decimal"
            pattern="^[0-9]*[.,]?[0-9]*$"
            type="number"
            value={amount}
            label={<Trans>Amount</Trans>}
            disabled
            placeholder="0.00"
            rightAddon="CSPR"
            onChange={(e) => setAmount(e.target.value)}
          />
        </Column>
        <Column>
          <Textbox
            type="text"
            value={transferId}
            placeholder="134578653443"
            disabled
            label={<Trans>Transfer ID (Memo)</Trans>}
            onChange={(e) => setTransferId(e.target.value)}
          />
        </Column>
        <Column>
          <PrimaryButton disabled>
            <Trans>Transfer Fund</Trans>
          </PrimaryButton>
        </Column>
      </Row>
    </ContainerFluid>
  );
});

export default Deploy;
