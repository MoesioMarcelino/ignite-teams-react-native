import { GROUP_COLLECTION, PLAYER_COLLECTION } from "@constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@utils";

export async function getGroups(): Promise<string[]> {
  try {
    const groups = await AsyncStorage.getItem(GROUP_COLLECTION);

    const groupsParsed: string[] = groups ? JSON.parse(groups) : [];
    return groupsParsed;
  } catch (err) {
    throw err;
  }
}

export async function createOneGroup(groupName: string) {
  try {
    const groups = await getGroups();

    const groupAlreadyExists = groups.find((group) => group === groupName);

    if (groupAlreadyExists) {
      throw new AppError(
        `O grupo ${groupName} já existe, por favor insira um outro nome.`
      );
    }

    const groupsParsed = JSON.stringify([...groups, groupName]);

    await AsyncStorage.setItem(GROUP_COLLECTION, groupsParsed);
  } catch (err) {
    throw err;
  }
}

export async function removeGroup(deletedGroup: string): Promise<void> {
  try {
    const allGroups = await getGroups();
    const restGroups = allGroups.filter((g) => g !== deletedGroup);

    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(restGroups));
    await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${deletedGroup}`);
  } catch (error) {
    throw error;
  }
}
