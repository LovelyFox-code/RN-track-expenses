import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Container from "../common/Container";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

export default function ExpensesOutput({ expenses, expensesPeriod }) {
  const DUMMY_EXPENSES = [
    {
      id: "A123",
      description: "Groceries",
      amount: 50.01,
      date: new Date("2023-08-09"),
    },
    {
      id: "B456",
      description: "Dinner out",
      amount: 30.4,
      date: new Date("2023-08-08"),
    },
    {
      id: "C789",
      description: "Movie tickets",
      amount: 15.5,
      date: new Date("2023-08-07"),
    },
    {
      id: "D012",
      description: "Gasoline",
      amount: 40.99,
      date: new Date("2023-08-06"),
    },
    {
      id: "D855",
      description: "Book",
      amount: 40.99,
      date: new Date("2023-08-09"),
    },
    {
      id: "H234",
      description: "Fitness membership",
      amount: 80.0,
      date: new Date("2023-08-02"),
    },
    {
      id: "I567",
      description: "Electronics",
      amount: 250.0,
      date: new Date("2023-08-01"),
    },
    {
      id: "J890",
      description: "Home decor",
      amount: 90.0,
      date: new Date("2023-07-31"),
    },
  ];

  return (
    <Container>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <Text>List:</Text>
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </Container>
  );
}
const styles = StyleSheet.create({});
