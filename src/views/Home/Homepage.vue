<template>
  <Nav />
  <Main />
  <Footer />
</template>

<script>
import Nav from "@/components/Homepage/Nav";
import Main from "@/components/Homepage/Main";
import Footer from "@/components/Homepage/Footer";

export default {
  name: 'Homepage',
  components: {
    Nav,
    Main,
    Footer,
  }
}
</script>