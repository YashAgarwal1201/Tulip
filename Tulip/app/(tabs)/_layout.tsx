import { View, StyleSheet, useWindowDimensions, StatusBar } from "react-native";
import React from "react";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import { Navigator, Slot } from "expo-router";
import { TabRouter } from "@react-navigation/native";
import { mdl } from "@/constants/ViewportBreakpoints";

export default function TabLayout() {
  const { width } = useWindowDimensions();

  return (
    <View
      style={[
        styles.layoutContainer,
        { flexDirection: width < mdl ? "column-reverse" : "row" },
      ]}
    >
      <StatusBar barStyle={"dark-content"} />
      <Navigator router={TabRouter}>
        <View
          style={[
            styles.navigationBarContainer,
            {
              width: width < mdl ? "100%" : 75,
              height: width < mdl ? 75 : "100%",
              flexDirection: width < mdl ? "row" : "column",
              justifyContent: width < mdl ? "center" : "center",
              rowGap: width < mdl ? 0 : 16,
            },
          ]}
        >
          <NavigationBar />
        </View>
        <View
          style={[
            styles.pageContainer,
            { paddingTop: StatusBar.currentHeight },
          ]}
        >
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
