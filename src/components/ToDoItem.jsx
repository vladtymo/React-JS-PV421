export default function ToDoItem({ title, date, complete, important }) {
    return (
        <li className={complete ? "done" : ""}>
            <input type="checkbox" checked={complete} />
            {important ? <span className="important">!</span> : ""}
            {title ?? "No title"}
            <span class="deadline">01.04.2023</span>
        </li>
    );
}
