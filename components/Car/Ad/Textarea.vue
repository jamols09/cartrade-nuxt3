<script setup>
const props = defineProps({
  title: String,
  name: String, //name of prop to be updated
  placeholder: String,
});

const emit = defineEmits(["changeInput"]);
const state = ref("");
const onChange = () => {
  emit("changeInput", state.value, props.name);
};
</script>

<template>
  <div class="flex flex-col w-[100%] mt-2">
    <label for="" class="text-cyan-500 mb-1 text-sm"></label>
    <textarea
      type="text"
      class="p-2 border w-100 rounded"
      :placeholder="placeholder"
      v-model="state"
      :name="name"
      @input="onChange"
    />
  </div>
</template>
