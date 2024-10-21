import { Text, StyleSheet } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link, usePathname } from "expo-router";
import * as Device from "expo-device";

const styles = StyleSheet.create({
  navigationContainer: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e1e7df",
  },

  buttonStyles: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    rowGap: 8,
    flexGrow: 1,
  },

  iconStyle: {
    borderRadius: 30,
    paddingLeft: 12,
    paddingBottom: 6,
    paddingTop: 6,
    paddingRight: 12,
  },

  inactiveStyle: {
    backgroundColor: "transparent",
    color: "black",
  },
  activeStyle: {
    backgroundColor: "red",
    color: "white",
  },
});

const NavigationBar = () => {
  const pathname = usePathname();

  const getLinkStyles = (linkPath: string) => {
    return pathname === linkPath ? styles.activeStyle : styles.inactiveStyle;
  };

  return (
    // <View style={styles.navigationContainer}>
    <>
      <Link href="/" style={styles.buttonStyles}>
        <Ionicons
          name={"home"}
          size={16}
          style={[styles.iconStyle, getLinkStyles("/")]}
        />
        <Text>Home</Text>
      </Link>
      <Link href="/fileShare" style={styles.buttonStyles}>
        <Ionicons
          name={"share-social"}
          size={16}
          style={[styles.iconStyle, getLinkStyles("/fileShare")]}
        />
        <Text>File Share</Text>
      </Link>
      <Link href="/deviceDetails" style={styles.buttonStyles}>
        <Ionicons
          name={
            Device.osName?.toLowerCase() === "android"
              ? "logo-android"
              : Device.osName?.toLowerCase() === "ios"
              ? "logo-apple"
              : Device.osName?.toLowerCase() === "windows" ||
                Device.osName?.toLowerCase() === "windows phone"
              ? "logo-windows"
              : "phone-portrait"
          }
          size={16}
          style={[styles.iconStyle, getLinkStyles("/deviceDetails")]}
        />
        <Text>Device Details</Text>
      </Link>
    </>
    // </View>
  );
};

export default NavigationBar;
