import { Text, View, StyleSheet, ScrollView } from "react-native";

export default function Index() {
  return (
    <ScrollView style={styles.homePageScreen}>
      <View style={styles.container}>
        <Text style={styles.text}>Coming soon</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  homePageScreen: {
    backgroundColor: "#e1e7df",
    padding: 12,
    height: "100%",
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
