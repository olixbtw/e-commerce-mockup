<template>
  <section class="advantages">
    <div class="container">
      <h3 class="advantages__title">Наші Переваги</h3>
      <ul class="advantages__wrapper">
        <li class="advantages__item"><img class="advantages__image" src="../assets/images/advantages6.svg" alt="advantage image 6"><h4 class="advantages__text">30 000<br>Тканин у наявності</h4></li>
        <li class="advantages__item"><img class="advantages__image" src="../assets/images/advantages2.svg" alt="advantage image 2"><h4 class="advantages__text">25<br>Країн світу -<br>постачальники</h4></li>
        <li class="advantages__item"><img class="advantages__image" src="../assets/images/advantages3.svg" alt="advantage image 3"><h4 class="advantages__text">Висока<br>якість Товару</h4></li>
        <li class="advantages__item"><img class="advantages__image" src="../assets/images/advantages5.svg" alt="advantage image 5"><h4 class="advantages__text">150 000<br>Роздрібних замовлень</h4></li>
        <li class="advantages__item"><img class="advantages__image" src="../assets/images/advantages4.svg" alt="advantage image 4"><h4 class="advantages__text">24/7<br>Служба Підтримки</h4></li>
        <li class="advantages__item"><img class="advantages__image" src="../assets/images/advantages1.svg" alt="advantage image 1"><h4 class="advantages__text">15 000<br>Постійних Клієнтів</h4></li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Advantages'
};
</script>

<style lang="scss">
.advantages {
  padding: 55px 0 35px;

  &__title {
    text-align: center;
    margin-bottom: 30px;
  }
  &__wrapper {
    display: flex;
    align-items: stretch;
    width: 100%;
    justify-content: space-around;
  }
  &__image {
    margin-bottom: 15px;
  }
  &__item {
    min-height: 160px;
    padding: 0 10px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex-grow: 1;
    width: 100%;
  }
  &__text {
    margin-bottom: 0;
    line-height: 1.5;
  }
}
</style>
