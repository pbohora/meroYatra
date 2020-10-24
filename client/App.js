import React, { useState, useEffect } from "react";
import { View, Image, StyleSheet, Text } from "react-native";

import SelectLanguage from "./Components/SelectLanguage";
import HomeAnimation from "./Components/HomeAnimation";


const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useState(() => setTimeout(() => setIsLoading(false), 5000), []);

  return (
    <View style={styles.container}>
      {isLoading && (
        <View>
        
          <HomeAnimation />
        </View>
      )}

      {!isLoading && <SelectLanguage />}
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
