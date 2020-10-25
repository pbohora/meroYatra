import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SelectLanguage from "../screens/SelectLanguage";
import PhoneNumber from "../screens/PhoneNumber"
import NumberConfirmation from "../screens/NumberConfirmation"
import PersonalInformation from "../screens/PersonalInformation"

const AppStack = createStackNavigator();
export default function Navigator() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown:false}}>
        <AppStack.Screen name="Language" component={SelectLanguage} />
        <AppStack.Screen name="Number" component={PhoneNumber} />
        <AppStack.Screen name="Number Confirmation" component={NumberConfirmation} />
        <AppStack.Screen name="Personal Info" component={PersonalInformation} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
