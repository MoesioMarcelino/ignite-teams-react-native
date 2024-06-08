import { StyledButton, StyledButtonProps, StyledButtonText } from "./styles";

export type ButtonProps = StyledButtonProps & { title: string };

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <StyledButton {...rest}>
      <StyledButtonText>{title}</StyledButtonText>
    </StyledButton>
  );
}
