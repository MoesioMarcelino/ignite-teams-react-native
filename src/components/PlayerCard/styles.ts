import { UserCircle } from "phosphor-react-native";
import styled from "styled-components/native";

export const Container = styled.View(({ theme }) => ({
  backgroundColor: theme.COLORS.GRAY_500,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  paddingLeft: 16,
  borderRadius: 6,
  width: "100%",
}));

export const NameContainer = styled.View(() => ({
  flexDirection: "row",
  alignItems: "center",
  gap: 12,
}));

export const Icon = styled(UserCircle).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_200,
  weight: "fill",
}))(() => ({}));

export const Name = styled.Text(({ theme }) => ({
  color: theme.COLORS.WHITE,
  fontSize: theme.FONT_SIZE.MD,
}));
