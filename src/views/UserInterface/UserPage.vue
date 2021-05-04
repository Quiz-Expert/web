<template>
  <div class="min-h-screen bg-gray-200">
    <Nav />
    <router-view class="pb-32" />
  </div>
  <Footer class="-mt-20" />
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
