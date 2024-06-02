import styled from "styled-components/native";

export const Container = styled.View(({ theme }) => ({
  width: "100%",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
}));

export const Logo = styled.Image(() => ({
  height: 55,
  width: 46,
}));
