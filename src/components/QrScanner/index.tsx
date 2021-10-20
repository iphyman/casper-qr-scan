import { ChangeEvent, forwardRef, useState } from "react";
import styled, { keyframes } from "styled-components/macro";
import { BsCameraFill, BsFillCloudUploadFill } from "react-icons/bs";
import { ContainerFluid } from "components/Container";
import { Row } from "components/Row";
import { Column } from "components/Column";
import { BaseButton } from "components/Button";

const ScanningAnimation = keyframes`
0% {
    box-shadow: 0px 0px 8px 10px rgba(170, 11, 23, 0.49);
    top: 50%;
  }  
  25% {
    box-shadow: 0px 6px 8px 10px rgba(170, 11, 23, 0.49);
    top: 5px;
  }
  75% {
    box-shadow: 0px -6px 8px 10px rgba(170, 11, 23, 0.49);
    top: 98%;
  }
`;

const QrImage = styled.img`
  width: 100%;
  height: 100%;
`;

const QrScannerWrapper = styled.div`
  width: 260px;
  height: 260px;
  padding: 1.2rem;
  margin: 0.3rem 0rem 1.2rem;
  position: relative;

  ::after,
  ::before,
  & > :first-child::after,
  & > :first-child::before {
    content: "";
    position: absolute;
    width: 22px;
    height: 33px;
    border-color: ${({ theme }) => theme.text200};
    border-style: solid;
  }

  ::after {
    border-width: 2px 2px 0px 0px;
    top: 0px;
    right: 0px;
  }

  ::before {
    border-width: 2px 0px 0px 2px;
    top: 0px;
    left: 0px;
  }

  & > :first-child::after {
    border-width: 0px 0px 2px 2px;
    bottom: 0px;
    left: 0px;
  }

  & > :first-child::before {
    border-width: 0px 2px 2px 0px;
    bottom: 0px;
    right: 0px;
  }
`;

const FirstChild = styled.div``;

const Scanner = styled.div`
  width: 100%;
  height: 3px;
  position: relative;
  top: 50%;
  background-color: ${({ theme }) => theme.red100};
  opacity: 0.7;
  box-shadow: 0px 0px 8px 10px rgba(170, 11, 23, 0.49);
  animation: ${ScanningAnimation} 4s linear 0s infinite;
`;

const HiddenFileInput = styled.input`
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  opacity: 0;
  cursor: pointer;
`;

const ButtonGroup = styled.div`
  width: 260px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IconButton = styled(BaseButton)`
  color: ${({ theme }) => theme.text200};
  font-size: 1.8rem;
  line-height: 1.5;
  position: relative;
  overflow: hidden;

  :hover {
    color: ${({ theme }) => theme.text100};
  }
`;

const QrScanner = forwardRef<HTMLDivElement, any>((_props, ref) => {
  const [file, setFile] = useState<File | null>(null);

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <ContainerFluid ref={ref} p="1rem" bg>
      <Row justifyContent="center">
        <Column>
          <ButtonGroup>
            <IconButton title="Capture Qr code">
              <BsCameraFill />
            </IconButton>
            <IconButton onClick={() => setFile(null)} title="Upload Qr code">
              <BsFillCloudUploadFill />
              <HiddenFileInput
                type="file"
                accept="image/*"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleImageUpload(e)
                }
              />
            </IconButton>
          </ButtonGroup>
        </Column>
      </Row>
      <Row justifyContent="center">
        <Column>
          <QrScannerWrapper>
            <FirstChild />
            <Scanner />
            {file && <QrImage src={URL.createObjectURL(file)} alt="qr code" />}
          </QrScannerWrapper>
        </Column>
      </Row>
    </ContainerFluid>
  );
});

export default QrScanner;
