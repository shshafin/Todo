import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoProvider from "./context/TodoProvider";

function App() {
  return (
    <TodoProvider>
      <div>
        <TodoForm></TodoForm>
        <TodoList></TodoList>
      </div>
    </TodoProvider>
  );
}

export default App;
