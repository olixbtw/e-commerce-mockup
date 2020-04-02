<template>
  <section class="posts" v-bind:class="num % 2 ? '' : 'posts--background-dark'">
    <div class="container">
      <h2 class="posts__header">Топ Продажу</h2>
      <div class="posts__wrapper">
        <div v-for="(i, index) of n" v-bind:key="index" class="posts__item">
          <ItemPost />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ItemPost from '../components/ItemPost';

export default {
  name: 'PostsTall',
  props: ['num'],
  components: {
    ItemPost
  },
  data: () => ({
    n: 5
  })
};
</script>

<style lang="scss">
$gap: 20px;
$wrapperWidth: calc(100% + #{$gap});

.posts {
  padding: 50px 0 40px;

  &--background-dark {
    background: $color-light1;
  }

  &__header {
    text-align: center;
    margin-bottom: 20px;
  }
  &__wrapper {
    overflow: hidden;
    width: $wrapperWidth;
    margin-left: -$gap / 2;
    display: flex;
  }
  &__item {
    flex-shrink: 0;
    width: 25%;
    padding: $gap $gap/2;
  }
}
</style>
