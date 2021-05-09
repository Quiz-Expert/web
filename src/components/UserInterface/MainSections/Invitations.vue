<template>
  <main class="w-full py-12">
    <div class="max-w-3xl mx-auto space-y-6">
      <div class="px-4 sm:px-6 lg:px-8">
        <ul class="grid grid-cols-4 gap-6">
          <li class="flex-auto text-center col-span-4 md:col-span-2 ">
            <a class="font-bold uppercase py-2 md:py-3 shadow-lg rounded block cursor-pointer"
               :class="{'bg-gray-300': openTab !== 1, 'bg-green-600 text-gray-200': openTab === 1}"
               @click="toggleTabs(1)"
               v-text="$t('pages.user.invitation-list.friend.tittle')"
            />
          </li>
          <li class="flex-auto text-center col-span-4 md:col-span-2">
            <a class="font-bold uppercase py-2 md:py-3 shadow-lg rounded block cursor-pointer"
               :class="{'bg-gray-300': openTab !== 2, 'bg-green-600 text-gray-200': openTab === 2}"
               @click="toggleTabs(2)"
               v-text="$t('pages.user.invitation-list.game.tittle')"
            />
          </li>
        </ul>
      </div>
      <div :class="{'hidden': openTab !== 1, 'block': openTab === 1}"
           class="py-2 align-middle inline-block px-4 sm:px-6 lg:px-8 w-full"
      >
        <div class="shadow-xl overflow-hidden border-b border-gray-200 rounded-lg">
          <table class="w-full divide-y-2 divide-green-600">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col"
                    class="px-2 sm:px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    v-text="$t('pages.user.invitation-list.friend.name')"
                />
                <th scope="col"
                    class="px-2 sm:px-4 md:px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                    v-text="$t('pages.user.invitation-list.friend.action')"
                />
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="incomingFriend in incomingFriends.data" :key="incomingFriend" class="hover:bg-gray-100">
                <td class="px-2 sm:px-4 md:px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div>
                      <p class="text-sm font-medium text-gray-900" v-text="incomingFriend.user.name" />
                    </div>
                  </div>
                </td>
                <td class="px-2 sm:px-4 md:px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                  <button type="button"
                          class="inline-block p-1 sm:p-2 text-center text-white transition bg-green-600 rounded-full shadow ripple hover:shadow-lg hover:bg-green-700 focus:outline-none"
                          @click="acceptInvitationToFriend(incomingFriend.id)"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg"
                         class="w-4 sm:w-5 h-4 sm:h-5"
                         viewBox="0 0 20 20"
                         fill="currentColor"
                    >
                      <path fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                  <button type="button"
                          class="inline-block p-1 sm:p-2 text-center text-white transition bg-red-500 rounded-full shadow ripple hover:shadow-lg hover:bg-red-600 focus:outline-none"
                          @click="rejectInvitationToFriend(incomingFriend.id)"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg"
                         class="w-4 sm:w-5 h-4 sm:h-5 text-white"
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
        </div>
      </div>
      <div :class="{'hidden': openTab !== 2, 'block': openTab === 2}"
           class="py-2 align-middle inline-block px-4 sm:px-6 lg:px-8 w-full"
      >
        <div class="shadow-xl overflow-hidden border-b border-gray-200 rounded-lg">
          <table class="w-full divide-y-2 divide-green-600">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col"
                    class="px-2 sm:px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    v-text="$t('pages.user.invitation-list.game.name')"
                />
                <th scope="col"
                    class="px-2 sm:px-4 md:px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                    v-text="$t('pages.user.invitation-list.game.action')"
                />
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200" />
          </table>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "Invitations",

  data() {
    return {
      openTab: 1,
    }
  },

  methods: {
    loadPage() {
      this.$store.dispatch("INCOMING_FRIENDS");
    },

    toggleTabs(tabNumber) {
      this.openTab = tabNumber;
    },

    acceptInvitationToFriend(id) {
      this.$store.dispatch("ACCEPT_INVITATION_TO_FRIEND", id)
        .then(() => {
          this.loadPage();
        });
    },

    rejectInvitationToFriend(id) {
      this.$store.dispatch("REJECT_INVITATION_TO_FRIEND", id)
        .then(() => {
          this.loadPage();
        });
    }
  },

  mounted() {
    this.loadPage();
  },

  unmounted() {
    this.$store.dispatch("DISCARD_INCOMING_FRIENDS");
  },

  computed: {
    ...mapGetters(['incomingFriends']),
  }
}
</script>