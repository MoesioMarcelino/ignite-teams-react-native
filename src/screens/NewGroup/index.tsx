import { Button, Header, Highlight } from "@components";
import { Container, Content, Icon } from "./styles";

export function NewGroup() {
  return (
    <Container>
      <Header showBackIcon />
      <Content>
        <Icon />
        <Highlight
          title="Nova Turma"
          subtitle="crie uma turma para adicionar pessoas"
        />

        <Button title="Criar" />
      </Content>
    </Container>
  );
}
