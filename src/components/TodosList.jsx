import TodoItem from './TodoItem'
const TodosList = ({todosProps}) => {
    return (
        <ul>
            {todosProps.map((todo)=>{
                return <TodoItem key={todo.id} itemProp={todo} />
            })}
        </ul>
    )
};
export default TodosList;