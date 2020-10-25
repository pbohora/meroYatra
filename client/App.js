import React, { useState, useEffect } from "react";
import { ScrollView, View, Image, StyleSheet, Text } from "react-native";

import HomeAnimation from "./screens/HomeAnimation";
import Navigator from "./routes/navigator";

import { useFonts, Aclonica_400Regular } from "@expo-google-fonts/aclonica";
import {
  ABeeZee_400Regular,
  ABeeZee_400Regular_Italic,
} from "@expo-google-fonts/abeezee";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [fontsLoaded] = useFonts({
    ABeeZee_400Regular,
    ABeeZee_400Regular_Italic,
    Aclonica_400Regular,
  });

  useState(() => setTimeout(() => setIsLoading(false), 9000), []);

  return (
    <View style={styles.container}>
      {!fontsLoaded || isLoading ? (
        <View>
          <HomeAnimation />
        </View>
      ) : (
        <Navigator />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
});

export default App;
