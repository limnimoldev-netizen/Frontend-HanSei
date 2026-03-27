<template>

<nav class="w-full bg-primary h-screen flex">
            <div class="w-[500px] h-screen bg-white ">
                <div class="w-[80px] h-[90px] "> <img src="/../app/assets/logo-company.png" alt="" class="w-[100%] h-[100%] ml-[30px] pt-[20px]"></div>
                <div class="flex flex-col mt-[100px]">
                        <span class="text-lg text-gray-500 ml-[20px] ">Main Menu</span>
                            <nav class=" text-base">
                                <ul class="leading-15 font-san">
                                    <li>
                                    <NuxtLink to="/1" class="flex items-center gap-2 transition duration-300 hover:text-primary hover:scale-105" active-class="text-primary">
                                        <Icon name="mdi:account-group" class="text-2xl ml-[20px]" />
                                        Tasks
                                    </NuxtLink>
                                    </li>
                                    <li>
                                    <NuxtLink to="/2" class="flex items-center gap-2 transition duration-300 hover:text-primary hover:scale-105" active-class="text-primary ">
                                        <Icon name="mdi:calendar-check" class="text-2xl ml-[20px]" />
                                        Inbox
                                    </NuxtLink>
                                    </li>

                                    <li>
                                    <NuxtLink to="/3" class="flex items-center gap-2 transition duration-300 hover:text-primary hover:scale-105" active-class="text-primary">
                                        <Icon name="mdi:calendar-clock" class="text-2xl ml-[20px]" />
                                        Calendar
                                    </NuxtLink>
                                    </li>

                                    <li>
                                    <NuxtLink to="/4" class="flex items-center gap-2 transition duration-300 hover:text-primary hover:scale-105" active-class="text-primary">
                                        <Icon name="mdi:calendar-remove" class="text-2xl ml-[20px]" />
                                        Projects
                                        
                                    </NuxtLink> 
                                    </li>
                                    <li>
                                    <NuxtLink to="/EmployeeSetting" class="flex items-center gap-2 transition duration-300 hover:text-primary hover:scale-105" active-class="text-primary">
                                        <Icon name="mdi:settings" class="text-2xl ml-[20px]" />
                                        Setting
                                        
                                    </NuxtLink> 
                                    </li>
                                </ul>

                                
                                </nav>
                </div>

                <div class="flex flex-col mt-[20px]">
                        <span class="text-lg text-gray-500 ml-[20px] ">Hr Management</span>
                            <nav class=" text-base">
                                <ul class="leading-15 font-san">
                                    <li>
                                    <NuxtLink to="/employee" class="flex items-center gap-2 transition duration-300 hover:text-primary hover:scale-105" active-class="text-primary">
                                        <Icon name="mdi:account-group" class="text-2xl ml-[20px]" />
                                        Employees 
                                    </NuxtLink>
                                    </li>
                                    <li>
                                    <NuxtLink to="/attendance" class="flex items-center gap-2 transition duration-300 hover:text-primary hover:scale-105" active-class="text-primary ">
                                        <Icon name="mdi:calendar-check" class="text-2xl ml-[20px]" />
                                        Attendance
                                    </NuxtLink>
                                    <ul 
                                    v-if="['/attendance', '/attendance-report', '/attendance-salary'].includes(route.path)" 
                                    class="ml-[60px]  text-gray-500 text-base space-y-4"
                                    >
                                        <li>
                                        <NuxtLink to="/attendance-report" class="transition duration-300 hover:text-primary hover:scale-105 text-md" active-class="text-primary"> Attendance Report</NuxtLink>
                                        </li>
                                        <li>
                                        <NuxtLink to="/attendance-salary" class="transition duration-300 hover:text-primary hover:scale-105" active-class="text-primary"> Salary Report</NuxtLink>
                                        </li>
                                    </ul>
                                    </li>

                                    <li>
                                    <NuxtLink to="/roster" class="flex items-center gap-2 transition duration-300 hover:text-primary hover:scale-105" active-class="text-primary">
                                        <Icon name="mdi:calendar-clock" class="text-2xl ml-[20px]" />
                                        Roster Management
                                    </NuxtLink>
                                    </li>

                                    <li>
                                    <NuxtLink to="/leave" class="flex items-center gap-2 transition duration-300 hover:text-primary hover:scale-105" active-class="text-primary">
                                        <Icon name="mdi:calendar-remove" class="text-2xl ml-[20px]" />
                                        Leave Management
                                        
                                    </NuxtLink> 
                                    </li>
                                </ul>

                                
                                </nav>
                </div>

                

                
            </div>
            <div class="w-full h-screen bg-white">
                    <div class="bg-primary w-full h-[80px] flex flex-ro justify-between items-center ">
                            <div class="w-[400px] h-[50px] bg-white ml-[20px] rounded-lg flex  items-center">
                                <Icon name="mdi:magnify" class="text-3xl ml-[20px] text-gray-500 " /> <span class="ml-[20px] text-gray-500"><input type="text" placeholder="Search or type a command" class="outline-none"></span>
                            </div>
                            
                            <div class="w-[300px] h-[60px]  mr-[20px] flex justify-center">
                                <div class=" w-[220px] h-full border-white border-r-2 flex justify-center items-center gap-7">
                                    <Icon name="mdi:lightning-bolt-outline" class="text-3xl text-white" />
                                    <Icon name="mdi:account-plus-outline" class="text-3xl text-white" />
                                    <Icon name="mdi:bell-outline" class="text-3xl text-white" />
                                </div>
                                <div class=" w-[55px] h-[55px] rounded-4xl bg-white flex  justify-center items-center ml-[20px]">
                                    <NuxtLink to="/profile-page"><Icon name="mdi:account-outline" class="text-3xl" /> </NuxtLink>
                                </div>
                                
                            </div>
                    </div>
                    <div class="bg-white w-full min-h-screen border-l-1 border-gray-300" >
                            
                            <NuxtPage />
                        
                    </div>
            </div>
        
    </nav>

</template>

<script setup>
const route = useRoute()
</script>