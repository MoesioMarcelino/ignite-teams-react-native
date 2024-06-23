import {
  ButtonContainer,
  ButtonContainerProps,
  Icon,
  IconProps,
} from "./styles";

export type ButtonIconProps = ButtonContainerProps & IconProps & IconProps;

export function ButtonIcon({ name, variant, ...rest }: ButtonIconProps) {
  return (
    <ButtonContainer {...rest}>
      <Icon name={name} variant={variant} />
    </ButtonContainer>
  );
}
