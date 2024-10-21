import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  PixelRatio,
  ScrollView,
} from "react-native";
import * as Device from "expo-device";
import * as Battery from "expo-battery";
import React, { useState, useEffect } from "react";
import { Link } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TulipPalette } from "@/constants/Colors";
import { xl2 } from "@/constants/ViewportBreakpoints";

export default function Index() {
  const [batteryLevel, setBatteryLevel] = useState<number | null>(null);
  const [batteryState, setBatteryState] = useState<number | null>(null);
  const [deviceType, setDeviceType] = useState<string | null>(null);

  useEffect(() => {
    async function getBatteryStatus() {
      const level = await Battery.getBatteryLevelAsync();
      const state = await Battery.getBatteryStateAsync();
      setBatteryLevel(level);
      setBatteryState(state);
    }

    async function getDeviceInfo() {
      const type = await Device.getDeviceTypeAsync();
      setDeviceType(
        type === Device.DeviceType.PHONE
          ? "Mobile"
          : type === Device.DeviceType.TABLET
          ? "Tablet"
          : type === Device.DeviceType.DESKTOP
          ? "Desktop"
          : "Unknown"
      );
    }

    getBatteryStatus();
    getDeviceInfo();
  }, []);

  // Get device screen width and height
  const { width, height } = Dimensions.get("window");

  const pixelRatio = PixelRatio.get();

  // Calculate the true resolution
  const trueWidth = Math.round(width * pixelRatio);
  const trueHeight = Math.round(height * pixelRatio);

  // Get battery state description
  const batteryStateDesc =
    batteryState === Battery.BatteryState.CHARGING
      ? "Charging"
      : batteryState === Battery.BatteryState.FULL
      ? "Full"
      : batteryState === Battery.BatteryState.UNPLUGGED
      ? "Unplugged"
      : "Unknown";

  return (
    // <TabLayout>
    <ScrollView
      style={[styles.deviceDetailsScreen, { maxWidth: xl2 }]}
      contentContainerStyle={{ justifyContent: "flex-start" }}
    >
      <View style={styles.deviceDetailsHeader}>
        <Text style={styles.deviceDetailsHeaderContent}>Device Details</Text>
      </View>
      <View style={styles.devicePosterContainer}>
        <Image
          source={{
            uri: "https://images.samsung.com/is/image/samsung/p6pim/in/sm-a065flbdins/gallery/in-galaxy-a06-sm-a065-sm-a065flbdins-thumb-543189130",
          }}
          style={styles.devicePoster}
          resizeMode="contain"
          alt="phone"
        />
        <View style={styles.deviceTitle}>
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
            size={32}
            style={{ color: TulipPalette.green }}
          />
          <Text style={{ fontSize: 26, color: TulipPalette.green }}>
            {Device.deviceName ? Device.deviceName : "Unknown Device"}
          </Text>
        </View>
      </View>

      <View style={styles.infoRowContainer}>
        <View style={styles.infoRow}>
          <Text style={styles.infoRowTitle}>Manufacturer </Text>
          <Text style={styles.infoRowContent}>
            {Device.manufacturer ? Device.manufacturer : "NA"}
          </Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.infoRowTitle}>Device Model </Text>
          <Text style={styles.infoRowContent}>
            {Device.modelName ? Device.modelName : "Unknown"}
          </Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.infoRowTitle}>Device Type </Text>
          <Text style={styles.infoRowContent}>{deviceType}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.infoRowTitle}>OS </Text>
          <Text style={styles.infoRowContent}>
            {Device.osName} {Device.osVersion}
          </Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.infoRowTitle}>Screen Resolution</Text>
          <Text
            style={styles.infoRowContent}
          >{`${trueWidth} x ${trueHeight} px`}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.infoRowTitle}>Battery Level </Text>
          <Text style={styles.infoRowContent}>
            {batteryLevel !== null
              ? `${(batteryLevel * 100).toFixed(0)}%`
              : "Loading..."}{" "}
            ({batteryStateDesc ? batteryStateDesc : "NA"})
          </Text>
        </View>

        <View style={styles.lastInfoRow}>
          <Text style={styles.infoRowTitle}>More Info</Text>
          <Link
            style={styles.infoRowContent}
            href={"https://www.gsmarena.com/"}
            target="_blank"
          >
            Click here <Ionicons name="link" />
          </Link>
        </View>
      </View>
    </ScrollView>
    // </TabLayout>
  );
}

const styles = StyleSheet.create({
  deviceDetailsScreen: {
    minHeight: "100%",
    flex: 1,
    padding: 12,
    // alignItems: "flex-start",
    // overflow: "scroll",
  },
  deviceDetailsHeader: {
    height: 70,
  },
  deviceDetailsHeaderContent: {
    fontSize: 28,
    marginTop: "auto",
    marginBottom: "auto",
    color: TulipPalette.pink,
  },
  devicePosterContainer: {
    width: "100%",
    // height: "40%",
    minHeight: 200,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: "#d36bb6",
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 30,
  },
  devicePoster: {
    // maxWidth: "45%",
    // minWidth: 200,
    width: "45%",
    height: "100%",
    alignItems: "flex-end",
  },
  deviceTitle: {
    paddingTop: 24,
    width: "55%",
    fontSize: 32,
    color: TulipPalette.lightGreen,
  },
  infoRowContainer: {
    marginTop: 20,
    width: "100%",
    // height: "60%",
    backgroundColor: "#f8aef4",
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 30,
    justifyContent: "center",
  },
  infoRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 12,
    paddingBottom: 12,
    fontSize: 14,
    // borderRadius: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#744c4c",
    color: "#000",
    width: "100%",
  },
  lastInfoRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 12,
    paddingBottom: 12,
    fontSize: 14,
    width: "100%",
    borderBottomWidth: 0,
  },
  infoRowTitle: {
    width: "40%",
    textTransform: "capitalize",
    color: "#000",
  },
  infoRowContent: {
    paddingLeft: 8,
    width: "60%",
    color: "#000",
    flexDirection: "row",
    alignItems: "center",
  },
});
