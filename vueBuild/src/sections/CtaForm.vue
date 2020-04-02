<template>
  <section class="cta">
    <div class="container">
      <h2 class="cta__title">Підписатися на актуальні розсилки</h2>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CtaForm'
};
</script>

<style lang="scss">
.cta{
  padding: 65px 0 50px;
  background: $color-light1;
   &__title {
    text-align: center;
    margin-bottom: 30px;
  }
}
</style>
