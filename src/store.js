import { create } from "zustand";

const store = (set) => ({
    tasks: [{ title: "TestTask", state: "planned" }],
    addTask: (state, title) => set(store => ({ tasks: [...store.tasks, { state, title }] }))
});

export const myStore = create(store);