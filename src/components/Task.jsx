import { myStore } from "../store";

export default function Task({ data: { id } }) {
    const task = myStore(store => store.tasks.find(task => task.id === id));

    return (
        <article className="task">
            <h3>{task.title}</h3>
            <div className="status-container">
                <p className={`status-text ${task.state}`}>{task.state}</p>
            </div>
        </article>
    )
}