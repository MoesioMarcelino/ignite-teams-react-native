import {
  Button,
  EmptyList,
  GroupCard,
  Header,
  Highlight,
  Loading,
} from "@components";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { getGroups } from "@storage";
import { AppError } from "@utils";
import { useCallback, useState } from "react";
import { Alert, FlatList } from "react-native";
import { Container } from "./styles";

export function Groups() {
  const navigation = useNavigation();

  const [loading, setLoading] = useState(false);
  const [groups, setGroups] = useState<string[]>([]);

  function handleNewGroup() {
    navigation.navigate("new");
  }

  async function fetchAllGroups() {
    try {
      setLoading(true);
      const groups = await getGroups();
      setGroups(groups);
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Lista de turmas", error.message);
      } else {
        Alert.alert(
          "Lista de turmas",
          "Ocorreu um erro ao tentar listar todas as turmas."
        );
        console.log(error);
      }
    } finally {
      setLoading(false);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchAllGroups();
    }, [])
  );

  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="jogue com a sua turma" />

      {loading ? (
        <Loading />
      ) : (
        <FlatList
          data={groups}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <GroupCard title={item} />}
          contentContainerStyle={{
            gap: 8,
            ...(groups.length === 0 && { flex: 1 }),
          }}
          ListEmptyComponent={() => (
            <EmptyList message="Ah, você ainda não tem turmas criadas, que tal criar uma nova agora?" />
          )}
        />
      )}

      <Button title="Criar nova turma" onPress={handleNewGroup} />
    </Container>
  );
}
