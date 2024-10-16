import { useState } from "react";
const InputTodo = ({ addTodoItem }) => {
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const handleChange = (e) => {
        setTitle(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim()) {
            addTodoItem(title)
            setTitle('')
            setMessage('');
        } else {
            setMessage('Please add item.');
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit} className="form-container">
                <input type="text" className="input-text" placeholder="add todo" value={title} onChange={handleChange} />
                <button className="input-submit">
                    Submit
                </button>
            </form>
            <span className="submit-warning">{message}</span>
        </>
    )
}
export default InputTodo;