import { View, StyleSheet, useWindowDimensions } from "react-native";
import React from "react";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import { Navigator, Slot } from "expo-router";
import { TabRouter } from "@react-navigation/native";
import { md, xl2 } from "@/constants/ViewportBreakpoints";

export default function TabLayout() {
  const { width } = useWindowDimensions();

  return (
    <View
      style={[
        styles.layoutContainer,
        { flexDirection: width < xl2 ? "column-reverse" : "row" },
      ]}
    >
      <Navigator router={TabRouter}>
        <View
          style={[
            styles.navigationBarContainer,
            { width: width < xl2 ? "100%" : 75 },
            { height: width < xl2 ? 75 : "100%" },
            { flexDirection: width < xl2 ? "row" : "column" },
            { justifyContent: width < md ? "space-evenly" : "flex-start" },
          ]}
        >
          <NavigationBar />
        </View>
        <View style={styles.pageContainer}>
          <Slot />
        </View>
      </Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  layoutContainer: {
    flex: 1,
    backgroundColor: "#e1e7df",
  },

  navigationBarContainer: {
    // width: "100%",
    // height: 100,
    gap: 8,
    alignItems: "center",
  },

  pageContainer: {
    flexGrow: 1,
  },
});
