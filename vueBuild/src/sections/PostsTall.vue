<template>
  <section class="posts">
    <div class="container">
      <h2 class="posts__header">Топ продажу</h2>
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
  padding: 60px 0 ;

  &__header {
    text-align: center;
  }
  &__wrapper {
    overflow: hidden;
    width: $wrapperWidth;
    margin-left: -$gap;
    display: flex;
  }
  &__item {
    flex-shrink: 0;
    width: 25%;
    padding: $gap $gap/2;
  }
}
</style>
