import ChatComponent from "@/components/ChatComponent/ChatComponent";
import { Text, View, StyleSheet, ScrollView } from "react-native";

export default function fileShare() {
  return (
    <View style={styles.homePageScreen}>
      <View style={styles.container}>
        {/* <Text style={styles.text}>Coming soon!!</Text> */}
        <ChatComponent />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  homePageScreen: {
    padding: 12,
    flex: 1,
  },
  container: {
    width: "100%",
    height: "100%",
  },
  text: {
    color: "#000",
  },
});
