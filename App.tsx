import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Teste } from "./src/app-style";
import {
  NunitoSans_400Regular,
  NunitoSans_700Bold,
  useFonts,
} from "@expo-google-fonts/nunito-sans";

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  });

  if (!fontsLoaded) {
    return <Text>Loding font...</Text>;
  }

  return (
    <Teste style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </Teste>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
