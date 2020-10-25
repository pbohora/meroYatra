import React, { useState, useEffect } from "react";
import { View, Image, StyleSheet, Text } from "react-native";

import HomeAnimation from "./screens/HomeAnimation";
import  Navigator from "./routes/navigator";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useState(() => setTimeout(() => setIsLoading(false), 9000), []);

  return (
    <View style={styles.container}>
      {isLoading && (
        <View>
          <HomeAnimation />
        </View>
      )}
      {!isLoading && <Navigator/>}
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
