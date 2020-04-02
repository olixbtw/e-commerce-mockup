<template>
  <div class="news-card">
    <figure class="news-card__figure">
      <img
        class="news-card__image"
        src="../assets/images/BedSet (1).jpg"
        alt="bed sheets image"
      />
    </figure>
    <div class="news-card__content">
      <span class="news-card__date">Дата</span>

      <h4 class="news-card__title">Назва</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore...
      </p>
      <a class="news-card__link" href="/">Читати більше  ›</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewsItem'
};
</script>

<style lang="scss">
.news-card {
  display: flex;
  background: $color-white;
  transition: 0.25s box-shadow ease-in-out;
  &:hover {
    box-shadow: 0px 0px 12px $color-black-025;
    cursor: pointer;
  }
  &__figure {
    flex-shrink: 0;
    height: 160px;
    width: 160px;
    position: relative;
  }
  &__image {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }
  &__content {
    padding: 11px 10px 19px;
    display: flex;
    flex-direction: column;
    font-size: 14px;
    line-height: 1.5;
  }
  &__title {
    font-weight: bold;
    margin-top: 15px;
    margin-bottom: -2px;
  }
  &__date {
    font-size: 12px;
  }
  &__link {
    font-size: 14px;
    text-decoration: underline;
    font-weight: bold;
    color: inherit;
    margin-bottom: 0;
    margin-top: auto;
  }
}
</style>
