import { ChangeEvent, useReducer } from "react";

type TAction = {
  type: string;
  payload: string;
};

const initialState = {
  age: "",
  name: "",
  hobbies: [] as string[],
};

const reducer = (currentState: typeof initialState, action: TAction) => {
  switch (action.type) {
    case "appName":
      return { ...currentState, name: action.payload };
    case "updateAge":
      return { ...currentState, age: action.payload };
    case "addHobby":
      return {
        ...currentState,
        hobbies: [...currentState.hobbies, action.payload],
      };
    default:
      return currentState;
  }
};

const UserInfoElement = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const userInfo = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent form reload
    console.log("Current state:", state); // Log state here
  };

  return (
    <div>
      <form onSubmit={userInfo}>
        <input
          type="text"
          value={state.name}
          onChange={(e) =>
            dispatch({ type: "appName", payload: e.target.value })
          }
          placeholder="name"
        />
        <input
          type="number"
          value={state.age}
          onChange={(e) =>
            dispatch({ type: "updateAge", payload: e.target.value })
          }
          placeholder="age"
        />
        <input
          type="text"
          onBlur={(e) =>
            dispatch({ type: "addHobby", payload: e.target.value })
          }
          placeholder="Add a hobby"
        />
        <br />
        <button type="submit">Submit</button>
      </form>

      {/* Debug: Show current state */}
      <div>
        <h3>Current State:</h3>
        <pre>{state.name}</pre>
        <pre>{state.age}</pre>
        <pre>{state.hobbies}</pre>
      </div>
    </div>
  );
};

export default UserInfoElement;
