import { useState, forwardRef, ChangeEvent } from "react";
import { Trans } from "@lingui/macro";
import { ContainerFluid } from "components/Container";
import { Row } from "components/Row";
import { Column } from "components/Column";
import { Textbox, ReadOnlyTextbox } from "components/Textbox";
import { PrimaryButton } from "components/Button";
import { useUserPubKey } from "data/user/hooks";
import { isValidPubkey } from "utils";

const Deploy = forwardRef<HTMLDivElement, any>((_props, ref) => {
  const userActivePubKey = useUserPubKey();
  const [validatorPubkey, setValidatorPubkey] = useState<string>("");
  const [validatorPubkeyError, setValidatorPubkeyError] =
    useState<boolean>(false);
  const [amount, setAmount] = useState<string>("");

  const handleOnchangeValidator = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (isValidPubkey(value)) {
      setValidatorPubkeyError(false);
      setValidatorPubkey(value);
    } else {
      setValidatorPubkeyError(true);
      setValidatorPubkey(value);
    }
  };

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
          <ReadOnlyTextbox
            label={<Trans>Account</Trans>}
            value={userActivePubKey}
          />
        </Column>
        <Column>
          <Textbox
            type="text"
            value={validatorPubkey}
            label={<Trans>Validator</Trans>}
            placeholder="Enter receiver address"
            error={validatorPubkeyError}
            onChange={(e) => handleOnchangeValidator(e)}
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
          <PrimaryButton disabled>
            <Trans>Delegate Stake</Trans>
          </PrimaryButton>
        </Column>
      </Row>
    </ContainerFluid>
  );
});

export default Deploy;
