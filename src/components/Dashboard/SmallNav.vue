<template>
  <div class="flex items-center space-x-4">
    <button type="button"
            class="flex text-gray-600 dark:text-gray-300 focus:outline-none"
    >
      <localized-link  :to="{ name: 'User' }">
        <svg xmlns="http://www.w3.org/2000/svg"
             class="h-6 w-6"
             fill="none"
             viewBox="0 0 24 24"
             stroke="currentColor"
        >
          <path stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      </localized-link>
    </button>
    <button type="button"
            class="flex text-gray-600 dark:text-gray-300 focus:outline-none"
            @click="logout()"
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
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
        />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: "SmallNav",

  data: () => ({
    isOpenProfile: false,
  }),

  methods: {
    logout() {
      this.$store.dispatch("LOGOUT").then(() => {
        this.$router.push({name: 'Homepage'});
      });
    }
  }
}
</script>