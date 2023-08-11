import React from "react";
import { Text, View } from "react-native";
import ExpensesOutput from "../components/expensesOutput/ExpensesOutput";

export default function RecentExpenses() {
  return <ExpensesOutput expensesPeriod="Last 7 Days" />;
}
