import { FC } from "react";
import { ButtonsType, Todo } from "../../type/type";
import { useGlobalTodo } from "../../context/TodoContext";
import GenericButton from "../GenericButton/GenericButton";
import "./Todo.css";

interface TodoProps {
  todo: Todo;
 
}

const ToDo: FC<TodoProps> = ({ todo}) => {
  const { DeleteTodo, UpdateStatsTodo } = useGlobalTodo();

  return (
    <div className="Todo">  
        <GenericButton btnText={todo.stats} btnStyle={ButtonsType.Update} onClickBtn={() => UpdateStatsTodo(todo.id!)} />
        <p className="todoText">{todo.todo}</p>
        <GenericButton btnText="Delete" btnStyle={ButtonsType.Delete} onClickBtn={() => DeleteTodo(todo.id!)}/>
    </div>
  );
};

export default ToDo;
