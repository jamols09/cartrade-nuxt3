<script setup>
const route = useRoute();
const { capitalizeTitle } = useUtilities();
useHead({
  title: capitalizeTitle(route.params.name),
});

definePageMeta({
  layout: "custom",
});
</script>
<template>
  <div>
    <CarDetailHero />
    <CarDetailAttribute />
    <CarDetailDescription />
    <CarDetailContact />
  </div>
</template>
