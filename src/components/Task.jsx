import { myStore } from "../store";

export default function Task({ data: { id } }) {
    const task = myStore(store => store.tasks.find(task => task.id === id));

    const deleteTask = myStore(store => store.deleteTask);
    const setDragTask = myStore(store => store.setDragTask);

    return (
        <article className="task" draggable onDragStart={() => setDragTask(id)}>
            <h3>{task.title}</h3>
            <div className="status-container">
                <p className={`status-text ${task.state}`}>{task.state}</p>
                <button onClick={() => deleteTask(id)}>X</button>
            </div>
        </article>
    )
}