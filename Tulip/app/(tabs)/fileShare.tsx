import { Text, View, StyleSheet, ScrollView } from "react-native";

export default function fileShare() {
  return (
    <View style={styles.homePageScreen}>
      <View style={styles.container}>
        <Text style={styles.text}>Coming soon!!</Text>
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
    backgroundColor: "#d36bb6",
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 30,
    margin: "auto",
  },
  text: {
    color: "#000",
  },
});
