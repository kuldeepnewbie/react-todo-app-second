import { useState } from "react";
import InputTodo from "./InputTodo";
import TodosList from "./TodosList";
import { v4 as uuidv4 } from "uuid";
const TodosLogic = () => {
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: 'Setup development environment',
            completed: true,
        },
        {
            id: 2,
            title: 'Develop website and add content',
            completed: false,
        },
        {
            id: 3,
            title: 'Deploy to live server',
            completed: false,
        },
    ])
    const handleChange = (id) => {
        console.log("Checkbox clicked for ID:", id);  // Logs the ID passed to handleChange
        setTodos((prevState) => {
            return prevState.map((todo) => {
                if (todo.id == id) {
                    return {
                        ...todo,
                        completed: !todo.completed,
                    };
                }
                return todo;
            })
        })
    }

    const addTodoItem = (title)=>{
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false,
          };
          setTodos([...todos, newTodo]);
    }
    const deleteTodo = (id) => {
        setTodos(
            [...todos.filter((ele) => {
                return ele.id !== id
            })]
        )
    }
    return (
        <div>
            <InputTodo addTodoItem={addTodoItem} />
            <TodosList todosProps={todos} handleChange={handleChange} deleteTodo={deleteTodo} />
        </div>
    )
}
export default TodosLogic;
