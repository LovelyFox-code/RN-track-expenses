import React from "react";
import { StyleSheet, View } from "react-native";
import { GlobalStyles } from "./styles";

export default function Container({ children }) {
  return <View style={styles.container}>{children}</View>;
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: GlobalStyles.colors.primary800,
  },
});
