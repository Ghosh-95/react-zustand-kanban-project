import { create } from "zustand";

function generateId() {
    const chars = 'abcdefghijklmnopqrstuvwxyz1234567890!@#$%&+';
    let id = '';
    for (let i = 0; i < 6; i++) {
        id += chars[Math.floor(Math.random() * chars.length)];
    }
    return id;
};

const store = (set) => ({
    tasks: [{ title: "TestTask", state: "planned", id: generateId() }],
    addTask: (state, title, id = generateId()) => set(store => ({ tasks: [...store.tasks, { state, title, id }] })),
    deleteTask: (id) => set(store => ({ tasks: store.tasks.filter(task => task.id !== id) })),
});

export const myStore = create(store);