import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Header from "../../Components/Header";
import AppButton from "../../Components/AppButton";
import Input from "../../Components/Input";
import Layout from "../../Components/Layout";

const PhoneNumber = () => {
  const navigation = useNavigation();

  const handleClick = () => {
    navigation.navigate("Number Confirmation");
  };

  return (
    <Layout>
      <Header headerText="Phone Number" />
      <View style={styles.buttonContainer}>
        <Input type={"number-pad"} placeholder="9841-567890" />
        <AppButton
          buttonText="Send"
          buttonPress={handleClick}
          buttonBackgroundColor="rgba(4,16,121,1)"
          buttonColor="white"
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

export default PhoneNumber;
