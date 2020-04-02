<template>
  <section class="cta">
    <div class="container">
      <h2 class="cta__title">Підписатися на актуальні розсилки</h2>
      <p class="cta__subtitle">
        Будьте в курсі нових подій та спеціальних пропозицій
      </p>
      <form class="cta__form form" @submit="submitHandler">
        <!-- to make a colorful star in a placeholder, labels need to be added. to keep code cleaner, decided to leave grey-colored placeholders -->
        <input
          class="form__input form__input--text"
          placeholder="Ім'я*"
          type="text"
          required
        />
        <input
          class="form__input form__input--text"
          placeholder="Компанія"
          type="text"
        />
        <input
          class="form__input form__input--text"
          placeholder="email*"
          type="email"
          required
        />
        <button class="btn btn--black" type="submit">Submit</button>
        <p class="form__help">* - обов’язкове поле для заповнення</p>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CtaForm',
  methods: {
    submitHandler(e) {
      e.preventDefault();
      console.log(e.target);
    }
  }
};
</script>

<style lang="scss">
.cta {
  padding: 65px 0 50px;
  background: $color-light1;
  &__title {
    text-align: center;
    // margin-bottom: 30px;
  }
  &__subtitle {
    color: $color-dark;
    text-align: center;
    margin-bottom: 40px;
    font-size: 18px;
  }
  &__form {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
    align-items: stretch;
    // margin-bottom: 50px;

    .btn,
    .form__input {
      width: calc(25% - 15px);
    }

    .btn {
      &:hover {
        opacity: 0.8;
      }
    }
  }
}

.form {
  &__input {
    font-size: 17px;
    background: $color-white;
    border-width: 2px;
    border-style: solid;
    border-color: $color-white;
    color: $color-black;
    outline: none;

    transition: 0.2s all ease-in-out;
    &--text {
      padding: 10px;

      &:active {
        border-style: dashed;
        border-color: $color-black-05;
      }
      &:focus {
        outline: none;
        border-style: dashed;
        border-color: $color-black;
      }
      &::placeholder {
        color: $color-black-05;
      }
    }
  }
  &__help {
    width: 100%;
    text-align: center;
    color: $color-black-05;
    margin-top: 20px;
  }
}
</style>
