import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Header from "../../Components/Header";
import AppButton from "../../Components/AppButton";
import Layout from "../../Components/Layout";

const SelectLanguage = () => {
  const navigation = useNavigation();

  const [buttonBackgroundColor, setButtonBackgroundColor] = useState("none");
  const [buttonColor, setButtonColor] = useState("rgba(4,16,121,1)");
  const [buttonBackgroundColorNep, setButtonBackgroundColorNep] = useState(
    "none"
  );
  const [buttonColorNep, setBUttonColorNep] = useState("rgba(4,16,121,1)");

  const buttonPressEnglish = () => {
    setButtonBackgroundColor("rgba(4,16,121,1)");
    setButtonColor("white");
    setButtonBackgroundColorNep("transparent");
    setBUttonColorNep("rgba(4,16,121,1)");
    navigation.navigate("Number");
  };

  const buttonPressNepali = () => {
    setButtonBackgroundColorNep("rgba(4,16,121,1)");
    setBUttonColorNep("white");
    setButtonBackgroundColor("transparent");
    setButtonColor("rgba(4,16,121,1)");
    navigation.navigate("Number");
  };

  return (
    <Layout>
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
    </Layout>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 37,
  },
});

export default SelectLanguage;
