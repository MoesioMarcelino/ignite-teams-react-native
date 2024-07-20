import { Button, EmptyList, GroupCard, Header, Highlight } from "@components";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { FlatList } from "react-native";
import { Container } from "./styles";

export function Groups() {
  const navigation = useNavigation();

  const [groups, setGroups] = useState<string[]>([
    "Turma 1",
    "Turma 2",
    "Turma 3",
  ]);

  function handleNewGroup() {
    navigation.navigate("new");
  }

  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="jogue com a sua turma" />
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
      <Button title="Criar nova turma" onPress={handleNewGroup} />
    </Container>
  );
}
