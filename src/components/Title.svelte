<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
</script>

<style>
  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
    cursor: pointer;
    user-select: none;
  }
</style>

<h1 on:click={() => dispatch('click')}>
  <slot />
</h1>
