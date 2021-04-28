<template>
  <main class="w-full py-12 bg-gray-200">
    <div class="max-w-3xl mx-auto space-y-6">
      <div>
        <h2 class="mb-4 text-2xl sm:text-3xl lg:text-4xl xl:text-4xl leading-tight text-gray-900 text-center"
            v-text="$t('pages.user.fiends-list.tittle')"
        />
      </div>
      <div class="py-2 align-middle inline-block px-4 sm:px-6 lg:px-8 w-full">
        <div class="shadow-xl overflow-hidden border-b border-gray-200 rounded-lg">
          <table class="w-full divide-y-2 divide-green-600">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col"
                    class="px-2 sm:px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    v-text="$t('pages.user.fiends-list.name')"
                />
                <th scope="col"
                    class="px-2 sm:px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    v-text="$t('pages.user.fiends-list.nick')"
                />
                <th scope="col"
                    class="px-2 sm:px-4 md:px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                    v-text="$t('pages.user.fiends-list.action')"
                />
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="friend in friends" :key="friend" class="hover:bg-gray-100">
                <td class="px-2 sm:px-4 md:px-6 py-4 whitespace-nowrap">
                  <p class="text-sm font-medium text-gray-900" v-text="friend.name" />
                </td>
                <td class="px-2 sm:px-4 md:px-6 py-4 whitespace-nowrap">
                  <p class="text-sm text-gray-500" v-text="friend.nick" />
                </td>
                <td class="px-2 sm:px-4 md:px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                  <button type="button"
                          class="inline-block p-1 sm:p-2 text-center text-white transition bg-green-600 rounded-full shadow ripple hover:shadow-lg hover:bg-green-700 focus:outline-none"
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
                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                  </button>
                  <button type="button"
                          class="inline-block p-1 sm:p-2 text-center text-white transition bg-red-500 rounded-full shadow ripple hover:shadow-lg hover:bg-red-600 focus:outline-none"
                  >
                    <svg class="w-4 sm:w-5 h-4 sm:h-5 text-white"
                         xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 20 20"
                         fill="currentColor"
                    >
                      <path fill-rule="evenodd"
                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                            clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="flex justify-end mt-6">
          <localized-link :to="{ name: 'Inviting-to-friends' }">
            <button type="button"
                    class="inline-block p-2 text-center text-white transition bg-yellow-500 rounded-full shadow ripple hover:shadow-lg hover:bg-yellow-600 focus:outline-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg"
                   class="h-5 w-5"
                   fill="none"
                   viewBox="0 0 24 24"
                   stroke="currentColor"
              >
                <path stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                />
              </svg>
            </button>
          </localized-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Friends",
  data() {
    return {
      friends: [
        {
          nick: "jane-cooper123",
          name: "Jane Cooper",
        },
        {
          nick: "jane-cooper321",
          name: "Jane ",
        }
      ]
    }
  }
}
</script>