import { TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";

export type StyledButtonProps = TouchableOpacityProps & {
  variant?: "primary" | "secondary";
};

export const StyledButton = styled.TouchableOpacity<StyledButtonProps>(
  ({ theme, variant = "primary" }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",

    height: 56,
    borderRadius: 6,
    backgroundColor:
      variant === "primary" ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK,
  })
);

export const StyledButtonText = styled.Text(({ theme }) => ({
  color: theme.COLORS.WHITE,
  fontSize: theme.FONT_SIZE.MD,
}));
