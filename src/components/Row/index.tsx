import styled from "styled-components/macro";
import media from "../../theme/media";
import { IRow } from "../../@types";
import {
  AlignContent,
  AlignItems,
  AlignSelf,
  JustifyContent,
} from "../../data/constants";

const GutterX = 1.5;
const GutterY = 0;
const MeasuredUnit = "rem";

export const Row = styled.div<IRow>`
  display: flex;
  flex-wrap: wrap;
  margin-top: ${GutterY * -1 + MeasuredUnit};
  margin-right: ${GutterX / -2 + MeasuredUnit};
  margin-left: ${GutterX / -2 + MeasuredUnit};

  & > * {
    box-sizing: border-box;
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    padding-right: ${GutterX / 2 + MeasuredUnit};
    padding-left: ${GutterX / 2 + MeasuredUnit};
    margin-top: ${GutterY + MeasuredUnit};
  }
  ${({ alignContent = "inherit" }) => AlignContent[alignContent]};
  ${({ alignItems = "inherit" }) => AlignItems[alignItems]};
  ${({ alignSelf = "inherit" }) => AlignSelf[alignSelf]};
  ${({ justifyContent = "inherit" }) => JustifyContent[justifyContent]};

  ${media.atLeastTablet`
   ${({ alignItemsAtLeastTablet = "inherit" }: IRow) =>
     AlignItems[alignItemsAtLeastTablet]};
    `};
  ${media.atLeastMobile`
  ${({ alignItemsAtLeastMobile = "inherit" }: IRow) =>
    AlignItems[alignItemsAtLeastMobile]};
  `};
  ${media.atLeastLaptop`
  ${({ alignItemsAtLeastLaptop = "inherit" }: IRow) =>
    AlignItems[alignItemsAtLeastLaptop]};
  `};
  ${media.atLeastTablet`
  ${({ justifyContentAtLeastTablet = "inherit" }: IRow) =>
    JustifyContent[justifyContentAtLeastTablet]};
  `};
  ${media.atLeastLaptop`
  ${({ justifyContentAtLeastLaptop = "inherit" }: IRow) =>
    JustifyContent[justifyContentAtLeastLaptop]};
  `};
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-self: flex-end;
`;
