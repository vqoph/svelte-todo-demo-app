import { writable } from 'svelte/store';
import xhr from '../lib/xhr';

export default function createTodos() {
  const { subscribe, set, update: updateStore } = writable([]);
  const { APP_API_URL } = process.env;

  let todos;
  subscribe((value) => (todos = value));

  return {
    subscribe,

    async fetchList() {
      const req = await xhr(APP_API_URL + '/todos');
      const items = await req.json();
      updateStore(() => [...items]);
    },

    async createItem(todo) {
      const newTodo = { ...todo };
      await xhr(APP_API_URL + '/todos', {
        method: 'post',
        body: JSON.stringify(newTodo),
      });
    },

    async updateItem(todoId, checked) {
      let todo = todos.find((t) => t.id === todoId);
      todo = { ...todo, checked };
      await xhr(`${APP_API_URL}/todos/${todoId}`, {
        method: 'put',
        body: JSON.stringify(todo),
      });
    },

    async removeItem(todoId) {
      await xhr(`${APP_API_URL}/todos/${todoId}`, { method: 'delete' });
    },

    async getExamples() {
      const req = await fetch(APP_API_URL + '/dummy-todos');
      return await req.json();
    },
  };
}
