export default defineNuxtRouteMiddleware((to, form) => {
  const user = useSupabaseUser();
  if (to.path.includes("profile")) {
    if (user.value) {
      return;
    }
    return navigateTo("/login");
  }
});
