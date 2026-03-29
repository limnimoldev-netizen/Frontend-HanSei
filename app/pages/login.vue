<script setup>
import { ref } from 'vue';
import { useRouter, useCookie } from '#imports';

const router = useRouter();

// Cookies for token and user info
const tokenCookie = useCookie('auth_token', { maxAge: 60 * 60 * 24 });
const userDataCookie = useCookie('user_data', { maxAge: 60 * 60 * 24 });

const form = ref({
  username: '',
  password: ''
});

const loading = ref(false);
const errorMessage = ref('');

const handleLogin = async () => {
  loading.value = true;
  errorMessage.value = '';

  try {
    const res = await $fetch('http://127.0.0.1:8000/api/login', {
      method: 'POST',
      body: form.value,
    });

    // Save the Sanctum token in a cookie
    tokenCookie.value = res.access_token;

    // Save user info in a cookie
    userDataCookie.value = res.user;

    // Redirect to dashboard/home
    router.push('/');
  } catch (err) {
    console.error('Login error:', err);
    if (err?.data?.message) {
      errorMessage.value = err.data.message;
    } else {
      errorMessage.value = 'Invalid username or password';
    }
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