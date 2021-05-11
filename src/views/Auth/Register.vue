<template>
  <div class="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-sm md:max-w-lg lg:max-w-xl space-y-6">
      <div>
        <div class="flex justify-center">
          <localized-link :to="{ name :'Homepage' }">
            <img class="mx-auto h-32 w-auto" src="@/assets/images/logo/icon.png">
          </localized-link>
        </div>
        <h2 class="mt-6 text-center text-2xl sm:text-3xl font-extrabold text-gray-900"
            v-text="$t('pages.register.tittle')"
        />
      </div>
      <form method="POST" @submit.prevent="register">
        <div class="shadow-2xl overflow-hidden rounded-md border-b-2 border-t-2 border-yellow-500">
          <div class="px-4 py-5 sm:p-6">
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 md:col-span-3">
                <label for="name"
                       class="block text-sm font-medium text-gray-700"
                       v-text="$t('pages.register.name.label')"
                />
                <input id="name"
                       v-model="userData.name"
                       type="text"
                       name="name"
                       autocomplete="given-name"
                       required
                       :class="checkInput('name') ? 'ring-red-500 border-red-500' : 'border-gray-300'"
                       class="mt-1 focus:ring-green-500 focus:border-green-500  placeholder-gray-500 block w-full shadow-sm sm:text-sm rounded-md"
                       :placeholder="$t('pages.register.name.description')"
                >
                <span v-show="checkInput('name')"
                      class="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1"
                      v-text="getErrorMessage('name')"
                />
              </div>
              <div class="col-span-6 md:col-span-3 mb-3">
                <label for="email_address"
                       class="block text-sm font-medium text-gray-700"
                       v-text="$t('pages.register.email.label')"
                />
                <input id="email_address"
                       v-model="userData.email"
                       type="email"
                       name="email_address"
                       autocomplete="email"
                       required
                       :class="checkInput('email') ? 'ring-red-500 border-red-500' : 'border-gray-300'"
                       class="mt-1 focus:ring-green-500 focus:border-green-500 placeholder-gray-500 block w-full shadow-sm sm:text-sm rounded-md"
                       :placeholder="$t('pages.register.email.description')"
                >
                <span v-show="checkInput('email')"
                      class="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1"
                      v-text="getErrorMessage('email')"
                />
              </div>
            </div>
            <div class="grid grid-cols-6 gap-6 my-6">
              <div class="col-span-6 md:col-span-3">
                <label for="password"
                       class="block text-sm font-medium text-gray-700"
                       v-text="$t('pages.register.password.label')"
                />
                <input id="password"
                       v-model="userData.password"
                       type="password"
                       name="password"
                       autocomplete="email"
                       required
                       :class="checkInput('password') ? 'ring-red-500 border-red-500' : 'border-gray-300'"
                       class="mt-1 focus:ring-green-500 focus:border-green-500 placeholder-gray-500 block w-full shadow-sm sm:text-sm rounded-md"
                       :placeholder="$t('pages.register.password.description')"
                >
                <span v-show="checkInput('password')"
                      class="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1"
                      v-text="getErrorMessage('password')"
                />
              </div>
              <div :class="!checkInput('password')? 'mb-4':''"
                   class="col-span-6 md:col-span-3"
              >
                <label for="password_confirm"
                       class="block text-sm font-medium text-gray-700"
                       v-text="$t('pages.register.password-confirm.label')"
                />
                <input id="password_confirm"
                       v-model="userData.password_confirmation"
                       type="password"
                       name="password_confirm"
                       autocomplete="email"
                       required
                       :class="checkInput('password') ? 'ring-red-500 border-red-500' : 'border-gray-300'"
                       class="mt-1 focus:ring-green-500 focus:border-green-500 placeholder-gray-500 block w-full shadow-sm sm:text-sm rounded-md"
                       :placeholder="$t('pages.register.password-confirm.description')"
                >
                <span v-show="checkInput('password')"
                      class="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1"
                      v-text="getErrorMessage('password')"
                />
              </div>
            </div>
          </div>
          <div class="grid grid-cols-6 gap-6 px-4 py-3 bg-gray-50 sm:px-6">
            <button type="submit"
                    class="col-start-4 col-end-7 py-3 border shadow-sm text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    v-text="$t('pages.register.sign-up')"
            />
          </div>
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
            <span class="ml-1" v-text="$t('pages.register.back-to-homepage')" />
          </button>
        </localized-link>
        <localized-link class="text-sm" :to="{ name :'Login' }">
          <button type="button" 
                  class="text-yellow-600 font-medium hover:text-yellow-800"
                  v-text="$t('pages.register.back-to-login')"
          />
        </localized-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",

  data() {
    return {
      error: {
        message: '',
        data: {},
      },

      userData: {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
      }
    }
  },

  methods: {
    checkInput(name) {
      return name in this.error.data;
    },

    getErrorMessage(name) {
      return (this.error.data[name] + "").toString();
    },

    register() {
      this.$store.dispatch("REGISTER", this.userData)
        .then(() => {
          this.$router.push({name: 'User'});
          this.$store.dispatch("REGISTER_NOTIFICATION", this.$t('pages.register.message'));
        })
        .catch(err => {
          console.log(err);
          this.error.alertOpen = true;
          const response = err.response.data;
          this.error.message = response.message;
          this.error.data = response.errors;
        })
    }
  }
}
</script>
