import { render, screen, fireEvent } from "@testing-library/react";
import TodoItem from "../components/TodoItem";
import { Todo } from "../schemas/types";

const todo: Todo = {
  id: 1,
  description: "Test Todo",
  completed: false,
};

test("renders todo item", () => {
  render(<TodoItem todo={todo} toggleTodo={() => {}} />);

  const checkbox = screen.getByRole("checkbox");
  const description = screen.getByText(/test todo/i);

  expect(checkbox).toBeInTheDocument();
  expect(description).toBeInTheDocument();
});

test("allows user to toggle todo", () => {
  const toggleTodo = jest.fn();
  render(<TodoItem todo={todo} toggleTodo={toggleTodo} />);

  const checkbox = screen.getByRole("checkbox");
  fireEvent.click(checkbox);

  expect(toggleTodo).toHaveBeenCalledWith(todo.id);
});
