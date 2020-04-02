<template>
  <div class="post-card">
    <figure class="post-card__figure">
      <img
        class="post-card__image"
        src="../assets/images/BedSet (1).jpg"
        alt="bed sheets image"
      />
    </figure>
    <div class="post-card__content">
      <p>Артикул <b>1234</b></p>
      <h4>Двоспальний Комплект постільної білизни "Камея"</h4>
      <p>Красивий та зручний постільний набір</p>
      <br />
      <p>397.00 грн</p>
    </div>
    <button class="btn post-card__btn post-card__btn--big btn--black">
      Купити в один клік ›
    </button>
    <button class="btn post-card__btn btn--action-add-to-cart">
      Додати до кошика
    </button>
  </div>
</template>

<script>
export default {
  name: 'ItemPost'
};
</script>

<style lang="scss">
.post-card {
  background: $color-white;
  transition: 0.25s box-shadow ease-in-out;
  box-shadow: 0px 0px 6px $color-black-01;
  &:hover {
    box-shadow: 0px 0px 12px $color-black-025;
    cursor: pointer;
    .post-card__btn {
      color: $color-black;
      &.btn--black {
        color: $color-white;
      }
    }
  }
  &__figure {
    height: 270px;
    width: 100%;
    position: relative;
    // max-height: 270px;
    // &:after {
    //   content: '';
    //   display: block;
    //   padding-top: 100%;
    // }
  }
  &__image {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }
  &__content {
    padding: 10px;
  }
  &__btn {
    display: block;
    width: 100%;
    min-height: 50px;
    border: none;
    color: $color-black-05;
    &.btn--black {
      color: $color-white;
      background: $color-black-066;
      &:hover {
        color: $color-white;
        background: $color-black;
      }
    }
    &--big {
      font-size: 18px;
    }
  }
}
</style>
