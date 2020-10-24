import React, { useState, useEffect } from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { AppLoading } from "expo";

import {useFonts, Aclonica_400Regular } from "@expo-google-fonts/aclonica";

import theme from "../../Styles/theme.style"

const Header = ({ headerText }) => {
  const [fontsLoaded]= useFonts({
    Aclonica_400Regular,
  });

  if (!fontsLoaded) {
    <AppLoading />;
  }

  return (
      <View>
    <Text
      style={{
        fontFamily: "Aclonica_400Regular",
        fontSize: theme.FONT_SIZE_HEADER,
        color: "black",
        fontWeight:theme.FONT_WEIGHT
      }}
    >
    {headerText}
    </Text>
    </View>
  );
};

export default Header;
