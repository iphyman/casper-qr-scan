import styled from "styled-components/macro";
import { BaseButtonProps } from "../../@types";
import { darken, lighten } from "polished";

export const BaseButton = styled.button.attrs<BaseButtonProps>(({ type }) => ({
  type: type ?? "button",
}))<BaseButtonProps>`
  width: ${({ full, wide }) => (full ? "100%" : wide ? wide : "auto")};
  min-width: ${({ minWidth }) => minWidth};
  max-width: ${({ maxWidth }) => maxWidth};
  height: ${({ large, tall }) => (large ? "50px" : tall ? tall : "auto")};
  min-height: ${({ minHeight }) => minHeight};
  padding: ${({ padding }) => padding ?? "10px 15px"};
  margin: ${({ margin }) => margin ?? "0px"};
  background-color: ${({ backColor }) =>
    backColor ? backColor : "transparent"};
  border-width: ${({ large }) => (large ? "2px" : "1px")};
  border-style: solid;
  border-color: ${({ borderColor, backColor }) =>
    borderColor ? borderColor : backColor ? backColor : "transparent"};
  border-radius: ${({ rounded, squared }) =>
    rounded ? rounded : squared ? "0px" : "4px"};
  display: ${({ display }) => (display ? display : "flex")};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "center")};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "center"};
  font-size: ${({ size }) => (size ? size : "16px")};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "center")};
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : 1)};
  color: ${({ color }) => (color ? color : "#fff")};
  text-transform: ${({ capitalize, uppercase }) =>
    uppercase ? "uppercase" : capitalize ? "capitalize" : "none"};
  font-weight: ${({ weight }) => (weight ? weight : 600)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  text-decoration: none;
  transition: all 0.25s ease-in-out;
  box-shadow: ${({ boxShadow }) => boxShadow};
  overflow: ${({ overflow }) => overflow};
  flex: ${({ flex }) => flex};
  white-space: ${({ whiteSpace }) => whiteSpace};
  opacity: ${({ disabled, opacity }) =>
    disabled ? 0.5 : opacity ? opacity : 1};

  &:hover {
    color: ${({ hoverTextColor, color }) => hoverTextColor ?? color};
    background-color: ${({ disabled, hoverBackColor }) =>
      disabled ? "none" : hoverBackColor ? hoverBackColor : "transparent"};
    border-color: ${({ disabled, hoverBorderColor }) =>
      disabled ? "none" : hoverBorderColor ? hoverBorderColor : "transparent"};
    text-decoration: none;
  }

  &:focus {
    outline: 0px;
  }
`;

export const ConnectCasperBtn = styled(BaseButton)`
  background-color: ${({ theme }) => theme.bg400};
  padding: ${({ padding }) => padding ?? "10px"};
  font-weight: 500;
  color: ${({ theme }) => theme.white};
  transition: all 0.5s ease;
  border-radius: 12px;

  &:hover {
    background-color: ${({ theme }) => darken(0.1, theme.bg400)};
  }
`;

export const MenuButton = styled(BaseButton)`
  background-color: ${({ theme }) => theme.bg100};
  padding: 3px 8px;
  height: 38px;
  margin-left: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text300};
  transition: all 0.5s ease;
  border-radius: 12px;

  &:hover {
    background-color: ${({ theme }) => lighten(0.1, theme.bg200)};
  }
`;

export const PrimaryButton = styled(BaseButton)`
  width: 100%;
  height: 48px;
  background-color: ${({ theme }) => theme.bg500};
  padding: ${({ padding }) => padding ?? "10px"};
  font-weight: 500;
  color: ${({ theme }) => theme.white};
  transition: all 0.5s ease;
  border-radius: 4px;

  &:hover {
    background-color: ${({ theme }) => darken(0.1, theme.bg500)};
  }
`;

export const DownloadButton = styled(BaseButton)`
  width: 100%;
  height: 50px;
  background-color: #10d078;
  margin: 30px 0px;
  font-weight: 600;

  &:hover {
    background-color: darken(0.2, #10d078);
  }
`;
