<script setup>
const props = defineProps({
  cars: Array,
});
const favorite = useLocalStorage("favorite", {});

const onFavorite = (id) => {
  if (id in favorite.value) {
    delete favorite.value[id];
  } else {
    favorite.value = {
      ...favorite.value,
      [id]: true,
    };
  }
};
</script>
<template>
  <div class="w-full">
    <CarCard
      v-for="car in props.cars"
      :key="car.id"
      :car="car"
      @favor="onFavorite"
      :favored="car.id in favorite"
    />
  </div>
</template>
