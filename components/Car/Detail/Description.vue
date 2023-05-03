<script setup>
const prop = defineProps({
  description: Object,
});
</script>

<template>
  <div class="mt-5">
    <p class="mb-10">
      {{ description }}
    </p>
  </div>
</template>
