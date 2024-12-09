import { FormEvent, useContext, useState } from "react";
import { TodoContext } from "../context/TodoProvider";

const TodoForm = () => {
  const { state, dispatch } = useContext(TodoContext);
  const [task, setTask] = useState("");
  console.log(state);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const todo = {
      id: Math.random().toString(36).substring(2, 7),
      title: task,
      isCompleted: false,
    };
    dispatch({ type: "addTodo", payload: todo });
  };
  return (
    <div className="max-w-7xl mx-auto mt-44  ">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md max-w-sm mx-auto"
      >
        <h2 className="text-2xl font-bold text-center mb-4 text-purple-600">
          Add a Task
        </h2>
        <label htmlFor="task" className="block text-gray-700 font-medium mb-2">
          Task
        </label>
        <input
          type="text"
          id="task"
          placeholder="Enter your task"
          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-400 focus:outline-none mb-4"
          onBlur={(e) => setTask(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600 transition duration-200"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
