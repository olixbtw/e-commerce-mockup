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
    <div class="one-click-buy">
      <button class="one-click-buy__button post-card__btn btn btn--black">
        Купити в один клік ›
      </button>
      <ul class="one-click-buy__list">
        <li class="one-click-buy__item">
          <img
            class="one-click-buy__image"
            src="../assets/images/BedSet (11).jpg"
            alt="bed set variant"
          />
        </li>
        <li class="one-click-buy__item">
          <img
            class="one-click-buy__image"
            src="../assets/images/BedSet (11).jpg"
            alt="bed set variant"
          />
        </li>
        <li class="one-click-buy__item">
          <img
            class="one-click-buy__image"
            src="../assets/images/BedSet (11).jpg"
            alt="bed set variant"
          />
        </li>
      </ul>
    </div>

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
  background: $color-white;
  transition: 0.25s box-shadow ease-in-out;
  box-shadow: 0px 0px 6px $color-black-01;
  &:hover {
    box-shadow: 0px 0px 12px $color-black-025;
    cursor: pointer;
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
  &__btn {
    width: 100%;
    min-height: 48px;
    border: none;
    color: $color-black-05;
    font-size: 14px;
    &:hover {
      color: $color-black;
    }
  }
}

.one-click-buy {
  position: relative;
  &__button {
    font-size: 17px;
    color: $color-white;
    background: $color-black-066;
    width: 100%;
    &:hover + .one-click-buy__list {
      pointer-events: all;
      opacity: 1;
    }
  }

  &__list {
    &:hover {
      pointer-events: all;
      opacity: 1;
    }
    pointer-events: none;
    opacity: 0;
    transition: 0.25s all ease-in-out;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: $color-black;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__item {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
    overflow: hidden;
    padding: 3px;
    border: 1px solid $color-white;
    margin: 0 5px;
    cursor: pointer;
    transition: 0.15s all ease-in-out;
    &:hover {
      transform: scale(1.1);
      padding: 0;
      border-color: $color-black;
    }
  }

  &__image {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
}
</style>
