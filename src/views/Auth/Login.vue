<template>
  <div class="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-xs md:max-w-sm w-full space-y-6">
      <div>
        <div class="flex justify-center">
          <localized-link :to="{ name :'Homepage' }">
            <img class="mx-auto h-32 w-auto" src="@/assets/images/logo/icon.png">
          </localized-link>
        </div>
        <h2 class="mt-6 text-center text-2xl sm:text-3xl font-extrabold text-gray-900"
            v-text="$t('pages.login.tittle')"
        />
      </div>
      <div v-if="error.alertOpen" class="text-white text-center p-3 pr-5 rounded-md relative bg-red-500">
        <span class="inline-block align-middle" v-text="error.message" />
        <button type="button"
                class="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-3 mr-3 outline-none focus:outline-none"
                @click="clearErrors()"
        >
          <span>×</span>
        </button>
      </div>
      <form class="mt-8 space-y-6" method="POST" @submit.prevent="login">
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="email-address" class="sr-only" v-text="$t('pages.login.email.label')" />
            <input id="email-address"
                   v-model="userData.email"
                   name="email"
                   type="email"
                   autocomplete="email"
                   required
                   :class="checkInput('email') ? 'ring-red-500 border-red-500 z-10' : 'border-gray-300'"
                   class="relative block w-full px-3 py-2 border placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10"
                   :placeholder="$t('pages.login.email.description')"
            >
          </div>
          <div>
            <label for="password"
                   class="sr-only"
                   v-text="$t('pages.login.password.label')"
            />
            <input id="password"
                   v-model="userData.password"
                   name="password"
                   type="password"
                   autocomplete="current-password"
                   required
                   :class="checkInput('password') ? 'ring-red-500 border-red-500 z-10' : 'border-gray-300'"
                   class="relative block w-full px-3 py-2 border placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10"
                   :placeholder="$t('pages.login.password.description')"
            >
          </div>
        </div>
        <div>
          <button type="submit"
                  class="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <svg class="h-5 w-5 text-green-600 group-hover:text-green-500"
                   xmlns="http://www.w3.org/2000/svg"
                   viewBox="0 0 20 20"
                   fill="currentColor"
                   aria-hidden="true"
              >
                <path fill-rule="evenodd"
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
        <localized-link class="text-sm" :to="{ name :'Homepage' }">
          <button type="button" class="text-yellow-600 font-medium hover:text-yellow-800">
            <svg xmlns="http://www.w3.org/2000/svg"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke="currentColor"
                 class="w-5 h-5 inline-block align-text-top"
            >
              <path stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <span class="ml-1" v-text="$t('pages.login.back-to-homepage')" />
          </button>
        </localized-link>
        <localized-link class="text-sm" :to="{ name :'Register' }">
          <button type="button"
                  class="text-yellow-600 font-medium hover:text-yellow-800"
                  v-text="$t('pages.login.back-to-register')"
          />
        </localized-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",

  data() {
    return {
      error: {
        alertOpen: false,
        message: '',
        data: {},
      },

      userData: {
        email: '',
        password: '',
      }
    }
  },

  methods: {
    checkInput(name) {
      return name in this.error.data;
    },

    clearErrors() {
      this.error.alertOpen = false;
      this.error.message = '';
      this.error.data = {};
    },

    login() {
      this.clearErrors();
      this.$store.dispatch("LOGIN", this.userData)
        .then(() => {
          this.$router.push({name: 'User'});
          this.$store.dispatch("LOGIN_NOTIFICATION", this.$t('pages.login.message'));
        })
        .catch(err => {
          console.log(err);
          this.error.alertOpen = true;
          this.error.message = err.response.data.message;
          this.error.data = err.response.data.errors;
        })
    }
  }
}
</script>