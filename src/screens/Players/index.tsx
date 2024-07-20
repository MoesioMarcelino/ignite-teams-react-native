import {
  Bagde,
  Button,
  ButtonIcon,
  EmptyList,
  Header,
  Highlight,
  Input,
  PlayerCard,
} from "@components";
import { useRoute } from "@react-navigation/native";
import { useState } from "react";
import { FlatList } from "react-native";
import {
  Container,
  Content,
  FiltersContainer,
  Form,
  PlayersPerFilter,
} from "./styles";

const PLAYERS_LIST = [{ name: "Moésio Marcelino", team: "Time A" }];

type RouteParams = {
  group: string;
};

export function Players() {
  const route = useRoute();

  const [filters, setFilters] = useState<string[]>(["Time A", "Time B"]);
  const [activeFilter, setActiveFilter] = useState("");

  const [players, setPlayers] =
    useState<Array<{ name: string; team: string }>>(PLAYERS_LIST);

  const { group = "Nome da turma" } = route.params as RouteParams;

  function toggleFilter(filter: string) {
    const removeFilter = activeFilter === filter;
    if (removeFilter) {
      setActiveFilter("");
      setPlayers(PLAYERS_LIST);
      return;
    }

    setPlayers(PLAYERS_LIST.filter(({ team }) => team === filter));
    setActiveFilter(filter);
  }

  return (
    <Container>
      <Header showBackIcon />
      <Content>
        <Highlight
          title={group}
          subtitle="adicione a galera e separe os times"
        />

        <Form>
          <Input placeholder="Nome do participante" autoCorrect={false} />
          <ButtonIcon name="add" />
        </Form>

        <FiltersContainer>
          <FlatList
            data={filters}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <Bagde
                title={item}
                active={item === activeFilter}
                onPress={() => toggleFilter(item)}
              />
            )}
            horizontal
            contentContainerStyle={{
              gap: 8,
            }}
          />
          <PlayersPerFilter>{players.length}</PlayersPerFilter>
        </FiltersContainer>

        <FlatList
          contentContainerStyle={
            players.length === 0 ? { flex: 1 } : { gap: 8, marginBottom: 40 }
          }
          data={players}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => <PlayerCard name={item.name} />}
          ListEmptyComponent={() => (
            <EmptyList message="Lista de participantes vazia!" />
          )}
          showsVerticalScrollIndicator={false}
        />
        <Button title="Remover turma" variant="secondary" />
      </Content>
    </Container>
  );
}
