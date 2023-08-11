import React from "react";
import { StyleSheet, Text } from "react-native";
import { GlobalStyles } from "../common/styles";

export default function Subtitle({ children }) {
  return <Text style={styles.subtitle}>{children}</Text>;
}
const styles = StyleSheet.create({
  subtitle: {
    color: GlobalStyles.colors.primary800,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    padding: 7,
  },
});
