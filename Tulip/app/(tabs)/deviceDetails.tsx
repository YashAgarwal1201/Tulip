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

export default function Index() {
  const [batteryLevel, setBatteryLevel] = useState<number | null>(null);
  const [batteryState, setBatteryState] = useState<number | null>(null);

  useEffect(() => {
    async function getBatteryStatus() {
      const level = await Battery.getBatteryLevelAsync();
      const state = await Battery.getBatteryStateAsync();
      setBatteryLevel(level);
      setBatteryState(state);
    }
    getBatteryStatus();
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
    // <ScrollView style={{ backgroundColor: "yellow" }}>
    <ScrollView style={styles.deviceDetailsScreen}>
      <View style={styles.devicePosterContainer}>
        <Image
          source={{
            uri: "https://images.samsung.com/is/image/samsung/p6pim/in/sm-a065flbdins/gallery/in-galaxy-a06-sm-a065-sm-a065flbdins-thumb-543189130",
          }}
          style={styles.devicePoster}
          resizeMode="contain"
          alt="phone"
        />
        <Text style={styles.deviceTitle}>
          {Device.deviceName ? Device.deviceName : "Unknown Device"}
        </Text>
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
          <Text style={styles.infoRowTitle}>OS </Text>
          <Text style={styles.infoRowContent}>{Device.osName}</Text>
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
            Click here
          </Link>
        </View>
      </View>
    </ScrollView>
    // </ScrollView>
  );
}

const styles = StyleSheet.create({
  deviceDetailsScreen: {
    height: "100%",
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#b69743",
    padding: 12,
  },
  devicePosterContainer: {
    width: "100%",
    height: "40%",
    minHeight: 200,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#5a7620",
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
    width: "55%",
    fontSize: 32,
    color: "#112614",
  },
  infoRowContainer: {
    marginTop: 20,
    width: "100%",
    // height: "60%",
    backgroundColor: "#721211",
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
    borderBottomColor: "#112614",
    color: "#ffffff",
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
    color: "#fff",
  },
  infoRowContent: {
    width: "60%",
    color: "#fff",
  },
});
