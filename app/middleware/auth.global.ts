export default defineNuxtRouteMiddleware((to, from) => {
  const token = useCookie('auth_token')

  // If there is no token and the user is NOT on the login page, redirect to login
  if (!token.value && to.path !== '/login') {
    return navigateTo('/login')
  }

  // If the user IS logged in and tries to go to /login, send them to dashboard
  if (token.value && to.path === '/login') {
    return navigateTo('/')
  }
})