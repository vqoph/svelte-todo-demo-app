<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  export let todo = {};
</script>

<style>
  .todo-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style-type: none;
    padding: 0.5rem 1.5rem;
    border-bottom: solid 1px #eee;
  }

  .todo-item label {
    font-size: 1.3rem;
    font-weight: 300;
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: #999;
    cursor: pointer;
  }

  .todo-item label:hover {
    color: #555;
  }

  .todo-item label.checked {
    text-decoration: line-through;
  }

  .button-remove {
    background-color: transparent;
    border: none;
    font-size: 1rem;
    cursor: pointer;
    color: #888;
    margin: 0;
  }

  .button-remove:hover {
    text-decoration: underline;
  }

  input {
    opacity: 0;
    width: 1px;
    height: 1px;
    position: absolute;
    margin: 0;
    margin-right: 1rem;
    padding: 0;
  }
</style>

<li class="todo-item">
  <label class:checked={todo.checked}>
    <input
      type="checkbox"
      bind:checked={todo.checked}
      on:change={() => dispatch('change', todo.checked)} />
    {todo.text}
  </label>
  <button
    type="button"
    class="button-remove"
    on:click={() => dispatch('remove')}>
    remove
  </button>
</li>
