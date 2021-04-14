<template>
  <main>
    <div class="mt-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 md:mt-24 lg:mt-26 xl:mt-28">
      <div class="w-full py-6 flex flex-wrap flex-col md:flex-row items-center">
        <div class="flex w-full md:w-3/5 flex-col text-center md:text-left">
          <h1
            class="mb-4 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight text-gray-900"
            v-text="$t('pages.home.introduction.tittle')"
          />
          <p
            class="leading-normal sm:text-2xl lg:text-3xl mb-8 text-gray-500"
            v-text="$t('pages.home.introduction.description')"
          />
        </div>
        <div class="flex w-full md:w-2/5 justify-center">
          <img class="w-3/6 sm:w-2/5 md:w-3/6" src="@/assets/images/logo/icon.png">
        </div>
      </div>
    </div>
    <div class="py-12 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="mt-10">
          <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div class="relative">
              <dt>
                <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-600 text-white">
                  <svg
                    class="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </div>
                <p
                  class="ml-16 text-lg leading-6 font-medium text-gray-900"
                  v-text="$t('pages.home.game-modes.invitation.tittle')"
                />
              </dt>
              <dd
                class="mt-2 ml-16 text-base text-gray-500"
                v-text="$t('pages.home.game-modes.invitation.description')"
              />
            </div>
            <div class="relative">
              <dt>
                <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-yellow-500 text-white">
                  <svg
                    class="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                    />
                  </svg>
                </div>
                <p
                  class="ml-16 text-lg leading-6 font-medium text-gray-900"
                  v-text="$t('pages.home.game-modes.random.tittle')"
                />
              </dt>
              <dd
                class="mt-2 ml-16 text-base text-gray-500"
                v-text="$t('pages.home.game-modes.random.description')"
              />
            </div>
            <div class="relative">
              <dt>
                <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-600 md:bg-yellow-500 text-white">
                  <svg
                    class="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <p
                  class="ml-16 text-lg leading-6 font-medium text-gray-900"
                  v-text="$t('pages.home.game-modes.single.tittle')"
                />
              </dt>
              <dd
                class="mt-2 ml-16 text-base text-gray-500"
                v-text="$t('pages.home.game-modes.single.description')"
              />
            </div>
            <div class="relative">
              <dt>
                <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-yellow-500 md:bg-green-600 text-white">
                  <svg
                    class="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                    />
                  </svg>
                </div>
                <p
                  class="ml-16 text-lg leading-6 font-medium text-gray-900"
                  v-text="$t('pages.home.game-modes.correspondence.tittle')"
                />
              </dt>
              <dd
                class="mt-2 ml-16 text-base text-gray-500"
                v-text="$t('pages.home.game-modes.correspondence.description')"
              />
            </div>
          </dl>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Main",
};
</script>