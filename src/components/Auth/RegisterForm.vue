<template>
  <div class="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-sm md:max-w-lg lg:max-w-xl w-full space-y-6">
      <div>
        <div class="flex justify-center">
          <localized-link to="/">
            <img class="mx-auto h-32 w-auto" src="@/assets/images/logo/icon.png">
          </localized-link>
        </div>
        <h2 class="mt-6 text-center text-2xl sm:text-3xl font-extrabold text-gray-900">
          {{ $t('pages.register.tittle') }}
        </h2>
      </div>
      <form action="#" method="POST">
        <div class="shadow-2xl overflow-hidden rounded-md border-b-2 border-t-2 border-yellow-500">
          <div class="px-4 py-5 sm:p-6">
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 md:col-span-3">
                <label for="nick" class="block text-sm font-medium text-gray-700">
                  {{ $t('pages.register.nick.label') }}
                </label>
                <input
                  id="nick"
                  type="text"
                  name="nick"
                  autocomplete="given-name"
                  required
                  class="mt-1 focus:ring-green-500 focus:border-green-500 placeholder-gray-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  :placeholder="$t('pages.register.nick.description')"
                >
              </div>

              <div class="col-span-6 md:col-span-3">
                <label for="email_address" class="block text-sm font-medium text-gray-700">
                  {{ $t('pages.register.email.label') }}
                </label>
                <input
                  id="email_address"
                  type="email"
                  name="email_address"
                  autocomplete="email"
                  required
                  class="mt-1 focus:ring-green-500 focus:border-green-500 placeholder-gray-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  :placeholder="$t('pages.register.email.description')"
                >
              </div>
              <div class="col-span-6 md:col-span-3">
                <label for="password" class="block text-sm font-medium text-gray-700">
                  {{ $t('pages.register.password.label') }}
                </label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  autocomplete="email"
                  required
                  class="mt-1 focus:ring-green-500 focus:border-green-500 placeholder-gray-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  :placeholder="$t('pages.register.password.description')"
                >
              </div>

              <div class="col-span-6 md:col-span-3">
                <label for="password_confirm" class="block text-sm font-medium text-gray-700">
                  {{ $t('pages.register.password-confirm.label') }}
                </label>
                <input
                  id="password_confirm"
                  type="password"
                  name="password_confirm"
                  autocomplete="email"
                  required
                  class="mt-1 focus:ring-green-500 focus:border-green-500 placeholder-gray-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  :placeholder="$t('pages.register.password-confirm.description')"
                >
              </div>
            </div>
          </div>

          <div class="grid grid-cols-6 gap-6 px-4 py-3 bg-gray-50 sm:px-6">
            <button
              type="submit"
              class="col-start-4 col-end-7 py-3 border shadow-sm text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              {{ $t('pages.register.sign-up') }}
            </button>
          </div>
        </div>
      </form>
      <div class="flex items-center justify-between">
        <localized-link class="text-sm" to="/">
          <button type="button" class="text-yellow-600 font-medium hover:text-yellow-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="w-5 h-5 inline-block align-text-top"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <span class="ml-1">{{ $t('pages.register.back-to-homepage') }}</span>
          </button>
        </localized-link>
        <localized-link class="text-sm" to="/auth/login">
          <button type="button" class="text-yellow-600 font-medium hover:text-yellow-800">
            {{ $t('pages.register.back-to-login') }}
          </button>
        </localized-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterForm"
}
</script>
