import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoInput from "../components/TodoInput";

test("renders input and button", () => {
  render(<TodoInput addTodo={() => {}} />);

  const inputElement = screen.getByPlaceholderText(/add new todo/i);
  const buttonElement = screen.getByText(/add todo/i);

  expect(inputElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
});

test("allows user to add a new todo", () => {
  const addTodo = jest.fn();
  render(<TodoInput addTodo={addTodo} />);

  const inputElement = screen.getByPlaceholderText(/add new todo/i);
  const buttonElement = screen.getByText(/add todo/i);

  fireEvent.change(inputElement, { target: { value: "New Todo" } });
  fireEvent.click(buttonElement);

  expect(addTodo).toHaveBeenCalledWith("New Todo");
});
