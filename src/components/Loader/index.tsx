import { ActivityIndicator, Text } from "react-native";
import { Container } from "./styles";
import { theme } from "@theme";

export function Loader() {
  return (
    <Container>
      <ActivityIndicator size={32} />
    </Container>
  );
}
