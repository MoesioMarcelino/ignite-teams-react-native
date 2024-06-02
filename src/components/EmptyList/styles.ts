import styled from "styled-components/native";

export const Container = styled.View(() => ({
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  padding: 16,
}));

export const Message = styled.Text(({ theme }) => ({
  color: theme.COLORS.GRAY_300,
  fontSize: theme.FONT_SIZE.MD,
  textAlign: "center",
}));
