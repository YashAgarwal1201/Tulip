import { Text, View, StyleSheet, Image } from "react-native";
import * as Device from "expo-device";

export default function Index() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={styles.devicePosterContainer}>
        <Image
          source={{
            uri: "https://images.samsung.com/is/image/samsung/p6pim/in/sm-a065flbdins/gallery/in-galaxy-a06-sm-a065-sm-a065flbdins-thumb-543189130",
          }}
          style={{ width: 200, height: 200 }} // Adjust size as needed
          resizeMode="contain"
          alt="phone"
        />
        <Text style={styles.h2}>
          {Device.deviceName ? Device.deviceName : "Unknown Device"}
        </Text>
      </View>

      <View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text>Manufacturer</Text>
          <Text>{Device.manufacturer ? Device.manufacturer : "NA"}</Text>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text>Device Model</Text>
          <Text>{Device.modelName ? Device.modelName : "Unkown"}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  devicePosterContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "teal",
  },
  h2: {
    fontSize: 32,
    color: "teal",
  },
});
