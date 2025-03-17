<template>
  <button class="button-ui" @click="handleClick">
    <slot></slot>
    {{ count }}
  </button>
</template>

<script setup lang="ts">
const count = ref(0);

const handleClick = () => {
  count.value++;
  console.log("Button clicked", count.value);
};
</script>
