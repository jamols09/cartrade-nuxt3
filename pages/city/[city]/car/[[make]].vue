<script setup>
const route = useRoute();
// const props = defineProps({ cars: Array });
const { data: cars, refresh } = await useFetchCars(route.params.city, {
  //using usefetch
  //server side api call during rendering
  minPrice: route.query.minPrice,
  maxPrice: route.query.maxPrice,
  make: route.params.make,
});
watch(
  () => route.query,
  () => window.location.reload() //refresh is not working
);
</script>
<template>
  <div>
    <CarCards v-if="cars.length" :cars="cars" />
    <h1 class="text-red-600 text-lg" v-else>No cars found</h1>
  </div>
  <!-- CARS PAGE -->
</template>
