import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import { ThemeProvider } from "styled-components";

import { Loader } from "@components";
import { theme } from "@theme";
import { StatusBar } from "react-native";
import { Routes } from "src/routes";

export default function App() {
  const [fontLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      {fontLoaded ? <Routes /> : <Loader />}
    </ThemeProvider>
  );
}
