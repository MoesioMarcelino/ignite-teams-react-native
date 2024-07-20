import styled from "styled-components/native";

export const Container = styled.View(({ theme }) => ({
  fontSize: 10,
  backgroundColor: theme.COLORS.GRAY_600,
  flex: 1,
  padding: 16,
}));

export const Content = styled.View(() => ({
  marginTop: 128,
  justifyContent: "center",
  alignItems: "center",
  gap: 32,
}));
