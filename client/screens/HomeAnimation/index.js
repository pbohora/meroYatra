import React, { useState, useEffect } from "react";
import { StyleSheet, View, Animated, LogBox } from "react-native";

import CarSvg from "../../Svgs/CarSvg";
import theme from "../../Styles/theme.style";

LogBox.ignoreLogs([
  "Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`",
]);

const HomeAnimation = () => {
  const [animated, setAnimated] = useState(new Animated.Value(1));
  const [opacityA, setOpacityA] = useState(new Animated.Value(1));
  const [animated2, setAnimated2] = useState(new Animated.Value(0));
  const [opacityB, setOpacityB] = useState(new Animated.Value(1));

  useEffect(() => {
    Animated.stagger(3000, [
      Animated.loop(
        Animated.parallel([
          Animated.timing(animated, {
            toValue: 3,
            duration: 3000,
          }),
          Animated.timing(opacityA, {
            toValue: 0,
            duration: 3000,
          }),
        ])
      ),

      Animated.loop(
        Animated.parallel([
          Animated.timing(animated2, {
            toValue: 3,
            duration: 3000,
          }),
          Animated.timing(opacityB, {
            toValue: 0,
            duration: 3000,
          }),
        ])
      ),
    ]).start();
  }, []);

  return (
    <View style={styles.container}>
      <CarSvg style={{zIndex:100}} width="200px" height="200px" />

      <Animated.View
        style={{
          position: "absolute",
          height: 100,
          width: 100,
          borderRadius: 50,
          backgroundColor: theme.SECONDARY_COLOR,
          opacity: opacityB,
          zIndex: -1,
          transform: [{ scale: animated2 }],
        }}
      >
        <Animated.View
          style={{
            position: "absolute",
            height: 100,
            width: 100,
            borderRadius: 50,
            backgroundColor: theme.PRIMARY_COLOR,
            opacity: opacityA,
            zIndex: -1,
            transform: [
              {
                scale: animated,
              },
            ],
          }}
        ></Animated.View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
});

export default HomeAnimation;
