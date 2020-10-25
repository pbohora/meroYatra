import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import Header from "../../Components/Header";
import AppButton from "../../Components/AppButton";
import Input from "../../Components/Input";
import Layout from "../../Components/Layout";

const PhoneNumber = () => {
  const navigation = useNavigation();

  const handleInfo = () => {
    console.log("send norification");
  };

  return (
    <Layout>
      <KeyboardAwareScrollView
        resetScrollToCoords={{ x: 0, y: 0 }}
        contentContainerStyle={styles.container}
        scrollEnabled={true}
      >
        <Header headerText="Personal Information" />
        <View style={styles.buttonContainer}>
          <Input type={"default"} placeholder="Full Name" />
          <Input type={"email-address"} placeholder="Email-address" />
          <Input type={"default"} placeholder="Password" />
          <AppButton
            buttonText="Register"
            buttonPress={handleInfo}
            buttonBackgroundColor="rgba(4,16,121,1)"
            buttonColor="white"
          />
        </View>
      </KeyboardAwareScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  buttonContainer: {
    marginTop: 37,
  },
});

export default PhoneNumber;
