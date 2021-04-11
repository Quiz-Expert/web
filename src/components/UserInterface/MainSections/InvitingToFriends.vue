<template>
  <main class="w-full py-12 bg-gray-200">
    <div class="max-w-3xl mx-auto space-y-6 ">
      <div class="flex justify-center">
        <h2
          class="mb-4 text-2xl sm:text-3xl lg:text-4xl xl:text-4xl leading-tight text-gray-900 text-center"
          v-text="$t('pages.user.inviting-to-friends.tittle')"
        />
      </div>
      <div class="flex justify-center px-4 sm:px-6 lg:px-8">
        <div class="w-full max-w-md">
          <div class="bg-white shadow-lg rounded-lg px-3 py-2 mb-4">
            <div class="relative text-gray-600 focus-within:text-gray-400">
              <span class="absolute inset-y-0 flex items-center pl-2">
                <button
                  type="submit"
                  class="p-1 focus:outline-none focus:shadow-outline"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    class="w-6 h-6"
                  >
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </span>
              <input
                type="search"
                name="q"
                class="py-2 text-sm text-gray-500 bg-gray-200 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900 w-full focus:ring-offset-yellow-500"
                :placeholder="$t('pages.user.inviting-to-friends.search')"
                autocomplete="off"
              >
            </div>
            <div v-for="friend in friends" :key="friend" class="my-1 text-sm">
              <div
                class="flex justify-between items-center cursor-pointer text-gray-700 rounded-md hover:bg-gray-100 px-2 py-2"
              >
                <div>
                  <div class="text-sm font-medium text-gray-900">
                    {{ friend.name }}
                  </div>
                  <div class="text-sm text-gray-500">
                    {{ friend.nick }}
                  </div>
                </div>
                <div>
                  <button
                    type="button"
                    class="inline-block p-1 sm:p-2 text-center text-white transition bg-yellow-500 rounded-full shadow ripple hover:shadow-lg hover:bg-yellow-600 focus:outline-none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-4 sm:w-5 h-4 sm:h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "InvitingToFriends",
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