import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import CarSvg from "../../Svgs/CarSvg";

const Layout = ({ children }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>{children}</View>
      <View
        style={{
          width: "100%",
          height: 120,
          justifyContent: "center",
          alignItems: "center",
          position: "absolute", //Here is the trick
          bottom: 32,
        }}
      >
        <CarSvg width="800px" height="750px" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    top: "20%",
    alignItems: "center",
    zIndex: 2,
    width: "100%",
    height: "100%",
  },
});

export default Layout;
