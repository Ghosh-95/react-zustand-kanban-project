import { myStore } from "../store";

export default function Task({ title }) {
    const task = myStore(store => store.tasks.find(task => task.title === title));

    return (
        <article className="task">
            <h3>{task.title}</h3>
            <div className="status-container">
                <p className={`status-text ${task.state}`}>{task.state}</p>
            </div>
        </article>
    )
}