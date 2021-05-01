<template>
  <div class="w-full bg-gray-400 rounded-md">
    <div :class="width<=75 ? 'bg-yellow-600': 'bg-red-600'"
         class="py-1 rounded-md timer-bar"
         :style="`width: ${width}%;`"
    />
  </div>
</template>

<script>
export default {
  name: "TimerBar",

  props: {
    width: {
      type: Number
    }
  }
}
</script>