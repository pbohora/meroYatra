import React, { useState } from "react";
import { View, StyleSheet,} from "react-native";

const Layout = ({children}) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Layout;
