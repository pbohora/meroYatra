import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Header from "../../Components/Header";
import AppButton from "../../Components/AppButton";
import Input from "../../Components/Input";
import Layout from "../../Components/Layout";

const PhoneNumber = () => {
  const navigation = useNavigation();

  const handleInfo = () => {
    console.log("send norification")
  };

  return (
    <Layout>
      <Header headerText="Personal Information" />
      <View style={styles.buttonContainer}>
        <Input type={"text"} placeholder="Full Name"/>
        <Input type={"email"} placeholder="Email-address"/>
        <Input type={"password"} placeholder="Password"/>
        <AppButton
          buttonText="Register"
          buttonPress={handleInfo}
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
