import { shallow } from "zustand/shallow";
import { myStore } from "../store";
import Task from "./Task";

export default function Column({ state }) {
    const tasks = myStore((store) => {
        return store.tasks.filter(task => task.state === state);
    });

    const addTask = myStore(store => store.addTask);

    return (
        <section className="column">
            <h2 hidden aria-label="section header"></h2>

            <div className="state-container">
                <p className="cur-state">{state}</p>
                <button onClick={() => {
                    addTask(state, `abcd ${state}`)
                }}>Add</button>
            </div>

            {tasks.map(task => <Task title={task.title} key={task.title} />)}
        </section >
    )
}