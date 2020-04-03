import { writable, readable } from 'svelte/store';

export const todos = writable([]);

export const env = readable({ ...process.env });
