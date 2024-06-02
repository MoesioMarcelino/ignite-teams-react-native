import styled from "styled-components/native";

export const Container = styled.View(() => ({
  width: "100%",
  margin: "32px 0",
}));

export const Title = styled.Text(({ theme }) => ({
  textAlign: "center",
  fontSize: theme.FONT_SIZE.XL,
  fontFamily: theme.FONT_FAMILY.BOLD,
  color: theme.COLORS.WHITE,
}));

export const Subtitle = styled.Text(({ theme }) => ({
  textAlign: "center",
  fontSize: theme.FONT_SIZE.MD,
  fontFamily: theme.FONT_FAMILY.REGULAR,
  color: theme.COLORS.GRAY_300,
}));
