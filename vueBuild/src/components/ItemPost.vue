<template>
  <div class="post-card">
    <!-- <span class="post-card__emphasis post-card__emphasis--rating">
      <svg
        width="21"
        height="19"
        viewBox="0 0 21 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.5 1.61804L12.3819 7.40983L12.4941 7.75532H12.8574H18.9473L14.0205 11.3348L13.7266 11.5484L13.8388 11.8939L15.7207 17.6857L10.7939 14.1061L10.5 13.8926L10.2061 14.1061L5.27931 17.6857L7.16118 11.8939L7.27344 11.5484L6.97954 11.3348L2.05275 7.75532H8.1426H8.50587L8.61813 7.40983L10.5 1.61804Z"
        />
      </svg>
      <svg
        width="21"
        height="19"
        viewBox="0 0 21 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.5 1.61804L12.3819 7.40983L12.4941 7.75532H12.8574H18.9473L14.0205 11.3348L13.7266 11.5484L13.8388 11.8939L15.7207 17.6857L10.7939 14.1061L10.5 13.8926L10.2061 14.1061L5.27931 17.6857L7.16118 11.8939L7.27344 11.5484L6.97954 11.3348L2.05275 7.75532H8.1426H8.50587L8.61813 7.40983L10.5 1.61804Z"
        />
      </svg>
      <svg
        width="21"
        height="19"
        viewBox="0 0 21 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.5 1.61804L12.3819 7.40983L12.4941 7.75532H12.8574H18.9473L14.0205 11.3348L13.7266 11.5484L13.8388 11.8939L15.7207 17.6857L10.7939 14.1061L10.5 13.8926L10.2061 14.1061L5.27931 17.6857L7.16118 11.8939L7.27344 11.5484L6.97954 11.3348L2.05275 7.75532H8.1426H8.50587L8.61813 7.40983L10.5 1.61804Z"
        />
      </svg>
      <svg
        width="21"
        height="19"
        viewBox="0 0 21 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.5 1.61804L12.3819 7.40983L12.4941 7.75532H12.8574H18.9473L14.0205 11.3348L13.7266 11.5484L13.8388 11.8939L15.7207 17.6857L10.7939 14.1061L10.5 13.8926L10.2061 14.1061L5.27931 17.6857L7.16118 11.8939L7.27344 11.5484L6.97954 11.3348L2.05275 7.75532H8.1426H8.50587L8.61813 7.40983L10.5 1.61804Z"
        />
      </svg>
      <svg
        width="21"
        height="19"
        viewBox="0 0 21 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.5 1.61804L12.3819 7.40983L12.4941 7.75532H12.8574H18.9473L14.0205 11.3348L13.7266 11.5484L13.8388 11.8939L15.7207 17.6857L10.7939 14.1061L10.5 13.8926L10.2061 14.1061L5.27931 17.6857L7.16118 11.8939L7.27344 11.5484L6.97954 11.3348L2.05275 7.75532H8.1426H8.50587L8.61813 7.40983L10.5 1.61804Z"
        />
      </svg>
    </span> -->
    <span class="post-card__emphasis post-card__emphasis--newest">Новинка</span>
    <!-- <span class="post-card__emphasis post-card__emphasis--top-sell"
      >топ продажу</span
    > -->
    <figure class="post-card__figure">
      <img
        class="post-card__image"
        src="../assets/images/BedSet (1).jpg"
        alt="bed sheets image"
      />
    </figure>
    <div class="post-card__content">
      <p>Артикул <b>1234</b></p>
      <h4 class="post-card__title">
        Двоспальний Комплект постільної білизни "Камея"
      </h4>
      <p>Красивий та зручний постільний набір</p>
      <span class="post-card__price">397.00 <small>грн</small></span>
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
  position: relative;
  &__emphasis {
    font-size: 14px;
    color: $color-white;
    z-index: 1;
    position: absolute;
    top: 9px;
    right: 11px;
    border-radius: 5px;
    padding: 4px 9px;
    text-transform: uppercase;

    &--rating {
      // background: green;
      // background-image: linear-gradient(45deg, #f3ec78, #af4261);
      // background-clip: text;
      // -webkit-background-clip: text;
      // -webkit-text-fill-color: transparent;
      // -moz-background-clip: text;
      // -moz-text-fill-color: transparent;
      svg {
        fill: $color-yellow;
        stroke: $color-yellow;
      }
    }
    &--top-sell {
      background: $color-purple;
    }
    &--newest {
      background: $color-green;
    }
  }
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
  }
  &__image {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }
  &__content {
    padding: 12px 10px 7px;
  }
  &__title {
    font-size: 20px;
    margin-bottom: 7px;
  }
  &__price {
    display: block;
    margin-top: 15px;
    font-size: 18px;
  }
  &__btn {
    display: block;
    width: 100%;
    min-height: 50px;
    border: none;
    color: $color-black-05;
    font-size: 14px;
    &.btn--black {
      color: $color-white;
      background: $color-black-066;
      &:hover {
        color: $color-white;
        background: $color-black;
      }
    }
    &--big {
      font-size: 17px;
    }
  }
}
</style>
