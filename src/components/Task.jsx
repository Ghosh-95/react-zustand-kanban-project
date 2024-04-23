const status = "ongoing";

export default function Task({ text }) {
    return (
        <article className="task">
            <h3>{text}</h3>
            <div className="status-container">
                <p className={`status-text ${status}`}>{status}</p>
            </div>
        </article>
    )
}