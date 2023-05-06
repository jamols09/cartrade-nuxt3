export default defineNuxtRouteMiddleware((to, form) => {
  const user = useSupabaseUser();
  if (user.value) {
    return;
  }
  return navigateTo("/login");
});
