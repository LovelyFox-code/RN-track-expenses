import React from "react";
import { FlatList, StyleSheet, Text } from "react-native";
import ExpenseItem from "./ExpenseItem";
const renderExpenseItem = (itemData) => {
  return (
    <ExpenseItem
      //   description={itemData.item.description}
      //   amount={itemData.item.amount}
      //   date={itemData.item.data}
      {...itemData.item}
    />
  );
};
export default function ExpensesList({ expenses }) {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
}
const styles = StyleSheet.create({
  item: {
    color: "white",
    fontSize: 15,
    padding: 3,
  },
});
