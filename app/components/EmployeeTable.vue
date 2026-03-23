<template>
    
    <div class="mt-6 bg-white border border-gray-200 rounded-2xl  overflow-visible font-san">
        
        <div class="bg-primary border-b  flex items-center text-[#FFFF] text-base font-black  px-6 py-5">
            
            <div class="w-10">
                <input type="checkbox" @change="toggleAll" :checked="isAllSelected" class="w-4 h-4 rounded border-gray-300 text-blue-600  " />
            </div>
            
            <div class="flex-1 px-4">Name</div>
            <div class="w-40 text-center">Department</div>
            <div class="w-40 text-center">Position</div>
            <div class="w-32 text-center">Status</div>
            <div class="w-40 text-center">Join Date</div>
            <div class="w-20 text-center">Action</div>

        </div>

        <div class="divide-y divide-gray-100">
            
            <div v-for="(emp, index) in employees" :key="index" class="flex items-center px-6 py-4 hover:bg-gray-50/50 transition-colors text-;g group">
                
                <div class="w-10">
                    
                    <input type="checkbox" v-model="emp.ticked" class="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer" />
                </div>

                <div class="flex-1 flex items-center gap-3 px-4">
                    <img :src="emp.img" @error="emp.img = '../assets/employeepf.png=' + emp.name" 
                         class="w-15 h-15 rounded-full object-cover border border-gray-100 shadow-sm" />
                    <div>
                        <p class="font-bold text-gray-800">{{ emp.name }}</p>
                        <p class="text-sm text-gray-400 font-medium">{{ emp.role }}</p>
                    </div>

                </div>

                <div class="w-40 text-center text-gray-500 font-medium">{{ emp.dept }}</div>
                <div class="w-40 text-center text-gray-500 font-medium">{{ emp.pos }}</div>
                
                <div class="w-32 flex justify-center">
                    
                    <span :class="getStatusClass(emp.status)" class="px-3 py-1 rounded-full text-sm font-black  tracking-tight">
                        {{ emp.status }}
                    </span>

                </div>

                <div class="w-40 text-center text-gray-400 font-medium">{{ emp.date }}</div>

                <div class="w-20 text-center relative">
                    
                    <button @click="toggleMenu(index)" class="p-2 hover:bg-white border border-transparent hover:border-gray-100 rounded-lg text-gray-400 transition-all">
                        <Icon name="bi:three-dots-vertical" class="text-lg" />
                    </button>

                    <div v-if="activeMenu === index" class="absolute right-12 top-0 w-48 bg-white border border-gray-100 rounded-2xl shadow-xl z-50 py-2 text-left animate-in fade-in slide-in-from-right-2 duration-200">
                        
                        <NuxtLink to="/employeeprofile" class="w-full flex items-center gap-3 px-4 py-2 text-gray-600 hover:bg-gray-50 transition-colors"@click="activeMenu = null">
                            
                            <Icon name="lucide:eye" class="text-sm text-gray-400" />
                            <span class="font-bold text-[13px]">View Profile</span>
                        
                        </NuxtLink>

                        <NuxtLink to="/EditDetail" class="w-full flex items-center gap-3 px-4 py-2 text-gray-600 hover:bg-gray-50 transition-colors"@click="activeMenu = null">
                            
                            <Icon name="lucide:edit-3" class="text-sm text-gray-400" />
                            <span class="font-bold text-[13px]">Edit Details</span>
                        </NuxtLink>
                        
                        <div class="border-t border-gray-50 my-1 mx-2"></div>

                        <button class="w-full flex items-center gap-3 px-4 py-2 text-red-500 hover:bg-red-50 ">
                            
                            <Icon name="lucide:trash-2" class="text-sm" />
                            <span class="font-bold text-[13px]">Delete Employee</span>
                            
                        </button>


                    </div>
                </div>

            </div>

        </div>

    </div>

</template>

<script setup>

import { ref, computed } from 'vue'

defineEmits(['edit-employee'])

const activeMenu = ref(null)

const toggleMenu = (index) => {
    activeMenu.value = activeMenu.value === index ? null : index
}

const toggleAll = (event) => {
    employees.value.forEach(e => e.ticked = event.target.checked)
}

const employees = ref([
  { name: 'LimNi Mol', 
    role: 'UI/UX Designer', 
    dept: 'Marketing', 
    pos: 'Manager', 
    status: 'Active', 
    date: '25-03-2026', 
    ticked: true, img: 'http://localhost:3000/_nuxt/assets/employeepf.png' },


  { name: 'Bessie Cooper', 
    role: 'Product Designer', 
    dept: 'HR', 
    pos: 'Recruiter', 
    status: 'Absent', 
    date: '17-09-2022', 
    ticked: false, 
    img: 'http://localhost:3000/_nuxt/assets/employeepf2.png' },


  { name: 'Apav Cuties', 
  role: 'Full-Stack Developer', 
  dept: 'Design', 
  pos: 'UX/UI Designer', 
  status: 'Active', 
  date: '12-12-2024', 
  ticked: false, 
  img: 'http://localhost:3000/_nuxt/assets/employyee1.png' },


  { name: 'Luo Liee', 
  role: 'Finance', 
  dept: 'Finance', 
  pos: 'Finance Manager', 
  status: 'On leave', 
  date: '02-11-2024', 
  ticked: false, 
  img: 'http://localhost:3000/_nuxt/assets/employeepf3.png' }

])

const getStatusClass = (status) => {
    if (status === 'Active') return 'bg-green-50 text-green-500 border border-green-100'
    if (status === 'Absent') return 'bg-red-50 text-red-500 border border-red-100'
    return 'bg-orange-50 text-orange-500 border border-orange-100'
}


</script>