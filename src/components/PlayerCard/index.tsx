import { ButtonIcon } from "../ButtonIcon";
import { Container, Icon, Name, NameContainer } from "./styles";

export type PlayerCardProps = {
  name: string;
};

export function PlayerCard({ name }: PlayerCardProps) {
  return (
    <Container>
      <NameContainer>
        <Icon />
        <Name>{name}</Name>
      </NameContainer>
      <ButtonIcon name="close" variant="secondary" />
    </Container>
  );
}
