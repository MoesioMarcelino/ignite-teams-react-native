import { UsersThree } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TouchableOpacity)(({ theme }) => ({
  backgroundColor: theme.COLORS.GRAY_500,
  borderRadius: 8,
  flexDirection: "row",
  gap: 16,
  alignItems: "center",
  padding: "24px 16px",
}));

export const Icon = styled(UsersThree).attrs(({ theme }) => ({
  size: 32,
  weight: "fill",
  color: theme.COLORS.GREEN_700,
}))(() => ({}));

export const Title = styled.Text(({ theme }) => ({
  color: theme.COLORS.WHITE,
  fontSize: 18,
}));
