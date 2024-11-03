import { FC } from "react";
import { useGlobalTodo } from "../../context/TodoContext";
import ToDo from "../Todo/Todo";
import "./TodoList.css";

const TodoList:FC = () => {
  const { ListTodos } = useGlobalTodo();

  return (
    <div className="TodoList">
      {ListTodos.map((todo) => (
        <ToDo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
