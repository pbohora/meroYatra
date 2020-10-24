import React, { useState } from "react";
import { View, Image, StyleSheet, Text, ImageBackground } from "react-native";

import Header from "../Header";
import AppButton from "../AppButton";

import theme from "../../Styles/theme.style";

const SelectLanguage = () => {
  const [buttonBackgroundColor, setButtonBackgroundColor] = useState("none");
  const [buttonColor, setBUttonColor] = useState("rgba(4,16,121,1)");
  const [buttonBackgroundColorNep, setButtonBackgroundColorNep] = useState("none");
  const [buttonColorNep, setBUttonColorNep] = useState("rgba(4,16,121,1)");

  const buttonPressEnglish = () => {
    setButtonBackgroundColor("rgba(4,16,121,1)");
    setBUttonColor("white");
  };

  const buttonPressNepali=()=>{
    setButtonBackgroundColorNep("rgba(4,16,121,1)");
    setBUttonColorNep("white");
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Header headerText="Select Language" />
        <View style={styles.buttonContainer}>
          <AppButton
            buttonText="Nepali"
            buttonPress={buttonPressNepali}
            buttonBackgroundColor={buttonBackgroundColorNep}
            buttonColor={buttonColorNep}
          />
           <AppButton
            buttonText="English"
            buttonPress={buttonPressEnglish}
            buttonBackgroundColor={buttonBackgroundColor}
            buttonColor={buttonColor}
          />
        </View>
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

  selectText: {
    fontSize: theme.FONT_SIZE_HEADER,
    color: "#000000",
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    marginTop: 37,
  },
  buttons: {
    fontSize: 320,
    paddingVertical: 160,
  },
});

export default SelectLanguage;
