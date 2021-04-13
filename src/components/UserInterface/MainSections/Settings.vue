<template>
  <main class="w-full py-12 bg-gray-200">
    <div class="max-w-3xl mx-auto space-y-6">
      <div>
        <h2 class="mb-4 text-2xl sm:text-3xl lg:text-3xl xl:text-4xl leading-tight text-gray-900 text-center">
          {{ $t('pages.user.settings.tittle') }}
        </h2>
      </div>
      <div class="py-2 align-middle inline-block px-4 sm:px-6 lg:px-8 w-full">
        <div class="bg-gray-50 shadow-2xl overflow-hidden rounded-md border-b-2 border-t-2 border-yellow-500">
          <div class="md:inline-flex space-y-6 md:space-y-0 w-full p-4 text-gray-600 items-center">
            <div class="md:w-1/3 max-w-sm mx-auto">
              <h2 v-text="$t('pages.user.settings.account')" />
            </div>
            <div class="md:w-2/3 max-w-sm mx-auto">
              <label class="block text-sm font-medium text-gray-500" v-text="$t('pages.user.settings.email')" />
              <div class="w-full inline-flex">
                <div class="pt-2 w-1/12">
                  <svg
                    fill="none"
                    class="w-6 text-gray-400 mx-auto"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <input
                  type="email"
                  class="focus:ring-green-500 focus:border-green-500 placeholder-gray-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  :placeholder="user.email"
                  disabled
                >
              </div>
            </div>
          </div>
          <hr>
          <div class="md:inline-flex space-y-6 md:space-y-0 w-full p-4 text-gray-600 items-center">
            <div class="md:w-1/3 mx-auto max-w-sm">
              <h2 v-text="$t('pages.user.settings.personal-info')" />
            </div>
            <div class="md:w-2/3 mx-auto max-w-sm space-y-2">
              <div>
                <label class="text-sm text-gray-500" v-text="$t('pages.user.settings.name')" />
                <div class="w-full inline-flex">
                  <div class="w-1/12 pt-2">
                    <svg
                      fill="none"
                      class="w-6 text-gray-400 mx-auto"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    class="focus:ring-green-500 focus:border-green-500 placeholder-gray-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    :placeholder="user.name"
                  >
                </div>
              </div>
              <div>
                <label class="text-sm text-gray-500" v-text="$t('pages.user.settings.nick')" />
                <div class="w-full inline-flex">
                  <div class="pt-2 w-1/12">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 text-gray-400 mx-auto"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    class="focus:ring-green-500 focus:border-green-500 placeholder-gray-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    :placeholder="user.nick"
                  >
                </div>
              </div>
            </div>
          </div>

          <hr>

          <div class="grid grid-cols-6 gap-8 p-8">
            <div class="col-span-3">
              <button
                type="button"
                class="w-full p-3 border shadow-lg text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                v-text="$t('pages.user.settings.change-password')"
              />
            </div>
            <div class="col-span-3">
              <button
                type="button"
                class="w-full p-3 border shadow-lg text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                v-text="$t('pages.user.settings.delete-account')"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Settings",
  data() {
    return {
      user:
        {
          nick: "jane-cooper123",
          name: "Jane Cooper",
          email: "email@example.com"
        }
    }
  }
}
</script>