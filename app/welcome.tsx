import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Welcome() {
  const { name, password, gender } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome, {name}!</Text>
      <Text style={styles.subText}>Password: {password}</Text>
      <Text style={styles.subText}>Gender: {gender}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 26,
    fontWeight: "bold",
  },
  subText: {
    fontSize: 18,
    marginTop: 10,
    color: "#555",
  },
});
