import { createContext, ReactNode, useReducer } from "react";

export const TodoContext = createContext<
  | {
      state: TTodo[];
      dispatch: React.Dispatch<TAction>;
    }
  | undefined
>(undefined);

export type TTodo = {
  id: number;
  title: string;
  isCompleted: boolean;
};

type TAction = {
  type: "addTodo" | "taskComplete";
  payload: TTodo | string | number;
};

const initialState: TTodo[] = [];

const typeConstants = {
  ADD_TODO: "addTodo",
  TASK_COMPLETE: "taskComplete",
};

const reducer = (currentState: TTodo[], action: TAction) => {
  switch (action.type) {
    case typeConstants.ADD_TODO:
      if (typeof action.payload === "object" && "id" in action.payload) {
        return [...currentState, action.payload as TTodo];
      }
      console.error("Invalid payload for addTodo action");
      return currentState;
    case typeConstants.TASK_COMPLETE:
      return currentState.map((task) =>
        task.id === action.payload
          ? { ...task, isCompleted: !task.isCompleted }
          : task
      );
    default:
      return currentState;
  }
};

type TodoProviderProps = {
  children: ReactNode;
};

const TodoProvider = ({ children }: TodoProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const values = {
    state,
    dispatch,
  };
  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
