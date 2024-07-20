import { TextInput } from "react-native";
import styled from "styled-components/native";

export const Input = styled(TextInput).attrs(({ theme }) => ({
  placeholderTextColor: theme.COLORS.GRAY_300,
}))(({ theme }) => ({
  backgroundColor: theme.COLORS.GRAY_700,
  borderRadius: 6,
  border: `1px solid ${theme.COLORS.GRAY_700}`,
  fontSize: theme.FONT_SIZE.MD,
  padding: 16,
}));
