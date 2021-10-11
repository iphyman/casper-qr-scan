import { useState, Fragment } from "react";
import styled from "styled-components/macro";
import { Trans } from "@lingui/macro";
import { QRCode } from "react-qrcode-logo";
import { Row } from "components/Row";
import { Column } from "components/Column";
import { Textbox } from "components/Textbox";
import { PrimaryButton, DownloadButton } from "components/Button";
import { useUserPubKey } from "data/user/hooks";
import { isValidPubkey } from "utils";

const TRANSFER_URL = "https://cspr.live/transfer?";

const QrcodeWrapper = styled.div`
  border: 2px solid rgba(128, 163, 182, 0.2);
  padding: 1rem;
  border-radius: 4px;
`;

export function Create() {
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

  const handleDownload = () => {
    const canvas = document.querySelector(
      "#react-qrcode-logo"
    ) as HTMLCanvasElement;
    const link = document.createElement("a");
    link.download = transferId + "_Transfer_Qrcode.png";
    link.href = canvas?.toDataURL("image/jpeg", 1.0);
    link.click();
  };

  return (
    <Fragment>
      {!showQrCode && (
        <Fragment>
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
        </Fragment>
      )}
      {showQrCode && (
        <Fragment>
          <Row>
            <Column justifyContent="center">
              <QrcodeWrapper>
                <QRCode
                  value={qrcodeData()}
                  size={220}
                  eyeRadius={4}
                  qrStyle="dots"
                />
              </QrcodeWrapper>
            </Column>
            <Column justifyContent="center">
              <DownloadButton onClick={handleDownload}>
                <Trans>Download</Trans>
              </DownloadButton>
            </Column>
          </Row>
        </Fragment>
      )}
    </Fragment>
  );
}
