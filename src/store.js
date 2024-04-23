import { create } from "zustand";

const store = (set) => ({
    tasks: [{ title: "TestTask", state: "Planned" }],
});

export const myStore = create(store);