import { ButtonIcon } from "../ButtonIcon";
import { Container, Icon, Name, NameContainer } from "./styles";

export type PlayerCardProps = {
  name: string;
  onRemove(): void;
};

export function PlayerCard({ name, onRemove }: PlayerCardProps) {
  return (
    <Container>
      <NameContainer>
        <Icon />
        <Name>{name}</Name>
      </NameContainer>
      <ButtonIcon name="close" variant="secondary" onPress={onRemove} />
    </Container>
  );
}
