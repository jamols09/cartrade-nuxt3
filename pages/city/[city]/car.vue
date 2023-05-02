<script setup>
const route = useRoute();
const { capitalizeTitle } = useUtilities();
useHead({
  title: `${
    route.params.make ? capitalizeTitle(route.params.make) : "Cars"
  } in ${capitalizeTitle(route.params?.city)}`,
});
</script>
<template>
  <div class="mt-32 flex">
    <CarSidebar />
    <NuxtPage />
  </div>
</template>
