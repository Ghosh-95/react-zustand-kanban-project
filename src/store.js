import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

function generateId() {
    const chars = 'abcdefghijklmnopqrstuvwxyz1234567890!@#$%&+';
    let id = '';
    for (let i = 0; i < 6; i++) {
        id += chars[Math.floor(Math.random() * chars.length)];
    }
    return id;
};

const store = (set) => ({
    tasks: [],
    dragTask: null,
    addTask: (state, title, id = generateId()) => set(store => ({ tasks: [...store.tasks, { state, title, id }] }), false, "tasks/addTask"),
    deleteTask: (id) => set(store => ({ tasks: store.tasks.filter(task => task.id !== id) }), false, "tasks/deleteTask"),
    setDragTask: (id) => set({ dragTask: id }, false, "tasks/setDragTask"),
    moveTask: (id, state) => set(store => ({ tasks: store.tasks.map(task => task.id === id ? { id, state, title: task.title } : task) }), false, "tasks/moveTask")
});

export const myStore = create(persist(devtools(store), { name: "taskStore" }));