import { TextInput, TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";
import { Input as InputContainer } from "./styles";

type InputProps = {
  inputRef?: React.RefObject<TextInput>;
} & TextInputProps;

export function Input(props: InputProps) {
  const { COLORS } = useTheme();

  return (
    <InputContainer
      ref={props.inputRef}
      {...props}
      placeholderTextColor={COLORS.GRAY_300}
    />
  );
}
