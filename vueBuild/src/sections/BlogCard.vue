<template>
  <section class="blog">
    <div class="container">
      <h2 class="blog__title">Новини</h2>
      <NewsItem class="blog__item" />
      <NewsItem class="blog__item" />
    </div>
  </section>
</template>

<script>
import NewsItem from '../components/NewsItem';

export default {
  name: 'BlogCard',
  components: {
    NewsItem
  }
};
</script>

<style lang="scss">
.blog {
  padding: 65px 0 86px;
  &__title {
    width: 100%;
    text-align: center;
    margin-bottom: 32px;
  }
  &__item {
    width: calc(50% - 10px);
  }
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}
</style>
