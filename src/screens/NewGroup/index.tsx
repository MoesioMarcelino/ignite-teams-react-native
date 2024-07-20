import { Button, Header, Highlight, Input } from "@components";
import { useNavigation } from "@react-navigation/native";
import { UsersThree } from "phosphor-react-native";
import { useState } from "react";
import { useTheme } from "styled-components/native";
import { Container, Content } from "./styles";

export function NewGroup() {
  const navigate = useNavigation();
  const { COLORS } = useTheme();

  const [group, setGroup] = useState("");

  function handleNewGroup() {
    navigate.navigate("players", { group });
  }

  return (
    <Container>
      <Header showBackIcon />
      <Content>
        <UsersThree size={56} color={COLORS.GREEN_700} />
        <Highlight
          title="Nova Turma"
          subtitle="crie uma turma para adicionar pessoas"
        />

        <Input
          placeholder="Nome da Turma"
          style={{ width: "100%" }}
          onChangeText={(text) => setGroup(text)}
        />

        <Button title="Criar" onPress={handleNewGroup} />
      </Content>
    </Container>
  );
}
