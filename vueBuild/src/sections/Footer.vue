<template>
  <footer class="footer">
    <div class="container">
      <nav>
        <ul class="footer__menu">
          <li>
            <h6 class="footer__submenu-title">
              <a class="footer__link" href="/">Про Компанію</a>
            </h6>
            <ul>
              <li><a class="footer__link" href="/">Власне Виробництво</a></li>
              <li><a class="footer__link" href="/">Новини</a></li>
              <li><a class="footer__link" href="/">Доставка і Оплата</a></li>
              <li><a class="footer__link" href="/">Контакти</a></li>
              <li><a class="footer__link" href="/">FAQ</a></li>
              <li>
                <a class="footer__link" href="/">Політика Конфіденційності</a>
              </li>
            </ul>
          </li>
          <li>
            <h6 class="footer__submenu-title">
              <a class="footer__link" href="/">Каталог Товарів</a>
            </h6>
            <ul>
              <li><a class="footer__link" href="/">Новинки</a></li>
              <li><a class="footer__link" href="/">Топ Продаж</a></li>
              <li>
                <a class="footer__link" href="/">Кращі Товари по Рейтингу</a>
              </li>
              <li><a class="footer__link" href="/">Акції</a></li>
              <li><a class="footer__link" href="/">Всі Тканини</a></li>
              <li><a class="footer__link" href="/">Для дому</a></li>
              <li><a class="footer__link" href="/">Для одягу</a></li>
              <li><a class="footer__link" href="/">Спеціальні Тканини</a></li>
              <li><a class="footer__link" href="/">Хутро</a></li>
            </ul>
          </li>
          <li>
            <h6 class="footer__submenu-title">
              <a class="footer__link" href="/">Особистий Кабінет</a>
            </h6>
            <ul>
              <li>
                <a class="footer__link" href="/"
                  >Створення Особистого Кабінету</a
                >
              </li>
              <li><a class="footer__link" href="/">Логін</a></li>
            </ul>
          </li>
          <li>
            <ul class="footer__language-switcher language-switcher">
              <li class="language-switcher__item">Укр</li>
              <li class="language-switcher__item">Рос</li>
            </ul>

            <ul class="socials">
              <li class="socials__item">
                <a class="socials__link" href="/">
                  <img
                    class="socials__image"
                    src="../assets/icons/facebook_light.svg"
                    alt="facebook icon"
                  />
                </a>
              </li>
              <li class="socials__item">
                <a class="socials__link" href="/">
                  <img
                    class="socials__image"
                    src="../assets/icons/linkedin_light.svg"
                    alt="linkedin icon"
                  />
                </a>
              </li>
              <li class="socials__item">
                <a class="socials__link" href="/">
                  <img
                    class="socials__image"
                    src="../assets/icons/youtube_light.svg"
                    alt="youtube icon"
                  />
                </a>
              </li>
              <li class="socials__item">
                <a class="socials__link" href="/">
                  <img
                    class="socials__image"
                    src="../assets/icons/instagram_light.svg"
                    alt="instagram icon"
                  />
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <div class="copyright">
        Copyright © 2020 ТК-ДОМАШНІЙ ТЕКСТИЛЬ
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
};
</script>

<style lang="scss">
.footer {
  background: $color-black;
  color: $color-light2;
  padding: 30px 0 20px;
  line-height: 1.3;
  &__menu {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
  }
  &__submenu-title,
  &__language-switcher {
    margin-bottom: 20px;
  }
  &__submenu-title {
    text-transform: uppercase;
  }
  &__language-switcher {
    .language-switcher__item {
      // margin-right: 8px;
      // cursor: pointer;
      &:hover {
        color: $color-white;
      }
    }
  }
  &__link {
    color: inherit;
    &:hover {
      color: $color-white;
    }
  }
}
.copyright {
  margin-top: 40px;
  text-align: center;
  color: $color-white-03;
}
</style>
