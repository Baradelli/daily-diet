import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Teste } from "./src/app-style";
import {
  NunitoSans_400Regular,
  NunitoSans_700Bold,
  useFonts,
} from "@expo-google-fonts/nunito-sans";
import { ThemeProvider } from "styled-components/native";
import theme from "@/theme";
import { Button } from "@/components/Button";
import { PencilSimpleLine } from "phosphor-react-native";

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  });

  if (!fontsLoaded) {
    return <Text>Loding font...</Text>;
  }

  return (
    <ThemeProvider theme={theme}>
      <Teste style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <Button
          variant="secondary"
          title="Teste"
          icon={PencilSimpleLine}
          onPress={() => console.log("Button pressed")}
        />
        <StatusBar style="auto" />
      </Teste>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
