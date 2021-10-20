import { useState, ChangeEvent, forwardRef } from "react";
import { Trans } from "@lingui/macro";
import { ContainerFluid } from "components/Container";
import { Row } from "components/Row";
import { Column } from "components/Column";
import { Textbox } from "components/Textbox";
import { PrimaryButton } from "components/Button";
import QrCode from "components/QrCode";
import { isValidPubkey } from "utils";

const DELEGATE_URL = "https://cspr.live/delegate?";

const Create = forwardRef<HTMLDivElement, any>((_props, ref) => {
  const [validatorPubkey, setValidatorPubkey] = useState<string>("");
  const [validatorPubkeyError, setValidatorPubkeyError] =
    useState<boolean>(false);
  const [amount, setAmount] = useState<string>("");
  const [showQrCode, setShowQrCode] = useState<boolean>(false);

  const qrcodeData = () => {
    if (!validatorPubkeyError) {
      if (amount.length > 0) {
        return `${DELEGATE_URL}validator=${validatorPubkey}?amount=${amount}`;
      }
      return `${DELEGATE_URL}validator=${validatorPubkey}`;
    }

    setShowQrCode(false);
    return "Invalid data provided";
  };

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

  const filename = "DELEGATION_QR_CODE";

  return (
    <ContainerFluid ref={ref} p="1rem" bg>
      {!showQrCode && (
        <Row>
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
              placeholder="0.00"
              rightAddon="CSPR"
              onChange={(e) => setAmount(e.target.value)}
            />
          </Column>
          <Column>
            <PrimaryButton
              disabled={validatorPubkeyError || !validatorPubkey}
              onClick={() => setShowQrCode(true)}
            >
              <Trans>Create Qr Code</Trans>
            </PrimaryButton>
          </Column>
        </Row>
      )}
      {showQrCode && <QrCode data={qrcodeData()} fileName={filename} />}
    </ContainerFluid>
  );
});

export default Create;
