import React, { useState } from "react";
import { Text, TouchableOpacity } from "react-native";

import { AppLoading } from "expo";

import {
  useFonts,
  ABeeZee_400Regular,
  ABeeZee_400Regular_Italic,
} from "@expo-google-fonts/abeezee";

import theme from "../../Styles/theme.style";

const AppButton = ({
  buttonText,
  buttonBackgroundColor,
  buttonPress,
  buttonColor,
}) => {
  const [fontsLoaded] = useFonts({
    ABeeZee_400Regular,
    ABeeZee_400Regular_Italic,
  });

  if (!fontsLoaded) {
    <AppLoading />;
  }

  return (
    <TouchableOpacity
      style={{
        alignItems: "center",
        marginVertical: 12,
        width: 320,
        backgroundColor: buttonBackgroundColor,
        justifyContent: "center",
        height: 60,
        borderRadius: 12,
      }}
      onPress={buttonPress}
    >
      <Text
        style={{
          fontFamily: "ABeeZee_400Regular",
          fontSize: theme.FONT_SIZE_Normal,
          fontWeight: theme.FONT_WEIGHT,
          color: buttonColor,
        }}
      >
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
};

export default AppButton;
