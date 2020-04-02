<template>
  <header class="header">
    <div class="container header__container">
      <div class="header__section header__section--left">
        <nav class="header__navigation">
          <ul class="navigation">
            <li class="navigation__item">
              <a class="navigation__link" href="/">Про Компанію</a>
            </li>
            <li class="navigation__item">
              <a class="navigation__link" href="/">Каталог</a>
            </li>
            <li class="navigation__item">
              <a class="navigation__link" href="/">Питання та Відповіді</a>
            </li>
          </ul>
        </nav>
        <ul class="language-switcher">
          <li class="language-switcher__item active">Укр</li>
          <li class="language-switcher__item">Рос</li>
        </ul>
      </div>
      <div class="header__section header__section--middle">
        <a href="/">
          <img src="../assets/icons/Logo.svg" alt="Logo" />
        </a>
      </div>
      <div class="header__section header__section--right">
        <div class="header__search header__section-item search">
          <img src="../assets/icons/search.svg" alt="search" />
        </div>
        <div class="header__cart header__section-item cart">
          <figure class="cart__image">
            <img src="../assets/icons/cart.svg" alt="cart" />
            <figcaption class="cart__total">
              12
            </figcaption>
          </figure>
          Кошик
        </div>
        <button class="header__login header__section-item btn btn--empty">
          Мій кабінет
        </button>
        <ul class="header__socials header__section-item socials">
          <li class="socials__item">
            <a class="socials__link" href="/">
              <img
                class="socials__image"
                src="../assets/icons/facebook.svg"
                alt="facebook icon"
              />
            </a>
          </li>
          <li class="socials__item">
            <a class="socials__link" href="/">
              <img
                class="socials__image"
                src="../assets/icons/linkedin.svg"
                alt="linkedin icon"
              />
            </a>
          </li>
          <li class="socials__item">
            <a class="socials__link" href="/">
              <img
                class="socials__image"
                src="../assets/icons/youtube.svg"
                alt="youtube icon"
              />
            </a>
          </li>
          <li class="socials__item">
            <a class="socials__link" href="/">
              <img
                class="socials__image"
                src="../assets/icons/instagram.svg"
                alt="instagram icon"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
};
</script>

<style lang="scss">
.header {
  color: $color-black-05;
  background: $color-white;
  padding: 10px 0 8px;
  &__container {
    display: flex;
    justify-content: space-between;
  }
  &__section {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    &--middle {
      width: 100% / 6;
    }
    &--left,
    &--right {
      width: 100% / 12 * 5;
    }
    &--right {
      justify-content: flex-end;
    }
  }
  &__section-item {
    margin-left: 45px;
    &:first-child {
      margin-left: 0;
    }
  }
  &__cart {
    display: flex;
    align-items: center;
  }
}

.navigation {
  display: flex;

  &__item {
    margin-right: 39px;
    cursor: pointer;
    &:hover {
      color: $color-black;
    }
  }
  &__link {
    color: inherit;
    position: relative;
    transition: 0.2s all ease-in-out;
    position: relative;

    &:after {
      position: absolute;
      bottom: -6px;
      left: 0;
      transition: 0.1s all ease-in-out;
      content: '';
      display: block;
      height: 2px;
      background: $color-black-025;
      margin-left: 50%;
      width: 0;
    }
    &:hover {
      &:after {
        width: 100%;
        margin-left: 0;
      }
    }
  }
}

.language-switcher {
  display: flex;
  &__item {
    margin-right: 8px;
    cursor: pointer;
    &:hover {
      color: $color-black;
    }
    &.active {
      text-decoration: underline;
    }
  }
}

.socials {
  display: flex;
  margin-right: -7px;
  &__item {
    margin: 0 7px;
    transition: 0.2s all ease-in-out;
    &:hover {
      transform: scale(1.05);
    }
  }
  &__link {
    display: block;
  }
  &__image {
  }
}
.search {
  cursor: pointer;
  transition: 0.1s all ease-in-out;
  &:hover {
    opacity: 0.9;
    transform: scale(1.1);
  }
}

.cart {
  margin-left: 30px;
  cursor: pointer;
  &:hover {
    color: $color-black-066;
  }
  &__image {
    position: relative;
    margin-right: 10px;
  }
  &__total {
    line-height: 20px;
    text-align: center;
    position: absolute;
    top: 0;
    right: 0;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    color: $color-white;
    background: $color-red;
    font-size: 9px;
  }
}
</style>
