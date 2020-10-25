import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Header from "../../Components/Header";
import ConfirmationInput from "../../Components/ConfirmationInput";
import Layout from "../../Components/Layout";

const PhoneNumber = () => {
  const [cellValue, setCellValue] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    if (cellValue.length === 4) {
      navigation.navigate("Personal Info");
    }
  }, [cellValue]);

  const getCellValue = (value) => {
    setCellValue(value);
  };

  cellValue && console.log(cellValue);

  return (
    <Layout>
      <Header headerText="Code Confirmation" />
      <View style={styles.buttonContainer}>
        <ConfirmationInput getCellValue={getCellValue} />
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
