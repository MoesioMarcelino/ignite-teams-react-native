import { BadgeContainer, BadgeContainerProps, BadgeText } from "./styles";

export type BadgeProps = BadgeContainerProps & { title: string };

export function Bagde({ title, ...rest }: BadgeProps) {
  return (
    <BadgeContainer {...rest}>
      <BadgeText>{title}</BadgeText>
    </BadgeContainer>
  );
}
