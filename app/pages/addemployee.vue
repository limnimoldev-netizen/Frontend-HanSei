<template>
  <div class="fixed inset-0 bg-slate-800/50 backdrop-blur-sm flex justify-center items-center z-50 p-4">
    
    <div class="bg-white w-full max-w-2xl rounded-[32px] p-10 shadow-xl border border-slate-100">
      
      <div class="flex justify-between items-start mb-8">
        <div>
          <h2 class="text-2xl font-black text-slate-800">Add Employee</h2>
          <p class="text-slate-400 text-sm">Please fill out the form below to add a new employee.</p>
        </div>
        <button class="text-slate-300 hover:text-slate-500 text-2xl">✕</button>
      </div>

      <div class="grid grid-cols-2 gap-x-8 gap-y-6">
        
        <div class="space-y-1">
          <label class="text-[11px] font-black text-slate-400 uppercase ml-1">Employee ID</label>
          <input v-model="form.id" type="text" placeholder="122495" class="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 outline-none focus:border-blue-500 focus:bg-white transition-all">
        </div>

        <div class="space-y-1">
          <label class="text-[11px] font-black text-slate-400 uppercase ml-1">Full Name</label>
          <input v-model="form.name" type="text" placeholder="Alex Thompson" class="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 outline-none focus:border-blue-500 focus:bg-white transition-all">
        </div>

        <div class="col-span-2 space-y-2">
          <label class="text-[11px] font-black text-slate-400 uppercase ml-1">Employment Type</label>
          <div class="flex gap-4">
            <div 
              @click="form.type = 'Full-time'"
              :class="form.type === 'Full-time' ? 'border-blue-500 bg-blue-50' : 'border-slate-200 bg-white'"
              class="flex-1 border-2 p-4 rounded-2xl flex justify-between items-center cursor-pointer transition-all"
            >
              <span :class="form.type === 'Full-time' ? 'text-blue-600 font-bold' : 'text-slate-500'">Full-time</span>
              <div :class="form.type === 'Full-time' ? 'border-[6px] border-blue-500' : 'border-2 border-slate-200'" class="w-5 h-5 rounded-full bg-white"></div>
            </div>

            <div 
              @click="form.type = 'Part-time'"
              :class="form.type === 'Part-time' ? 'border-blue-500 bg-blue-50' : 'border-slate-200 bg-white'"
              class="flex-1 border-2 p-4 rounded-2xl flex justify-between items-center cursor-pointer transition-all"
            >
              <span :class="form.type === 'Part-time' ? 'text-blue-600 font-bold' : 'text-slate-500'">Part-time</span>
              <div :class="form.type === 'Part-time' ? 'border-[6px] border-blue-500' : 'border-2 border-slate-200'" class="w-5 h-5 rounded-full bg-white"></div>
            </div>
          </div>
        </div>

        <div class="space-y-1">
          <label class="text-[11px] font-black text-slate-400 uppercase ml-1">Job Title</label>
          <select v-model="form.title" class="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 outline-none appearance-none">
            <option>UI/UX Designer</option>
            <option>Frontend Developer</option>
          </select>
        </div>

        <div class="space-y-1">
          <label class="text-[11px] font-black text-slate-400 uppercase ml-1">Department</label>
          <select v-model="form.dept" class="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 outline-none appearance-none">
            <option>Design</option>
            <option>Development</option>
          </select>
        </div>

      </div>

      <div class="flex justify-between mt-12">
        <button class="px-10 py-4 font-bold text-slate-400 hover:text-slate-600">Cancel</button>
        <button class="px-10 py-4 bg-blue-600 text-white rounded-2xl font-bold shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all">
          Add Employee
        </button>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Simple form object to store data
const form = ref({
  id: '',
  name: '',
  type: 'Full-time', // Default selection
  title: 'UI/UX Designer',
  dept: 'Design'
})
</script>