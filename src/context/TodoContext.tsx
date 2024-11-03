import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";
import { Todo, Stats } from "../type/type";
import { v4 as uuidv4 } from "uuid";

interface TodoProviderProps {
  children: ReactNode;
}

interface ContextProps {
  ListTodos: Todo[];
  formData: Todo;
  setFormData: React.Dispatch<React.SetStateAction<Todo>>;
  AddTodo: () => void;
  DeleteTodo: (id: string) => void;
  UpdateStatsTodo: (id: string) => void;
}

const TodoContext = createContext<ContextProps>({
  ListTodos: [],
  formData: { todo: "", stats: Stats.notDone },
  setFormData: () => {},
  AddTodo: () => {},
  DeleteTodo: () => {},
  UpdateStatsTodo: () => {},
});

const TodoProvider: FC<TodoProviderProps> = ({ children }) => {
  const [ListTodos, setListTodos] = useState<Todo[]>([]);
  const [formData, setFormData] = useState<Todo>({
    todo: "",
    stats: Stats.notDone,
  });

  useEffect(() => {
    const getStoredTodos = () => {
      const storedTodos = localStorage.getItem("todos");
      setListTodos(storedTodos ? JSON.parse(storedTodos) : []);
    };
    getStoredTodos();
  }, []);

  const AddTodo = () => {
    if (formData.todo) {
      const newTodo = { ...formData, id: uuidv4() };
      const updatedTodos = [...ListTodos, newTodo];
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      setListTodos(updatedTodos);
      setFormData({ todo: "", stats: Stats.notDone });
    }
  };

  const DeleteTodo = (id: string) => {
    const updatedTodos = ListTodos.filter((todo) => todo.id !== id);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setListTodos(updatedTodos);
  };

  const UpdateStatsTodo = (id: string) => {
    const updatedTodos = ListTodos.map((todo) =>
      todo.id === id
        ? {
            ...todo,
            stats: todo.stats === Stats.notDone ? Stats.Done : Stats.notDone,
          }
        : todo
    );
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setListTodos(updatedTodos);
  };

  return (
    <TodoContext.Provider
      value={{
        ListTodos,
        formData,
        setFormData,
        AddTodo,
        DeleteTodo,
        UpdateStatsTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useGlobalTodo = () => {
  return useContext(TodoContext);
};

export { TodoContext, TodoProvider };
