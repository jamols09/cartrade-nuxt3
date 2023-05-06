<script setup>
const user = useSupabaseUser();
const supabase = useSupabaseClient();

const logout = async () => {
  // 1) make user.value = null
  // 2) remove jwt from cookies

    const { error } = supabase.auth.signOut();
  //   if (error) {
  //     console.log(error);
  //   }

  try {
    await $fetch("/api/_supabase/session", {
      method: "POST",
      body: { event: "SIGNED_OUT", session: null },
    });
  } catch (error) {
    console.log(error);
  }

  user.value = null;
  navigateTo("/");
};
</script>
<template>
  <!-- NAVBAR -->
  <header
    class="sticky top-0 z-50 flex justify-between items-center space-x-1 border-b bg-white p-4 shadow-md"
  >
    <!-- <a class="text-3xl font-mono" href="">cartrader</a> -->
    <NuxtLink class="text-3xl font-mono" to="/">Cartrader</NuxtLink>
    <div v-if="user" class="flex">
      <NuxtLink to="/profile/listings" class="mr-5">Profile</NuxtLink>
      <p class="cursor-pointer">Logout</p>
    </div>
    <NuxtLink v-else to="/login">Login</NuxtLink>
  </header>
  <!-- NAVBAR -->
</template>
