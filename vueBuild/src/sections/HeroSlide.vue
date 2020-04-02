<template>
  <section class="hero">
    <ul class="slider hero__slider slider--item-active-1">
      <li class="slide slider__item">
        <div class="container">
          <h1 class="slide__title">Титулка</h1>

          <p class="slide__text">
            Опис. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <button class="btn btn--big slide__button btn--black">Дізнатись більше ›</button>

          <img
            class="slide__background"
            src="@/assets/images/Hero.jpg"
            alt="bed sheets background"
          />
        </div>
      </li>
      <li class="slide slider__item">
        <div class="container">
          <h1 class="slide__title">Титулка3</h1>

          <p class="slide__text">
            Опис. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <button class="btn btn--big slide__button">Дізнатись більше ></button>

          <img
            class="slide__background"
            src="@/assets/images/Hero.jpg"
            alt="bed sheets background"
          />
        </div>
      </li>
      <li class="slide slider__item">
        <div class="container">
          <h1 class="slide__title">Титулка4</h1>

          <p class="slide__text">
            Опис. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <button class="btn btn--big slide__button">Дізнатись більше ></button>

          <img
            class="slide__background"
            src="@/assets/images/Hero.jpg"
            alt="bed sheets background"
          />
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'HeroSlide'
};
</script>

<style lang="scss">
.hero {
  color: $color-white;
  overflow: hidden;
}

@mixin addSlide($n) {
  &--item-active-#{$n} {
    margin-left: -100% * ($n - 1);
    margin-right: 100% * ($n - 1);
    .slider__item:nth-child(#{$n}) {
      opacity: 1;
    }
  }
}

.slider {
  position: relative;
  min-height: 700px;
  display: flex;
  align-content: stretch;
  transition: 0.5s margin ease-in-out;

  &__item {
    padding: 40px 70px 130px;
    width: 100%;
    flex-shrink: 0;
    transition: 0.75s opacity ease-in-out;
    opacity: 0.75;
  }

  @include addSlide(1);
  @include addSlide(2);
  @include addSlide(3);
}

.slide {
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;

  &__title {
    margin-bottom: 67px;
  }
  &__text {
    margin-bottom: 53px;
    font-size: 24px;
    line-height: 34px;
    text-shadow: 0px 4px 4px $color-black-025;
    max-width: 800px;
  }
  &__background {
    position: absolute;
    top: 0;
    // bottom: 0;
    // right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    object-fit: cover;
  }
  &__button {
    &:hover {
      box-shadow: 2px 4px 8px $color-black-01;
    }
  }
}
</style>
