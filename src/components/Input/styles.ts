import { TextInputProps } from "react-native";
import styled from "styled-components/native";

export const InputContainer = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.COLORS.GRAY_300,
}))<TextInputProps>(({ theme }) => ({
  padding: 16,
  fontSize: theme.FONT_SIZE.MD,
  color: theme.COLORS.WHITE,
  backgroundColor: theme.COLORS.GRAY_700,
  flex: 1,
  border: `1px solid ${theme.COLORS.GRAY_700}`,
  borderRadius: 6,
}));
