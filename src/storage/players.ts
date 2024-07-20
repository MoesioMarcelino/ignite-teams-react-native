import { PLAYER_COLLECTION } from "@constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@utils";
import { PlayerDTO } from "./player.dto";

export async function getPlayersByGroup(
  groupName: string
): Promise<PlayerDTO[]> {
  try {
    const players = await AsyncStorage.getItem(
      `${PLAYER_COLLECTION}-${groupName}`
    );

    const playersParsed: PlayerDTO[] = players ? JSON.parse(players) : [];
    return playersParsed;
  } catch (error) {
    throw error;
  }
}

export async function getPlayersByGroupAndTeam(
  groupName: string,
  teamName: string
): Promise<PlayerDTO[]> {
  try {
    const playersByGroup = await AsyncStorage.getItem(
      `${PLAYER_COLLECTION}-${groupName}`
    );

    const playersByGroupParsed: PlayerDTO[] = playersByGroup
      ? JSON.parse(playersByGroup)
      : [];

    if (!teamName) {
      return playersByGroupParsed;
    }

    return playersByGroupParsed.filter(({ team }) => team === teamName);
  } catch (error) {
    throw error;
  }
}

export async function savePlayerByGroup(
  player: PlayerDTO,
  group: string
): Promise<PlayerDTO[]> {
  try {
    const currentPlayers = await getPlayersByGroup(group);

    const playerAlreadyExists = currentPlayers.find(
      ({ name, team }) => name === player.name
    );

    if (playerAlreadyExists) {
      throw new AppError(
        `O participante ${player.name} já existe na turma ${group}.`
      );
    }

    const updatedPlayers = [...currentPlayers, player];

    await AsyncStorage.setItem(
      `${PLAYER_COLLECTION}-${group}`,
      JSON.stringify(updatedPlayers)
    );

    return updatedPlayers;
  } catch (error) {
    throw error;
  }
}

export async function deletePlayerFromGroup(
  player: PlayerDTO,
  group: string
): Promise<PlayerDTO[]> {
  try {
    const currentPlayers = await getPlayersByGroup(group);

    const updatedPlayers = currentPlayers.filter(
      ({ name, team }) => name !== player.name
    );

    await AsyncStorage.setItem(
      `${PLAYER_COLLECTION}-${group}`,
      JSON.stringify(updatedPlayers)
    );

    return updatedPlayers;
  } catch (error) {
    throw error;
  }
}
