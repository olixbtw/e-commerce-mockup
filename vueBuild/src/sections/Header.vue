<template>
  <header class="header">
    <div class="container">
      Header

      <button class="btn btn__empty">Мой кабинет</button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
};
</script>

<style lang="scss">
.header {
  // position: absolute;
  // top: 0;
  // left: 0;
  // width: 100%;
  background: $color-white;
  padding: 10px 0;
}
</style>
