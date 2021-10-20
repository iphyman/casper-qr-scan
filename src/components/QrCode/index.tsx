import { Fragment } from "react";
import styled from "styled-components/macro";
import { QRCode } from "react-qrcode-logo";
import { Trans } from "@lingui/macro";
import { Row } from "components/Row";
import { Column } from "components/Column";
import { DownloadButton } from "components/Button";

const QrcodeWrapper = styled.div`
  border: 2px solid rgba(128, 163, 182, 0.2);
  padding: 1rem;
  border-radius: 4px;
`;

interface QrCodeProps {
  data: string;
  fileName: string;
}

export default function QrCode({ data, fileName }: QrCodeProps) {
  const handleDownload = () => {
    const canvas = document.querySelector(
      "#react-qrcode-logo"
    ) as HTMLCanvasElement;
    const link = document.createElement("a");
    link.download = fileName + ".png";
    link.href = canvas?.toDataURL("image/jpeg", 1.0);
    link.click();
  };

  return (
    <Fragment>
      <Row>
        <Column justifyContent="center">
          <QrcodeWrapper>
            <QRCode value={data} size={220} eyeRadius={4} qrStyle="dots" />
          </QrcodeWrapper>
        </Column>
        <Column justifyContent="center">
          <DownloadButton onClick={handleDownload}>
            <Trans>Download</Trans>
          </DownloadButton>
        </Column>
      </Row>
    </Fragment>
  );
}
