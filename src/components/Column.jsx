import { shallow } from "zustand/shallow";
import { myStore } from "../store";
import Task from "./Task";
import { useState } from "react";

export default function Column({ state }) {
    const [title, setTitle] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [drop, setDrop] = useState(false);

    const tasks = myStore((store) => {
        return store.tasks.filter(task => task.state === state);
    });

    const addTask = myStore(store => store.addTask);
    const setDragTask = myStore(store => store.setDragTask);
    const draggedTask = myStore(store => store.dragTask);
    const moveTask = myStore(store => store.moveTask);

    return (
        <section className={`column ${drop ? 'drop' : ''}`}
            onDragOver={(e) => {
                e.preventDefault();
                setDrop(true);
            }}

            onDragLeave={(e) => {
                e.preventDefault();
                setDrop(false);
            }}

            onDrop={() => {
                setDrop(false);
                moveTask(draggedTask, state);
                setDragTask(null);
            }}
        >
            <h2 hidden aria-label="section header"></h2>

            <div className="state-container">
                <p className="cur-state">{state}</p>
                <button onClick={() => setIsOpen(true)}>Add</button>
            </div>

            {tasks && tasks.map(task => <Task data={task} key={task.id} />)}

            {isOpen && <article className="modal">
                <form id="modal-items">
                    <input type="text" name="task-input" value={title} onChange={e => setTitle(e.target.value)} />
                    <button onClick={(e) => {
                        e.preventDefault();
                        addTask(state, title);
                        setTitle('');
                        setIsOpen(false);
                    }}>Submit</button>
                </form>
            </article>}
        </section >
    )
}