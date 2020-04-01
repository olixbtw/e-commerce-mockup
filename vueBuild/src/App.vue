<template>
  <div id="app">
    <Header />
    <HeroSlide />
    <Advantages />
    <PostsTall />
    <PostsTall />
    <PostsTall />
    <BlogCard />
    <CtaForm />
    <Footer />
    <Arrow />
  </div>
</template>

<script>
import Arrow from './components/Arrow.vue';

import Advantages from './sections/Advantages.vue';
import BlogCard from './sections/BlogCard.vue';
import CtaForm from './sections/CtaForm.vue';
import Footer from './sections/Footer.vue';
import Header from './sections/Header.vue';
import HeroSlide from './sections/HeroSlide.vue';
import PostsTall from './sections/PostsTall.vue';

export default {
  name: 'App',
  title: 'E-commerce',
  components: {
    Arrow,
    Advantages,
    BlogCard,
    CtaForm,
    Footer,
    Header,
    HeroSlide,
    PostsTall
  }
};
</script>

<style lang="scss"></style>
