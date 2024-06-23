import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";

export type ButtonContainerProps = TouchableOpacityProps;

export const ButtonContainer = styled.TouchableOpacity<TouchableOpacityProps>(
  () => ({
    padding: 16,
    backgroundColor: "transparent",
    border: 0,
  })
);

export type IconProps = {
  name: keyof typeof MaterialIcons.glyphMap;
  variant?: "primary" | "secondary";
};

export const Icon = styled(MaterialIcons).attrs<IconProps>(
  ({ theme, variant = "primary", name, size = 24 }) => ({
    name,
    size,
    color: variant === "primary" ? theme.COLORS.GREEN_700 : theme.COLORS.RED,
  })
)(() => ({}));
