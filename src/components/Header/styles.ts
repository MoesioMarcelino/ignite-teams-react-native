import { CaretLeft } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)(() => ({
  width: "100%",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
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
