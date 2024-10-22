import ChatComponent from "@/components/ChatComponent/ChatComponent";
import { xl2 } from "@/constants/ViewportBreakpoints";
import { Text, View, StyleSheet, ScrollView } from "react-native";

export default function fileShare() {
  return (
    <View style={[styles.homePageScreen, { maxWidth: "auto" }]}>
      {/* <Text style={styles.text}>Coming soon!!</Text> */}
      <ChatComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  homePageScreen: {
    padding: 12,
    paddingRight: 0,
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
