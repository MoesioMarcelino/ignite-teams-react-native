import { Button, Header, Highlight, Input } from "@components";
import { useNavigation } from "@react-navigation/native";
import { theme } from "@theme";
import { UsersThree } from "phosphor-react-native";
import { Container, Content } from "./styles";

export function NewGroup() {
  const navigate = useNavigation();

  function handleNewGroup() {
    navigate.navigate("players", { group: "Rocket" });
  }

  return (
    <Container>
      <Header showBackIcon />
      <Content>
        <UsersThree size={56} color={theme.COLORS.GREEN_700} />
        <Highlight
          title="Nova Turma"
          subtitle="crie uma turma para adicionar pessoas"
        />

        <Input placeholder="Nome da Turma" style={{ width: "100%" }} />

        <Button title="Criar" onPress={handleNewGroup} />
      </Content>
    </Container>
  );
}
