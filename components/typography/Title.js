import React from "react";
import { StyleSheet, Text } from "react-native";
import { GlobalStyles } from "../common/styles";

export default function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}
const styles = StyleSheet.create({
  title: {
    color: GlobalStyles.colors.primary800,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});
