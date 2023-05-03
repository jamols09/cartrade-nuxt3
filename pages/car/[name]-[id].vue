<script setup>
const route = useRoute();
const { cars } = useCars();
const { capitalizeTitle } = useUtilities();
useHead({
  title: capitalizeTitle(route.params.name),
});

const car = computed(() => {
  return cars.find((c) => {
    return c.id === parseInt(route.params.id);
  });
});

definePageMeta({
  layout: "custom",
});
</script>
<template>
  <div v-if="car">
    <CarDetailHero />
    <CarDetailAttribute />
    <CarDetailDescription />
    <CarDetailContact />
  </div>
</template>
