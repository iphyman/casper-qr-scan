import styled from "styled-components/macro";
import media from "../../theme/media";
import { AlignItems, Display, JustifyContent } from "../../data/constants";
import { IColumn } from "../../@types";

const TotalColums = 12;
const OneColumn = 100 / TotalColums;
const FlexBasis = (col: any): string => {
  switch (col) {
    case true:
      return `
            flex: 0, 0 auto;
            `;
    case "auto":
      return `
            flex: 0, 0 auto;
            width: auto;
            `;
    default:
      return `
            flex: 0, 0, auto;
            width: ${OneColumn * col + "%"}
            `;
  }
};

export const Column = styled.div<IColumn>`
  position: relative;
  min-height: 1px;

  ${({ column }) => FlexBasis(column)};
  ${({ display = "flex" }) => Display[display]};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};

  ${media.mobile`
  margin: ${({ marginMobile }: IColumn) => marginMobile};
  `};

  ${media.atLeastMobile`
${({ columnAtLeastMobile }: IColumn) => FlexBasis(columnAtLeastMobile)};
`};

  ${media.atLeastMobileL`
${({ columnAtLeastMobileL }: IColumn) => FlexBasis(columnAtLeastMobileL)};
`};

  ${media.tablet`
 margin: ${({ marginTablet }: IColumn) => marginTablet};
  `};

  ${media.atLeastTablet`
${({ columnAtLeastTablet }: IColumn) => FlexBasis(columnAtLeastTablet)};
`};

  ${media.atLeastTabletL`
${({ columnAtLeastTabletL }: IColumn) => FlexBasis(columnAtLeastTabletL)};
`};

  ${media.atLeastLaptop`
${({ columnAtLeastLaptop }: IColumn) => FlexBasis(columnAtLeastLaptop)};
`};

  ${({ alignItems = "inherit" }) => AlignItems[alignItems]};

  ${({ justifyContent = "inherit" }) => JustifyContent[justifyContent]};

  ${media.mobileL`
  ${({ alignItemsMobileL = "inherit" }: IColumn) =>
    AlignItems[alignItemsMobileL]};
  `};

  ${media.atLeastMobile`
    ${({ justifyContentAtLeastMobile = "inherit" }: IColumn) =>
      JustifyContent[justifyContentAtLeastMobile]};
    `};

  ${media.atLeastMobileL`
    ${({ justifyContentAtLeastMobileL = "inherit" }: IColumn) =>
      JustifyContent[justifyContentAtLeastMobileL]};
    `};

  ${media.atLeastTablet`
    ${({ justifyContentAtLeastTablet = "inherit" }: IColumn) =>
      JustifyContent[justifyContentAtLeastTablet]};
    `};

  ${media.atLeastLaptop`
    ${({ justifyContentAtLeastLaptop = "inherit" }: IColumn) =>
      JustifyContent[justifyContentAtLeastLaptop]};
    `};
`;
