import ToDoItem from "./ToDoItem";

export default function ToDoList({ tasks }) {
    return (
        <ul class="todo_list">
            {tasks.map(i => <ToDoItem {...i} />)}
        </ul>
    );
}
