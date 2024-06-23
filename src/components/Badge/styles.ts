import { TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";

export type BadgeContainerProps = TouchableOpacityProps & {
  active?: boolean;
};

export const BadgeContainer = styled.TouchableOpacity<BadgeContainerProps>(
  ({ theme, active }) => ({
    backgroundColor: theme.COLORS.GRAY_700,
    justifyContent: "center",
    alignItems: "center",

    padding: 12,
    borderRadius: 4,

    border: `1px solid ${
      active ? theme.COLORS.GREEN_700 : theme.COLORS.GRAY_700
    }`,
  })
);

export const BadgeText = styled.Text(({ theme }) => ({
  fontSize: theme.FONT_SIZE.SM,
  color: theme.COLORS.WHITE,
  textTransform: "uppercase",
  fontFamily: theme.FONT_FAMILY.BOLD,
}));
