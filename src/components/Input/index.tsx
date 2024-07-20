import { theme } from "@theme";
import { TextInputProps } from "react-native";
import { Input as InputContainer } from "./styles";

export function Input(props: TextInputProps) {
  return (
    <InputContainer {...props} placeholderTextColor={theme.COLORS.GRAY_300} />
  );
}
