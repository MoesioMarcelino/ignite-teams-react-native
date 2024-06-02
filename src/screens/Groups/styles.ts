import styled from "styled-components/native";

export const Container = styled.View(({ theme }) => ({
  fontSize: 10,
  backgroundColor: theme.COLORS.GRAY_600,
  flex: 1,
}));

export const Text = styled.Text(({ theme }) => ({
  fontSize: 48,
  color: theme.COLORS.WHITE,
}));

export const GroupCardList = styled.View(() => ({
  padding: 16,
  gap: 8,
}));
