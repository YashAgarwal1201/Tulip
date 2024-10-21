import { Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link, usePathname, router } from "expo-router";
import * as Device from "expo-device";

const styles = StyleSheet.create({
  buttonStyles: {
    height: "100%",
    flex: 1,
    // display: "flex",
    // flexDirection: "column",
    // flexWrap: "wrap",
    // justifyContent: "center",
    // alignItems: "center",
    // rowGap: 8,
    flexGrow: 1,
  },

  iconStyle: {
    // height: 28,
    margin: "auto",
    borderRadius: 30,
    paddingLeft: 14,
    paddingBottom: 6,
    paddingTop: 6,
    paddingRight: 14,
    marginBottom: 4,
  },

  inactiveStyle: {
    backgroundColor: "transparent",
    color: "black",
  },
  activeStyle: {
    backgroundColor: "red",
    color: "white",
  },

  label: {
    fontSize: 14,
    margin: "auto",
    marginTop: 4,
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
      <Link href="/" asChild>
        {/* <TouchableOpacity
        style={styles.buttonStyles}
        onPress={() => router.push("/")}
      > */}
        <Pressable style={styles.buttonStyles}>
          <Ionicons
            name={"home"}
            size={16}
            style={[styles.iconStyle, getLinkStyles("/")]}
          />
          <Text style={styles.label}>Home</Text>
        </Pressable>
        {/* </TouchableOpacity> */}
      </Link>
      <Link href="/fileShare" asChild>
        {/* <TouchableOpacity
        style={styles.buttonStyles}
        onPress={() => router.push("/fileShare")}
      > */}
        <Pressable style={styles.buttonStyles}>
          <Ionicons
            name={"share-social"}
            size={16}
            style={[styles.iconStyle, getLinkStyles("/fileShare")]}
          />
          <Text style={styles.label}>File Share</Text>
        </Pressable>
        {/* </TouchableOpacity> */}
      </Link>
      <Link href="/deviceDetails" asChild>
        {/* <TouchableOpacity
        style={styles.buttonStyles}
        onPress={() => router.push("/deviceDetails")}
      > */}
        <Pressable style={styles.buttonStyles}>
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
          <Text style={styles.label}>Device</Text>
        </Pressable>
      </Link>
      {/* </TouchableOpacity> */}
    </>
    // </View>
  );
};

export default NavigationBar;
