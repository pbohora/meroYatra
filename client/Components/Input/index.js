import React, { useState } from "react";
import { TextInput } from "react-native";

const Input = ({ type, placeholder }) => {
  const [value, onChangeText] = useState("");

  return (
    <TextInput
      style={{
        height: 60,
        borderColor: "gray",
        borderWidth: 1,
        paddingHorizontal: 16,
        borderRadius: 12,
        marginVertical: 10,
        fontSize: 18,
        textAlign:"center"
      }}
      onChangeText={(text) => onChangeText(text)}
      value={value}
      keyboardType={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
