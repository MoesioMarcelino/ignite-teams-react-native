import { useNavigation } from "@react-navigation/native";
import { TouchableOpacityProps } from "react-native";
import { Container, Icon, Title } from "./styles";

export type GroupCardProps = TouchableOpacityProps & {
  title: string;
};

export function GroupCard({ title, ...rest }: GroupCardProps) {
  const navigation = useNavigation();

  function handleGoToGroup() {
    navigation.navigate("players", { group: title });
  }

  return (
    <Container onPress={handleGoToGroup} {...rest}>
      <Icon />
      <Title>{title}</Title>
    </Container>
  );
}
