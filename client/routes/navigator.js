import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Easing } from "react-native";
import {
  createStackNavigator,
  TransitionPresets,
  StackCardInterpolatedStyle,
} from "@react-navigation/stack";
import SelectLanguage from "../screens/SelectLanguage";
import PhoneNumber from "../screens/PhoneNumber";
import NumberConfirmation from "../screens/NumberConfirmation";
import PersonalInformation from "../screens/PersonalInformation";

const AppStack = createStackNavigator();
const config = {
  animation: "spring",
  config: {
    stiffness: 600,
    damping: 50,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const closeConfig = {
  animation: "timing",
  config: {
    duration: 500,
    easing: Easing.linear,
  },
};

export default function Navigator() {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          gestureDirection: "horizontal",
          ...TransitionPresets.SlideFromRightIOS,
          transitionSpec: {
            open: config,
            close: closeConfig,
          },
        }}
      >
        <AppStack.Screen name="Language" component={SelectLanguage} />
        <AppStack.Screen name="Number" component={PhoneNumber} />
        <AppStack.Screen
          name="Number Confirmation"
          component={NumberConfirmation}
        />
        <AppStack.Screen name="Personal Info" component={PersonalInformation} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
