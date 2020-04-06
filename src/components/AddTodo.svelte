<script>
  import { createEventDispatcher } from "svelte";
  let todoText;
  const dispatch = createEventDispatcher();
  function submit() {
    dispatch("submit", { text: todoText });
    todoText = "";
  }
</script>

<style>
  .add-todo {
    width: 100%;
    padding: 1rem;
    margin-top: 2rem;
  }

  .add-todo > form {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: stretch;
    max-width: 400px;
    margin: 0 auto;
  }

  .add-todo > form > * {
    margin-left: 1rem;
  }

  .add-todo > form > input {
    flex: 2;
  }
</style>

<div class="add-todo">
  <form on:submit|preventDefault={submit}>
    <input type="text" bind:value={todoText} />
    <button disabled={!todoText}>Add Todo</button>
  </form>
</div>
