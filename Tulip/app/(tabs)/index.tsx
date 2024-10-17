import { Text, View, StyleSheet } from "react-native";
import * as Device from "expo-device";

export default function Index() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={styles.text}>
        {Device.manufacturer}: {Device.modelName} ({Device.deviceName}) gdgty
      </Text>
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
  text: {
    color: "teal",
  },
});
