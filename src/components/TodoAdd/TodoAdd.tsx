import { ChangeEvent, FC, FormEvent } from 'react';
import { useGlobalTodo } from '../../context/TodoContext';
import './TodoAdd.css';

const TodoAdd: FC = () => {
    const { formData, setFormData, AddTodo } = useGlobalTodo();

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        AddTodo();
    };

    return (
        <div className="TodoAdd">
            <form onSubmit={handleSubmit}>
                <label className='label'>
                    Add Todo: 
                    <input
                        className='inputTodo'
                        type="text"
                        name="todo"
                        value={formData.todo}
                        onChange={handleChange}
                    />
                </label>
                <button className='btnAdd' type="submit">Add</button>
            </form>
        </div>
    );
};

export default TodoAdd;
