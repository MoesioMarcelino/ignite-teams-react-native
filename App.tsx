import { Groups } from "@screens/Groups";
import { ThemeProvider } from "styled-components";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import { theme } from "@theme";
import { Loader } from "@components/Loader";
import { StatusBar } from "react-native";

export default function App() {
  const [fontLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      {fontLoaded ? <Groups /> : <Loader />}
    </ThemeProvider>
  );
}
