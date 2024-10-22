import {
  Text,
  StyleSheet,
  Pressable,
  Linking,
  useWindowDimensions,
} from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link, usePathname, router } from "expo-router";
import * as Device from "expo-device";
import { mdl } from "@/constants/ViewportBreakpoints";
import { TulipPalette } from "@/constants/Colors";

const styles = StyleSheet.create({
  buttonStyles: {
    height: "100%",
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
    color: TulipPalette.brown,
  },
  activeStyle: {
    backgroundColor: TulipPalette.brown,
    color: TulipPalette.green,
  },

  label: {
    fontSize: 14,
    margin: "auto",
    marginTop: 4,
    color: TulipPalette.brown,
  },
});

const NavigationBar = () => {
  const pathname = usePathname();

  const { width } = useWindowDimensions();

  const getLinkStyles = (linkPath: string) => {
    return pathname === linkPath ? styles.activeStyle : styles.inactiveStyle;
  };

  const openExternalLink = async () => {
    const url = "https://yashagarwal1201.github.io/";
    await Linking.openURL(url);
  };

  return (
    <>
      <Link href="/" asChild>
        {/* <TouchableOpacity
        style={styles.buttonStyles}
        onPress={() => router.push("/")}
      > */}
        <Pressable
          style={{
            height: width < mdl ? "100%" : "auto",
            // flex: width < mdl ? 1 : 0,
            flexBasis: "auto",
            flexGrow: width < mdl ? 1 : 0,
          }}
        >
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
        <Pressable
          style={{
            height: width < mdl ? "100%" : "auto",
            // flex: width < mdl ? 1 : 0,
            flexBasis: "auto",
            flexGrow: width < mdl ? 1 : 0,
          }}
        >
          <Ionicons
            name={"chatbox"}
            size={16}
            style={[styles.iconStyle, getLinkStyles("/fileShare")]}
          />
          <Text style={styles.label}>Chat</Text>
        </Pressable>
        {/* </TouchableOpacity> */}
      </Link>
      <Link href="/deviceDetails" asChild>
        {/* <TouchableOpacity
        style={styles.buttonStyles}
        onPress={() => router.push("/deviceDetails")}
      > */}
        <Pressable
          style={{
            height: width < mdl ? "100%" : "auto",
            // flex: width < mdl ? 1 : 0,
            flexBasis: "auto",
            flexGrow: width < mdl ? 1 : 0,
          }}
        >
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

      <Pressable
        style={{
          height: width < mdl ? "100%" : "auto",
          // flex: width < mdl ? 1 : 0,
          flexBasis: "auto",
          flexGrow: width < mdl ? 1 : 0,
        }}
        onPress={openExternalLink}
      >
        <Ionicons
          name={"globe"} // You can change the icon as needed
          size={16}
          style={[styles.iconStyle, styles.inactiveStyle]}
        />
        <Text style={styles.label}>Developer</Text>
      </Pressable>
      {/* </TouchableOpacity> */}
    </>
  );
};

export default NavigationBar;
