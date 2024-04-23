import Task from "./Task";

export default function Column({ state }) {
    return (
        <section className="column">
            <h1>{state}</h1>
            <Task text={"Todo"} />
        </section >
    )
}