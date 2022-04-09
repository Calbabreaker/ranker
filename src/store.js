import { get, writable } from "svelte/store";

export const items = writable(JSON.parse(localStorage.getItem("items")) ?? []);

items.subscribe((items) => {
    items.sort((a, b) => b.elo - a.elo);
    localStorage.setItem("items", JSON.stringify(items));
});

export function addItem(name) {
    items.set([
        ...get(items),
        {
            name,
            elo: 1500,
        },
    ]);
}

export function deleteItem(i) {
    get(items).splice(i, 1);
    items.set(get(items));
}
