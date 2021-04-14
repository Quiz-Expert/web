<template>
  <main class="flex items-center justify-center py-12 bg-gray-200">
    <div class="max-w-6xl w-full space-y-6">
      <div>
        <h2
          class="mb-4 text-2xl sm:text-3xl lg:text-3xl xl:text-4xl leading-tight text-gray-900 text-center"
          v-text="$t('pages.user.your-profile.tittle')"
        />
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Profile"
}
</script>