import { FC } from 'react'
import TodoAdd from '../TodoAdd/TodoAdd'
import TodoList from '../TodoList/TodoList'
import './TodoApp.css'

const TodoApp:FC = () => {
  return (
    <div>
        <TodoAdd/>
        <TodoList/>
    </div>
  )
}

export default TodoApp