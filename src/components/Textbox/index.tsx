import styled, { keyframes } from "styled-components/macro";
import { TextboxProps } from "../../@types";

const BorderAnimation = keyframes`
    0% {
        transform: scaleX(0); 
    }
    100% {
        transform: scaleX(1);
    }
`;

const Container = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 1rem;
`;

const StyledLabel = styled.div`
  position: absolute;
  top: 0;
  left: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 13px;
  line-height: 1.8;
  color: ${({ theme }) => theme.text200};
  user-select: none;
  pointer-events: none;
  transition: all 0.25s ease;
  z-index: 1;
`;

const StyledBorder = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 4px;
  overflow: hidden;
  pointer-events: none;
`;

const StyledBorderFocus = styled.div<{ error?: boolean }>`
  width: 100%;
  height: 3px;
  position: absolute;
  bottom: 0;
  transform: scaleX(1);
  background: ${({ error, theme }) =>
    error ? theme.red100 : theme.primary100};
  opacity: ${({ error }) => (error ? 1 : 0)};
  transition: opacity 0.25s ease-in-out, background 0.25s ease-in-out;
  animation: ${BorderAnimation} 0.25s ease-in-out forwards;
`;

export const StyledInput = styled.input<{ error?: boolean; fontSize?: string }>`
  position: relative;
  width: 100%;
  height: auto;
  padding: 30px 10px 10px;
  border-radius: 4px;
  background: ${({ theme }) => theme.bg200};
  font-size: ${({ fontSize }) => fontSize ?? "1rem"};
  color: ${({ error, theme }) => (error ? theme.red100 : theme.text200)};
  white-space: nowrap;
  border: 1px solid ${({ theme }) => theme.bg100};
  outline: 0;

  &:focus ~ ${StyledBorder} > ${StyledBorderFocus} {
    opacity: 1;
  }

  /* Chrome, Safari, Edge, Opera */
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  [type="number"] {
    -moz-appearance: textfield;
  }
`;

const StyledBox = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  padding: 30px 10px 10px;
  border-radius: 4px;
  background: ${({ theme }) => theme.bg200};
  font-size: 1rem;
  color: ${({ theme }) => theme.text200};
  white-space: nowrap;
  border: 1px solid ${({ theme }) => theme.bg100};
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: none;
`;

const StyledRightAddon = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  right: 10px;
  display: flex;
  align-items: center;
`;

export function Textbox(props: TextboxProps) {
  const {
    label,
    name,
    placeholder,
    value,
    type,
    onChange,
    error,
    rightAddon,
    ...rest
  } = props;

  return (
    <Container>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        error={error}
        onChange={onChange}
        {...rest}
      />
      <StyledBorder>
        <StyledBorderFocus error={error} />
      </StyledBorder>
      {rightAddon && <StyledRightAddon>{rightAddon}</StyledRightAddon>}
    </Container>
  );
}

export function ReadOnlyTextbox({
  label,
  value,
}: Pick<TextboxProps, "label" | "value">) {
  return (
    <Container>
      <StyledLabel>{label}</StyledLabel>
      <StyledBox>{value}</StyledBox>
    </Container>
  );
}
