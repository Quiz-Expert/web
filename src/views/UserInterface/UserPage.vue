<template>
  <Nav />
  <router-view />
  <Footer />
</template>

<script>
import Nav from "@/components/UserInterface/Nav";
import Footer from "@/components/UserInterface/Footer"

export default {
  name: "Homepage",
  components: {
    Nav,
    Footer
  }
}
</script>
