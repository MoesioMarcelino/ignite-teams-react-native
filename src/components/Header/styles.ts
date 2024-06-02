import { CaretLeft } from "phosphor-react-native";
import styled from "styled-components/native";

export const Container = styled.View(({ theme }) => ({
  width: "100%",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  marginTop: 32,
}));

export const Logo = styled.Image(() => ({
  height: 55,
  width: 46,
}));

export const BackButton = styled.TouchableOpacity(() => ({
  flex: 1,
}));

export const BackIcon = styled(CaretLeft).attrs(({ theme }) => ({
  size: 36,
  color: theme.COLORS.WHITE,
}))(() => ({}));
