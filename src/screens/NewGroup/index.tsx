import { Button, Header, Highlight, Input } from "@components";
import { useNavigation } from "@react-navigation/native";
import { createOneGroup } from "@storage";
import { AppError } from "@utils";
import { UsersThree } from "phosphor-react-native";
import { useState } from "react";
import { Alert } from "react-native";
import { useTheme } from "styled-components/native";
import { Container, Content } from "./styles";

export function NewGroup() {
  const navigate = useNavigation();
  const { COLORS } = useTheme();

  const [group, setGroup] = useState("");

  function handleNewGroup() {
    navigate.navigate("players", { group });
  }

  async function saveNewGroup() {
    try {
      if (!group.trim().length) {
        throw new AppError("O nome da turma é campo obrigatório.");
      }

      await createOneGroup(group);
      handleNewGroup();
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Novo grupo", error.message);
      } else {
        Alert.alert(
          "Novo grupo",
          "Falha ao tentar criar um novo grupo. Tente novamente."
        );
        console.log(error);
      }
    }
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
          value={group}
          onChangeText={(text) => setGroup(text)}
        />

        <Button title="Criar" onPress={saveNewGroup} />
      </Content>
    </Container>
  );
}
