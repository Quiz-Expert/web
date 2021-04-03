<template>
  <div class="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-xs md:max-w-sm w-full space-y-6">
      <div>
        <div class="flex justify-center">
          <localized-link to="/">
            <img class="mx-auto h-32 w-auto" src="@/assets/images/logo/icon.png">
          </localized-link>
        </div>
        <h2 class="mt-6 text-center text-2xl sm:text-3xl font-extrabold text-gray-900">
          {{ $t('pages.login.tittle') }}
        </h2>
      </div>
      <form class="mt-8 space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" value="true">
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="email-address" class="sr-only">{{ $t('pages.login.email.label') }}</label>
            <input id="email-address"
                   name="email"
                   type="email"
                   autocomplete="email"
                   required
                   class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10"
                   :placeholder="$t('pages.login.email.description')"
            >
          </div>
          <div>
            <label for="password" class="sr-only">{{ $t('pages.login.password.label') }}</label>
            <input id="password"
                   name="password"
                   type="password"
                   autocomplete="current-password"
                   required
                   class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10"
                   :placeholder="$t('pages.login.password.description')"
            >
          </div>
        </div>
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input
              id="remember_me"
              name="remember_me"
              type="checkbox"
              class="h-4 w-4 text-green-500 focus:ring-green-500 border-gray-300 rounded"
            >
            <label for="remember_me" class="ml-2 block text-sm text-gray-900">
              {{ $t('pages.login.remember-me') }}
            </label>
          </div>
          <localized-link class="text-sm" to="/auth/forgot-password">
            <button type="button" class="text-yellow-600 font-medium hover:text-yellow-800">
              {{ $t('pages.login.forgot-password') }}
            </button>
          </localized-link>
        </div>
        <div>
          <button
            type="submit"
            class="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <svg
                class="h-5 w-5 text-green-600 group-hover:text-green-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            {{ $t('pages.login.sign-in') }}
          </button>
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
            <span class="ml-1">{{ $t('pages.login.back-to-homepage') }}</span>
          </button>
        </localized-link>
        <localized-link class="text-sm" to="/auth/register">
          <button type="button" class="text-yellow-600 font-medium hover:text-yellow-800">
            {{ $t('pages.login.back-to-register') }}
          </button>
        </localized-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginForm"
}
</script>