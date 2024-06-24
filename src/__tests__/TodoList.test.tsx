import { render, screen } from "@testing-library/react";
import TodoList from "../components/TodoList";
import { Todo } from "../schemas/types";

const todos: Todo[] = [
  { id: 1, description: "Test Todo 1", completed: false },
  { id: 2, description: "Test Todo 2", completed: true },
];

test("renders list of todos", () => {
  render(<TodoList todos={todos} toggleTodo={() => {}} />);

  const todoItems = screen.getAllByRole("checkbox");
  expect(todoItems.length).toBe(2);
});
