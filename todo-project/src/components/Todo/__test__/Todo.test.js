import { render, screen, fireEvent } from "@testing-library/react";
import Todo from "../Todo";

const addTask = (tasks) => {
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../);
    const buttonElement = screen.getByRole("button", { name: /Add/i });
    
  tasks.forEach((task) => {
    fireEvent.change(inputElement, {
      target: { value: task },
    });
    fireEvent.click(buttonElement);
  });
};

describe("Todo", () => {
  it("should render same text passed into title prop", async () => {
    render(<Todo title="todo" />);
    addTask(["Go grocery Shopping"]);
    const divElement = screen.getByText(/Go grocery Shopping/i);
    expect(divElement).toBeInTheDocument();
  });

  it("should render multiple items", async () => {
    render(<Todo title="todo" />);
    addTask([
      "Go Grocery Shopping",
      "Go Grocery Shopping",
      "Go Grocery Shopping",
    ]);
    const divElements = screen.queryAllByText(/Go Grocery Shopping/i);
    expect(divElements.length).toBe(3);
  });
    
     it("task should have complete class when clicked", async() => {
       render(<Todo title="todo" />);
     addTask(["Go Grocery Shopping"]);
     const divElement = screen.getByText(/Go Grocery Shopping/i);
     fireEvent.click(divElement);
     expect(divElement).toHaveClass("todo-item-active");
     });
});
