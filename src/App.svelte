<script>
  import { todos, env } from "./store";

  import { TodoItem, AddTodo, Title, Spinner } from "./components";

  $: todosData = JSON.stringify($todos, null, 2);

  let loading = true;

  fetchTodos();

  async function fetchTodos() {
    loading = true;
    await todos.fetchList();
    setTimeout(() => (loading = false), 100);
  }

  async function handleHeaderClick() {
    const items = await todos.getExamples();
    const { floor, random } = Math;
    onSubmitTodo(items[floor(random(0) * items.length)]);
  }

  async function onSubmitTodo(todo) {
    await todos.createItem(todo);
    await fetchTodos();
  }

  async function onChangeTodo(todoId, checked) {
    await todos.updateItem(todoId, checked);
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

  .main-spinner {
    position: absolute;
    top: 20px;
    right: 20px;
  }
</style>

<main>
  <Title on:click={handleHeaderClick}>Hello todo!</Title>
  <div class="main-spinner">
    <Spinner {loading} />
  </div>
  <div class="todo-list">
    {#each $todos as todo}
      <TodoItem
        {todo}
        on:change={({ detail }) => onChangeTodo(todo.id, detail)} />
    {/each}
  </div>
  <AddTodo on:submit={({ detail }) => onSubmitTodo(detail)} />
</main>
