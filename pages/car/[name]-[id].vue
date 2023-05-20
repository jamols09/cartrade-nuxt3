<script setup>
const route = useRoute();

const { data: car } = await useFetchCar(route.params.id);

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
    <CarDetailHero :car="car" />
    <CarDetailAttribute :features="car.features" />
    <CarDetailDescription :description="car.description" />
    <CarDetailContact />
  </div>
</template>
