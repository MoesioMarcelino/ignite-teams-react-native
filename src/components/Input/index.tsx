import { TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";
import { Input as InputContainer } from "./styles";

export function Input(props: TextInputProps) {
  const { COLORS } = useTheme();

  return <InputContainer {...props} placeholderTextColor={COLORS.GRAY_300} />;
}
