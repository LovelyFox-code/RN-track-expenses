import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Container from "../common/Container";
import { GlobalStyles } from "../common/styles";
import Subtitle from "../typography/Subtitle";
import Title from "../typography/Title";

export default function ExpensesSummary({ expenses, periodName }) {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);
  return (
    <View style={styles.container}>
      <Subtitle>{periodName}</Subtitle>
      <Title>€{expensesSum.toFixed(2)}</Title>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.primary50,
    borderRadius: 8,
    padding: 8,
  },
});
