<script>
  export let loading = false;
</script>

<style>
  /* spinner from https://loading.io/css/ */
  .lds-circle {
    display: inline-block;
    transform: translateZ(1px);
    opacity: 1;
    transition: all 0.5s;
  }
  .lds-circle > div {
    display: inline-block;
    width: 24px;
    height: 24px;
    margin: 8px;
    border-radius: 50%;
    background: #ccc;
    animation: lds-circle 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  @keyframes lds-circle {
    0%,
    100% {
      animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
    }
    0% {
      transform: rotateY(0deg);
    }
    50% {
      transform: rotateY(1800deg);
      animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
    }
    100% {
      transform: rotateY(3600deg);
    }
  }

  .lds-circle:not(.visible) {
    opacity: 0;
  }
</style>

<div class="lds-circle" class:visible={loading}>
  <div />
</div>
