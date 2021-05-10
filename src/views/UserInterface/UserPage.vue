<template>
  <div class="min-h-screen bg-gray-200">
    <Nav />
    <router-view class="pb-32" />
  </div>
  <Footer class="-mt-20" />
</template>

<script>
import {mapGetters} from 'vuex'
import pusher from "../../pusher";
import Nav from "@/components/UserInterface/Nav";
import Footer from "@/components/UserInterface/Footer"

export default {
  name: "Homepage",

  components: {
    Nav,
    Footer
  },

  computed: {
    ...mapGetters(['user'])
  },

  data() {
    return {
      notificationData: null,
    }
  },

  mounted() {
    const channel = pusher.subscribe(`private-notifications.${this.user.id}`);

    channel.bind("incoming_notification", data => {
      this.$store.dispatch("INFO_NOTIFICATION", data.message);
    });
  },

  unmounted() {
    pusher.unsubscribe(`private-notifications.${this.user.id}`);
  },
}
</script>
