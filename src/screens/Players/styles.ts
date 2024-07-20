import styled from "styled-components/native";

export const Container = styled.View(({ theme }) => ({
  fontSize: 10,
  backgroundColor: theme.COLORS.GRAY_600,
  padding: 16,
  flex: 1,
}));

export const Content = styled.View(() => ({
  marginTop: 40,
  gap: 16,
}));

export const Form = styled.View(({ theme }) => ({
  flexDirection: "row",
  backgroundColor: theme.COLORS.GRAY_700,
  borderRadius: 6,
  gap: 16,
  alignItems: "center",
  justifyContent: "space-between",
}));

export const FiltersContainer = styled.View(() => ({
  flexDirection: "row",
  alignItems: "center",
  gap: 16,
}));

export const PlayersPerFilter = styled.Text(({ theme }) => ({
  fontFamily: theme.FONT_FAMILY.BOLD,
  fontSize: theme.FONT_SIZE.SM,
  color: theme.COLORS.WHITE,
}));
