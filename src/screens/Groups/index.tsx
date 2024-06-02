import { GroupCard, Header, Highlight } from "@components";
import { Container, GroupCardList, Text } from "./styles";

export function Groups() {
  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="jogue com a sua turma" />
      <GroupCardList>
        <GroupCard title="Nome da turma" />
        <GroupCard title="Nome da turma" />
      </GroupCardList>
    </Container>
  );
}
