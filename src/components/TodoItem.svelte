<script>
  export let todo = {};
  export let onChange = checked => {};
  export let checked = false;
</script>

<style>
  .todo-item {
    list-style-type: none;
    padding: 0.5rem 1.5rem;
    border-bottom: solid 1px #eee;
  }
</style>

<li class="todo-item">
  <label>
    <input type="checkbox" bind:checked on:change={onChange(checked)} />
    {todo.text}
  </label>
</li>
