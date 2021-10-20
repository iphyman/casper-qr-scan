import { useState, forwardRef } from "react";
import { Trans } from "@lingui/macro";
import QrCode from "components/QrCode";
import { ContainerFluid } from "components/Container";
import { Row } from "components/Row";
import { Column } from "components/Column";
import { Textbox } from "components/Textbox";
import { PrimaryButton } from "components/Button";
import { useUserPubKey } from "data/user/hooks";
import { isValidPubkey } from "utils";

const TRANSFER_URL = "https://cspr.live/transfer?";

const Create = forwardRef<HTMLDivElement, any>((props, ref) => {
  const defaultReceiver = useUserPubKey();
  const [receiver, setReceiver] = useState<string>(defaultReceiver ?? "");
  const [receiverError, setReceiverError] = useState<boolean>(false);
  const [amount, setAmount] = useState<string>("");
  const [transferId, setTransferId] = useState<string | number>(
    new Date().getTime()
  );
  const [showQrCode, setShowQrCode] = useState<boolean>(false);

  const qrcodeData = () => {
    if (!receiverError) {
      if (amount.length > 0) {
        return `${TRANSFER_URL}receipient=${receiver}?amount=${amount}?transfer_id=${transferId}`;
      }
      return `${TRANSFER_URL}receipient=${receiver}?transfer_id=${transferId}`;
    }

    setShowQrCode(false);
    return "Invalid data provided";
  };

  const filename = transferId + "_Transfer_Qrcode";

  return (
    <ContainerFluid ref={ref} p="1rem" bg>
      {!showQrCode && (
        <Row>
          <Column>
            <Textbox
              type="text"
              value={receiver}
              label={<Trans>Recipient</Trans>}
              placeholder="Enter receiver address"
              error={receiverError}
              onChange={(e) => {
                const value = e.target.value;
                if (isValidPubkey(value)) {
                  setReceiverError(false);
                  setReceiver(value);
                } else {
                  setReceiverError(true);
                  setReceiver(value);
                }
              }}
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
            <Textbox
              type="text"
              value={transferId}
              placeholder="134578653443"
              label={<Trans>Transfer ID (Memo)</Trans>}
              onChange={(e) => setTransferId(e.target.value)}
            />
          </Column>
          <Column>
            <PrimaryButton
              disabled={receiverError || !receiver}
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
