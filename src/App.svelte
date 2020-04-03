<script>
  import { todos, env } from "./store.js";
  import TodoItem from "./components/TodoItem.svelte";
  import AddTodo from "./components/AddTodo.svelte";
  import Title from "./components/Title.svelte";

  $: todosData = JSON.stringify($todos, null, 2);

  fetchTodos();

  async function fetchTodos() {
    const req = await fetch($env.APP_API_URL + "/todos");
    const items = await req.json();
    todos.update(todos => [...items]);
  }

  async function handleHeaderClick() {
    const req = await fetch($env.APP_API_URL + "/dummy-todos");
    const items = await req.json();
    const { floor, random } = Math;
    onSubmitTodo(items[floor(random(0) * items.length)]);
  }

  async function onSubmitTodo(todo) {
    const newTodo = { ...todo };
    const req = await fetch($env.APP_API_URL + "/todos", {
      method: "post",
      body: JSON.stringify(newTodo),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
    await fetchTodos();
  }

  async function onChangeTodo(todoId, checked) {
    let todo = $todos.find(t => t.id === todoId);
    todo = { ...todo, checked };
    const req = await fetch(`${$env.APP_API_URL}/todos/${todoId}`, {
      method: "put",
      body: JSON.stringify(todo),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
    await fetchTodos();
  }
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }
  .todo-list {
    text-align: left;
    max-width: 600px;
    margin: 0 auto;
  }
</style>

<main>
  <Title onClick={handleHeaderClick}>Hello todo!</Title>
  <div class="todo-list">
    {#each $todos as todo}
      <TodoItem {todo} onChange={checked => onChangeTodo(todo.id, checked)} />
    {/each}
  </div>
  <AddTodo onSubmit={onSubmitTodo} />
</main>
