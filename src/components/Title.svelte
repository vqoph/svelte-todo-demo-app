<script>
  export let onClick = () => {};
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

<h1 on:click={onClick}>
  <slot />
</h1>
