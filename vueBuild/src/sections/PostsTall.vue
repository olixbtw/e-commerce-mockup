<template>
  <section class="posts" v-bind:class="num % 2 ? '' : 'posts--background-dark'">
    <div class="container">
      <h2 class="posts__header section-header">
        Топ Продажу

        <span class="section-header__expander">Дивитись Всі</span>
      </h2>
      <div class="posts__wrapper">
        <div class="posts__arrow posts__arrow--left">›</div>
        <div v-for="(i, index) of n" v-bind:key="index" class="posts__item">
          <ItemPost />
        </div>
        <div class="posts__arrow posts__arrow--right">›</div>
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
  &__arrow {
    padding: 7px;
    font-size: 45px;
    position: absolute;
    top: 50%;
    color: $color-black-05;
    cursor: pointer;
    &:hover {
      color: $color-black;
    }
    $arrOffset: 31px;
    &--left {
      left: $arrOffset;
      transform: scaleX(-1);
    }
    &--right {
      right: $arrOffset;
    }
  }
  .container {
    position: relative;
  }
}

.section-header {
  position: relative;
  &__expander {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    color: $color-black-05;
    font-size: 16px;
    cursor: pointer;

    transition: 0.1s all ease-in-out;
    &:hover {
      color: $color-black-066;
    }
  }
}
</style>
