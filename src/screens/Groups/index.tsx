import { GroupCard, Header, Highlight, EmptyList } from "@components";
import { Container, Text } from "./styles";
import { useState } from "react";
import { FlatList } from "react-native";

export function Groups() {
  const [groups, setGroups] = useState<string[]>([
    "Turma 1",
    "Turma 2",
    "Turma 3",
  ]);

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
          padding: 16,
          ...(groups.length === 0 && { flex: 1 }),
        }}
        ListEmptyComponent={() => (
          <EmptyList message="Ah, você ainda não tem turmas criadas, que tal criar uma nova agora?" />
        )}
      />
    </Container>
  );
}
