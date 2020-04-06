<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  export let todo = {};
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
    <input
      type="checkbox"
      bind:checked={todo.checked}
      on:change={() => dispatch('change', todo.checked)} />
    {todo.text}
  </label>
</li>
