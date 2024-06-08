import { TextInputProps } from "react-native";
import { InputContainer } from "./styles";

export function Input(props: TextInputProps) {
  return <InputContainer {...props} />;
}
