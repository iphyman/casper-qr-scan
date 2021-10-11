import { ChangeEvent, ReactNode } from "react";

export interface TextboxProps {
  padding?: string;
  color?: string;
  bg?: string;
  pl?: string;
  pr?: string;
  pt?: string;
  pb?: string;
  rounded?: string;
  border?: string;
  width?: string;
  fontSize?: string;
  lineHeight?: string | number;
  weight?: 400 | 500 | 600 | 700 | 800 | 900;
  error?: boolean;
  type: "text" | "number" | "password";
  placeholder?: any;
  name?: string;
  disabled?: boolean;
  rightAddon?: string | ReactNode;
  label: string | ReactNode;
  value: string | number | undefined;
  inputMode?: any;
  pattern?: string;
  autoComplete?: "on"|"off";
  autoCorrect?: "on"|"off";
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
