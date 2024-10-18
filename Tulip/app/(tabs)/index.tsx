import { Text, View, StyleSheet, ScrollView } from "react-native";

export default function Index() {
  return (
    <ScrollView style={styles.homePageScreen}>
      <Text style={styles.text}></Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  homePageScreen: {
    backgroundColor: "#e1e7df",
  },
  container: {
    flex: 1,
    backgroundColor: "#b69743",
  },
  text: {
    color: "teal",
  },
});
