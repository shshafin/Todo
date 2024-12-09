import { useContext } from "react";
import { TodoContext, TTodo } from "../context/TodoProvider";

const TodoList = () => {
  const { state, dispatch } = useContext(TodoContext);
  return (
    <div className="bg-gray-50 p-4 rounded-lg shadow-md max-w-md mx-auto my-7">
      {state.map((task: TTodo) => (
        <div
          key={task.id}
          className={`flex items-center justify-between p-3 mb-2 rounded-md cursor-pointer ${
            task.isCompleted
              ? "bg-green-100 border border-green-300 line-through text-gray-500"
              : "bg-white border border-gray-300 hover:bg-gray-100"
          }`}
          onClick={() => dispatch({ type: "taskComplete", payload: task.id })}
        >
          <span className="font-medium">{task.title}</span>
          {task.isCompleted && (
            <span className="text-green-600 text-sm font-semibold">
              Completed
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
