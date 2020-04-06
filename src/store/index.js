import { readable } from 'svelte/store';
import createTodos from './todos';

export const env = readable({ ...process.env });
export const todos = createTodos();
