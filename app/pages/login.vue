<script setup>
// This ensures the sidebar layout is NOT shown on this page
definePageMeta({
  layout: false,
});

const router = useRouter();
// Cookie for the security token
const tokenCookie = useCookie('auth_token', { maxAge: 60 * 60 * 24 }); 
// Cookie for the user's profile info (Full Name, etc.)
const userDataCookie = useCookie('user_data', { maxAge: 60 * 60 * 24 });

const form = ref({
  username: '', // Changed from user_id to username to match your table
  password: ''
});

const loading = ref(false);
const errorMessage = ref('');

const handleLogin = async () => {
  loading.value = true;
  errorMessage.value = '';

  try {
    // Replace with your actual Laravel API URL
    const response = await $fetch('http://localhost:8000/api/login', {
      method: 'POST',
      body: form.value,
    });

    // 1. Save the token returned from Laravel Sanctum
    tokenCookie.value = response.access_token;

    // 2. Save the user object (this includes full_name and username for the sidebar)
    userDataCookie.value = response.user;

    // 3. Go to the dashboard/home page
    router.push('/');
  } catch (error) {
    errorMessage.value = 'Invalid Username or Password. Please try again.';
    console.error('Login error:', error);
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 p-6 font-sans">
    <div class="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
      <div class="text-center mb-8">
        <div class="flex justify-center mb-4">
           <img src="/../app/assets/logo-company.png" alt="HanSei" class="w-20 h-20 object-contain">
        </div>
        <h1 class="text-2xl font-bold text-gray-800">HanSei Electronics</h1>
        <p class="text-gray-500">Please login to your account</p>
      </div>

      <form @submit.prevent="handleLogin" class="space-y-6">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Username</label>
          <input 
            v-model="form.username"
            type="text" 
            required
            placeholder="Enter your username"
            class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input 
            v-model="form.password"
            type="password" 
            required
            placeholder="••••••••"
            class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
          />
        </div>

        <p v-if="errorMessage" class="text-red-500 text-sm mt-2 text-center font-medium">
          {{ errorMessage }}
        </p>

        <button 
          type="submit" 
          :disabled="loading"
          class="w-full bg-primary hover:brightness-110 text-white font-bold py-3 rounded-lg transition duration-200 shadow-md disabled:bg-blue-300"
        >
          <span v-if="loading" class="flex items-center justify-center gap-2">
            <Icon name="mdi:loading" class="animate-spin text-xl" />
            Logging in...
          </span>
          <span v-else>Login</span>
        </button>
      </form>

      <div class="mt-8 text-center text-xs text-gray-400 font-medium">
        &copy; 2026 HanSei Electronics Co., Ltd.
      </div>
    </div>
  </div>
</template>