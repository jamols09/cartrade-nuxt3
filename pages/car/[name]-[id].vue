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

if (!car.value) {
  throw createError({
    statusCode: 404,
    message: `Car with ID of ${route.params.id} does not exist`,
  });
}

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
