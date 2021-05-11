<template>
  <main class="w-full py-12">
    <div class="max-w-2xl mx-auto space-y-6">
      <div class="flex justify-between align-middle inline-block px-4 sm:px-6 lg:px-8 w-full">
        <div class="w-full -mr-10">
          <h2 class="mb-4 text-2xl sm:text-3xl lg:text-4xl xl:text-4xl leading-tight text-gray-900 text-center"
              v-text="$t('pages.user.notification.tittle')"
          />
        </div>
        <div>
          <button type="button"
                  class="p-1 sm:p-2 text-center text-white transition bg-yellow-500 rounded-full shadow ripple hover:shadow-lg hover:bg-yellow-600 focus:outline-none"
                  @click="readAllNotifications()"
          >
            <svg xmlns="http://www.w3.org/2000/svg"
                 class="h-6 w-6"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke="currentColor"
            >
              <path stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="py-2 align-middle inline-block px-4 sm:px-6 lg:px-8 w-full">
        <div class="shadow-xl overflow-hidden border-b border-gray-200 rounded-lg">
          <table class="w-full divide-y-2 divide-green-600">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col"
                    class="px-2 sm:px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    v-text="$t('pages.user.notification.text.tittle')"
                />
                <th scope="col"
                    class="px-2 sm:px-4 md:px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                    v-text="$t('pages.user.notification.action')"
                />
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="notification in notifications.data" :key="notification" class="hover:bg-gray-100">
                <td class="px-2 sm:px-4 md:px-6 py-4">
                  <div class="flex items-center">
                    <div class="text-sm font-medium text-gray-900"
                         v-text="getNotificationMessage(notification)"
                    />
                  </div>
                </td>
                <td class="px-2 sm:px-4 md:px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                  <button type="button"
                          class="inline-block p-1 sm:p-2 text-center text-white transition bg-red-500 rounded-full shadow ripple hover:shadow-lg hover:bg-red-600 focus:outline-none"
                          @click="readNotification(notification)"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg"
                         class="w-4 sm:w-5 h-4 sm:h-5"
                         fill="none"
                         viewBox="0 0 24 24"
                         stroke="currentColor"
                    >
                      <path stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <Pagination @previous-page="previousPage()"
                      @next-page="nextPage()"
          />
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import {mapGetters} from 'vuex'
import Pagination from "../../Pagination";

export default {
  name: "Notifications",

  components: {
    Pagination
  },

  data() {
    return {
      currentPage: 1,
    }
  },

  methods: {
    acceptedFriendMessage(data = {}) {
      const name = data.data.name;
      return this.$t('pages.user.notification.text.accepted_friend_request', {user: name});
    },

    incomingFriendMessage(data = {}) {
      const name = data.data.user.name;
      return this.$t('pages.user.notification.text.incoming_friend_request', {user: name});
    },

    incomingGameMessage(data = {}) {
      const name = data.data.user.name;
      return this.$t('pages.user.notification.text.incoming_game_request', {user: name});
    },

    getNotificationMessage(notification = {}) {
      switch (notification.type) {
        case 'accepted_friend_request': {
          return this.acceptedFriendMessage(notification.data);
        }
        case 'incoming_friend_request': {
          return this.incomingFriendMessage(notification.data);
        }
        case 'incoming_game_request': {
          return this.incomingGameMessage(notification.data);
        }
        default: {
          return this.$t(`pages.user.notification.text.${notification.type}`);
        }
      }
    },

    loadPage() {
      this.$store.dispatch("GET_NOTIFICATION", this.currentPage);
    },

    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.loadPage();
      }
    },

    nextPage() {
      if (this.currentPage < this.notifications.pagination.total_pages) {
        this.currentPage++;
        this.loadPage();
      }
    },

    readNotification(currentNotification) {
      this.$store.dispatch("READ_NOTIFICATION", currentNotification.id)
        .then(() => {
          this.loadPage();
        });
    },

    readAllNotifications() {
      this.$store.dispatch("READ_All_NOTIFICATIONS")
        .then(() => {
          this.loadPage();
        });
    }
  },

  mounted() {
    this.loadPage();
  },

  unmounted() {
    this.$store.dispatch("DISCARD_ALL_NOTIFICATIONS");
  },

  computed: {
    ...mapGetters(['notifications']),
  }
}
</script>
