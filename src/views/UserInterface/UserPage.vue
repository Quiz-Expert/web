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

  methods: {
    acceptedFriendNotification(data = {}) {
      const name = data.data.name;
      this.$store.dispatch("INFO_NOTIFICATION", this.$t('pages.user.notification.text.accepted_friend_request', {user: name}));
    },

    incomingFriendNotification(data = {}) {
      const name = data.data.user.name;
      this.$store.dispatch("INFO_NOTIFICATION", this.$t('pages.user.notification.text.incoming_friend_request', {user: name}));
    },

    incomingGameNotification(data = {}) {
      const name = data.data.user.name;
      this.$store.dispatch("INFO_NOTIFICATION", this.$t('pages.user.notification.text.incoming_game_request', {user: name}));
    }
  },

  mounted() {
    const channel = pusher.subscribe(`private-notifications.${this.user.id}`);

    channel.bind("incoming_notification", data => {
      switch (data.type) {
        case 'accepted_friend_request': {
          this.acceptedFriendNotification(data);
          break;
        }
        case 'incoming_friend_request': {
          this.incomingFriendNotification(data);
          break;
        }
        case 'incoming_game_request': {
          this.incomingGameNotification(data);
          break;
        }
        default: {
          const text = this.$t(`pages.user.notification.text.${data.type}`);
          this.$store.dispatch("INFO_NOTIFICATION", text);
          break;
        }
      }
    });
  },

  unmounted() {
    pusher.unsubscribe(`private-notifications.${this.user.id}`);
  },
}
</script>
