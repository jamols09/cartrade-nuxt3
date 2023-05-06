<script setup>
const props = defineProps({
  title: String,
  name: String, //name of prop to be updated
  options: Array,
});

const emit = defineEmits(["changeInput"]);
const state = ref("");
const onChange = () => {
  emit("changeInput", state.value, props.name);
};
</script>

<template>
  <div class="flex flex-col w-[48%] mt-2">
    <label for="" class="text-cyan-500 mb-1 text-sm"></label>
    <select class="p-2 border w-100 rounded" @change="onChange" v-model="state">
      <option v-for="option in options" :key="option.id" :value="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>
