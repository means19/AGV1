import React, { useRef, useState, useEffect } from "react";
import todo_icon from "../assets/todo_icon.png";
import TodoItems from "./todoItems";
import { Button } from "./ui/button";

const Todo = () => {
  // State to hold the list of todos
  const [todoList, setTodoList] = useState<
    { id: number; text: string; isCompleted: boolean }[]
  >(
    // Initialize state from localStorage if available
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos")!)
      : []
  );

  // Reference to the input element
  const inputRef = useRef<HTMLInputElement>(null);

  // Function to add a new todo
  const add = () => {
    const inputText = inputRef.current?.value.trim();

    if (!inputText) {
      return null;
    }

    const newTodo = {
      id: Date.now(),
      text: inputText,
      isCompleted: false,
    };

    // Update the todo list state
    setTodoList((prev) => [...prev, newTodo]);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  // Function to delete a todo by id
  const deleteTodo = (id: number) => {
    setTodoList((prvTodos) => {
      return prvTodos.filter((todo) => todo.id !== id);
    });
  };

  // Function to toggle the completion status of a todo
  const toggle = (id: number) => {
    setTodoList((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      });
    });
  };

  // Effect to update localStorage whenever the todo list changes
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  /* Main parts */
  return (
    <div className="bg-white place-self-center w-11/12 max-w-screen-md flex flex-col p-7 min-h-[550px] rounded-xl shadow-lg">
      {/* Title */}
      <div className="flex items-center mt-7 gap-3">
        <img className="w-10" src={todo_icon} alt="To-Do Icon" />
        <h1 className="text-3xl font-semibold font-poppins text-gray-800">
          Task Assignments
        </h1>
      </div>

      {/* Input box */}
      <div className="flex items-center my-7 bg-gray-100 rounded-full shadow-md">
        <input
          ref={inputRef}
          className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-gray-500 font-poppins text-gray-700"
          type="text"
          placeholder="Add a new task..."
        />
        <Button
          onClick={add}
          className=" rounded-full h-14 w-40 font-semibold font-poppins" 
        >
          ADD +
        </Button>
      </div>

      {/* Todo list */}
      <div className="mt-4 space-y-4">
        {todoList.length > 0 ? (
          todoList.map((item, index) => (
            <TodoItems
              key={index}
              text={item.text}
              id={item.id}
              isCompleted={item.isCompleted}
              deleteTodo={deleteTodo}
              toggle={toggle}
            />
          ))
        ) : (
          <p className="text-center text-gray-500 text-lg font-poppins">
            No tasks added yet. Start by adding a new task!
          </p>
        )}
      </div>
    </div>
  );
};

export default Todo;
