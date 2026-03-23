<script setup>

import EditDetail from '../components/EditDetail.vue';


const activeTab = ref('Payroll');
const tabs = ['General', 'Payroll', 'Attendance', 'Leave', 'Performance'];
</script>

<template>
    
    <div class="bg-secondary font-san container banner">
        
        <div class="flex items-center justify-between mb-8">
            <div class="flex items-center gap-4">
                <NuxtLink to="/employee" class="p-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50">
                    <Icon name="lucide:chevron-left" class="text-xl text-gray-500" />
                </NuxtLink>
                <h1 class="text-2xl font-semibold text-[#333]">Detail Employee</h1>
            </div>
            
            <div class="flex items-center gap-3">
                
                
                <button class="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50">
                        
                    <Icon name="lucide:pencil" class="text-gray-500" />
                    <span>Edit</span>
                </button>

                <button class="p-2 border border-red-100 bg-white rounded-lg hover:bg-red-50">
                    <Icon name="lucide:trash-2" class="text-red-500" />
                </button>

            </div>

        </div>

        <div class="bg-white border border-gray-100 rounded-2xl p-6 mb-8 shadow-sm">
            
            <div class="flex items-center justify-between">
                
                <div class="flex items-center gap-5">
                    <img src="../assets/employyee1.png" class="w-20 h-20 rounded-xl object-cover" />
                    
                    <div>
                        <div class="flex items-center gap-2">
                            <h2 class="text-xl font-bold text-gray-800">LimNi Mol</h2>
                            <Icon name="lucide:copy" class="text-gray-400 text-sm cursor-pointer" />
                        </div>

                        <p class="text-sm text-gray-400 font-medium  ">EMP-025038</p>
                    </div>
                </div>

                <div class="px-3 py-1 bg-green-50 text-green-600 rounded-full text-xs font-bold">Active</div>
            </div>


            <div class="grid grid-cols-4 gap-8 mt-8 pt-6 border-t border-gray-50">
                
                <div>
                    <p class="text-sm font-black text-gray-400  mb-1">Job Title</p>
                    <p class="font-bold text-gray-700">UI/UX Designer</p>
                </div>

                <div>
                    <p class="text-sm font-black text-gray-400  mb-1">Department</p>
                    <p class="font-bold text-gray-700">Design</p>
                </div>

                <div>
                    <p class="text-sm font-black text-gray-400  mb-1">Employment Type</p>
                    <p class="font-bold text-gray-700">Full-time</p>
                </div>

                <div>
                    <p class="text-sm font-black text-gray-400  mb-1">Work Location</p>
                    <p class="font-bold text-gray-700">PSE (Office)</p>
                </div>

            </div>

        </div>

        <div class="flex items-center gap-8 border-b border-gray-100 mb-8">
            
            <button v-for="tab in tabs" :key="tab" @click="activeTab = tab":class="activeTab === tab ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-400 hover:text-gray-600'"
            
            class="pb-4 text-sm  px-2">
                {{ tab }}
            
            </button>
        </div>


        <div v-if="activeTab === 'Payroll'" class="grid grid-cols-4  gap-6 mb-8">
           
           <!-- <div v-for="stat in [ 

                { label: 'Net Salary (Year to Date)', 
                    value: 'Rp 147.300.000', 
                    sub: 'Includes all processed payroll' },

                { label: 'Average Net Salary', 
                    value: 'Rp 12.275.000', 
                    sub: 'Calculated from last 12 periods' },


                { label: 'Last Payroll Amount', 
                value: 'Rp 12.500.000', 
                sub: 'Paid on January 28, 2026' },

                { label: 'Total Deductions (YTD)', 
                value: 'Rp 29.800.000', 
                sub: 'Tax & mandatory contributions'
            
            }]" :key="stat.label" class="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">

                <p class="text-xs text-gray-400 font-bold mb-3">{{ stat.label }}</p>
                <p class="text-2xl font-black text-gray-800">{{ stat.value }}</p>
                <p class="text-[10px] text-gray-400 mt-2">{{ stat.sub }}</p>

            </div> -->

        </div>

        <div v-if="activeTab === 'Payroll'" class="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
            
            
            <div class="p-4 flex justify-between items-center border-b border-gray-50">
                
                <div class="relative w-80">
                    <Icon name="lucide:search" class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input type="text" placeholder="Search payroll information" class="w-full pl-10 pr-4 py-2 bg-gray-50 border-none rounded-lg text-sm focus:ring-1 focus:ring-blue-400 outline-none">
                </div>

                <div class="flex gap-2">
                   
                    <button class="flex items-center gap-2 px-4 py-2 border border-gray-100 rounded-lg text-sm font-bold text-gray-500 hover:bg-gray-50">
                        <Icon name="lucide:filter" /> Filter
                    </button>

                    <button class="flex items-center gap-2 px-4 py-2 border border-gray-100 rounded-lg text-sm font-bold text-gray-500 hover:bg-gray-50">
                        <Icon name="lucide:download" /> Export
                    </button>

                </div>
            </div>
            
            <table class="w-full text-left">
                
                <thead class="bg-gray-50/50 text-sm text-gray-400 font-black">
                   
                    <tr>
                        <th class="p-4">Payroll Period</th>
                        <th class="p-4">Gross Salary</th>
                        <th class="p-4">Deductions</th>
                        <th class="p-4">Net Salary</th>
                        <th class="p-4 text-center">Status</th>
                    </tr>

                </thead>

                <tbody class="divide-y divide-gray-50 text-sm  text-gray-600">
                    
                    <tr v-for="i in 3" :key="i" class="hover:bg-gray-50/50 ">
                        
                        <td class="p-4">Jan 2026</td>
                        <td class="p-4 font-bold text-gray-800">Rp 15.000.000</td>
                        <td class="p-4 text-red-400">Rp 2.500.000</td>
                        <td class="p-4 font-bold text-blue-600">Rp 12.500.000</td>
                        
                        <td class="p-4 text-center">
                            <span class="px-3 py-1 bg-green-50 text-green-600 rounded-md text-[10px] font-black ">Paid</span>
                        </td>
                        
                    </tr>
                </tbody>

            </table>

        </div>


        <div v-if="activeTab === 'General'" class="grid grid-cols-3 gap-6">
    
        <div class="col-span-2 bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm">
            
            <h3 class="text-lg font-black text-gray-800 mb-8">Personal Information</h3>
            
            <div class="grid grid-cols-2 gap-x-12 gap-y-10">
                
                <div class="space-y-1">
                    <p class="text-sm font-black text-gray-400">Phone Number</p>
                    <p class="font-bold text-gray-700">+855 787-812-84</p>
                </div>

                <div class="space-y-1">
                    <p class="text-sm font-black text-gray-400">Email Address</p>
                    <p class="font-bold text-gray-700">limnimol.dev@gmail.com</p>
                </div>

                <div class="space-y-1">
                    <p class="text-sm font-black text-gray-400">Date of Birth</p>
                    <p class="font-bold text-gray-700">25 mar 2008 </p>
                </div>

                <div class="space-y-1">
                    <p class="text-sm font-black text-gray-400">Gender</p>
                    <p class="font-bold text-gray-700">Female</p>
                </div>

                <div class="col-span-2 space-y-1">
                    <p class="text-sm font-black text-gray-400 ">Home Address</p>
                    <p class="font-bold text-gray-700">Sen sok, Phnom Penh</p>
                </div>

            </div>

        </div>

        <div class="space-y-6">
            
            <div class="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm">
                
                <h3 class="text-lg font-black text-gray-800 mb-6">Employment</h3>
                
                <div class="space-y-6">
                    
                    <div class="flex justify-between border-b border-gray-50 pb-3">
                        <p class="text-smfont-bold text-gray-400">Joined Date</p>
                        <p class="text-sm font-black text-gray-700">Jan 12, 2024</p>
                    </div>

                    <div class="flex justify-between border-b border-gray-50 pb-3">
                        <p class="text-sm font-bold text-gray-400">Probation</p>
                        <p class="text-sm font-black text-green-500 ">Passed</p>
                    </div>

                    <div class="flex justify-between">
                        <p class="text-sm font-bold text-gray-400">Manager</p>
                        <p class="text-sm font-black text-blue-500">Bessie Cooper</p>
                    </div>

                </div>

            </div>

            <div class="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm">

                <h3 class="text-lg font-black text-gray-800 mb-4">Education</h3>
                <p class="text-base font-black text-gray-700">Bandung Institute of Technology</p>
                <p class="text-sm text-gray-400 font-bold mt-1">Bachelor of Design (2020 - 2026)</p>

            </div>
        </div>

    </div>

    </div>
</template>