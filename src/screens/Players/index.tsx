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
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  deletePlayerFromGroup,
  getPlayersByGroupAndTeam,
  removeGroup,
  savePlayerByGroup,
} from "@storage";
import { AppError } from "@utils";
import { useEffect, useRef, useState } from "react";
import { Alert, FlatList, Keyboard, TextInput } from "react-native";
import {
  Container,
  Content,
  FiltersContainer,
  Form,
  PlayersPerFilter,
} from "./styles";

type RouteParams = {
  group: string;
};

type Player = {
  name: string;
  team: string;
};

const TEAMS = ["Time A", "Time B"];

export function Players() {
  const route = useRoute();
  const navigation = useNavigation();

  const newPlayerRef = useRef<TextInput>(null);

  const [loading, setLoading] = useState(false);
  const [playerName, setPlayerName] = useState("");
  const [teamSelected, setTeamSelected] = useState(TEAMS[0]);
  const [players, setPlayers] = useState<Player[]>([]);

  const { group = "Nome da turma" } = route.params as RouteParams;

  function handleToggleFilter(filter: string) {
    const removeFilter = teamSelected === filter;
    if (removeFilter) {
      setTeamSelected("");
      fetchPlayers();
      return;
    }

    setTeamSelected(filter);
  }

  async function addPlayerToGroup() {
    try {
      if (!playerName.trim().length) {
        throw new AppError("O nome do participante é campo obrigatório.");
      }

      const newPlayer = {
        name: playerName,
        team: teamSelected,
      } as Player;

      setLoading(true);
      await savePlayerByGroup(newPlayer, group);

      newPlayerRef.current?.blur();
      Keyboard.dismiss();
      setPlayerName("");

      await fetchPlayers();
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Adicionar participante", error.message);
      } else {
        Alert.alert(
          "Adicionar participante",
          `Falha ao adicionar o participante ${playerName}. Tente novamente.`
        );
        console.log(error);
      }
    } finally {
      setLoading(false);
    }
  }

  async function fetchPlayers() {
    try {
      setLoading(true);
      const players = await getPlayersByGroupAndTeam(group, teamSelected);
      setPlayers(players);
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Listar participantes", error.message);
      } else {
        Alert.alert(
          "Listar participantes",
          "Ocorreu um erro ao tentar listar os participantes."
        );
        console.log(error);
      }
    } finally {
      setLoading(false);
    }
  }

  async function handleRemovePlayer(player: Player) {
    try {
      const players = await deletePlayerFromGroup(player, group);
      setPlayers(players);
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Remover jogador", error.message);
      } else {
        Alert.alert("Remover jogador", `Falha ao remover o jogador ${name}`);
        console.log(error);
      }
    }
  }

  async function removeGroupAction() {
    try {
      await removeGroup(group);
      navigation.navigate("groups");
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Remover turma", error.message);
      } else {
        Alert.alert(
          "Remover turma",
          "Falha ao tentar remover a turma. Tente novamente."
        );
        console.log(error);
      }
    }
  }

  async function handleRemoveGroup() {
    Alert.alert("Remover", `Deseja remover a turma ${group}?`, [
      { text: "Não", style: "cancel", isPreferred: true },
      { text: "Sim", style: "default", onPress: removeGroupAction },
    ]);
  }

  useEffect(() => {
    fetchPlayers();
  }, [teamSelected]);

  return (
    <Container>
      <Header showBackIcon />
      <Content>
        <Highlight
          title={group}
          subtitle="adicione a galera e separe os times"
        />

        <Form>
          <Input
            inputRef={newPlayerRef}
            placeholder="Nome do participante"
            autoCorrect={false}
            value={playerName}
            onChangeText={(text) => setPlayerName(text)}
            returnKeyType="done"
            onSubmitEditing={addPlayerToGroup}
          />
          <ButtonIcon name="add" onPress={addPlayerToGroup} />
        </Form>

        {TEAMS.length > 0 && (
          <FiltersContainer>
            <FlatList
              data={TEAMS}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <Bagde
                  title={item}
                  active={item === teamSelected}
                  onPress={() => handleToggleFilter(item)}
                />
              )}
              horizontal
              contentContainerStyle={{
                gap: 8,
              }}
            />
            <PlayersPerFilter>{players.length}</PlayersPerFilter>
          </FiltersContainer>
        )}
      </Content>
      <FlatList
        contentContainerStyle={
          players.length === 0
            ? { flex: 1 }
            : { gap: 8, marginBottom: 20, paddingBottom: 20 }
        }
        horizontal={false}
        data={players}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <PlayerCard
            name={item.name}
            onRemove={() => handleRemovePlayer(item)}
          />
        )}
        ListEmptyComponent={() => (
          <EmptyList message="Lista de participantes vazia!" />
        )}
        showsVerticalScrollIndicator={false}
      />
      <Button
        title="Remover turma"
        variant="secondary"
        onPress={handleRemoveGroup}
      />
    </Container>
  );
}
