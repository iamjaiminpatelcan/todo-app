import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

test("renders todo app header", () => {
  render(<App />);

  const headerElement = screen.getByText(/todo list/i);
  expect(headerElement).toBeInTheDocument();
});

test("allows user to add and toggle todos", () => {
  render(<App />);

  const inputElement = screen.getByPlaceholderText(/add new todo/i);
  const buttonElement = screen.getByText(/add todo/i);

  // Add a new todo
  fireEvent.change(inputElement, { target: { value: "New Todo" } });
  fireEvent.click(buttonElement);

  // Check if the new todo is added
  const todoItem = screen.getByText(/new todo/i);
  expect(todoItem).toBeInTheDocument();

  // Toggle the todo item
  const checkbox = screen.getByRole("checkbox");
  fireEvent.click(checkbox);

  // Check if the todo item is marked as completed
  expect(todoItem).toHaveStyle("text-decoration: line-through");
});
