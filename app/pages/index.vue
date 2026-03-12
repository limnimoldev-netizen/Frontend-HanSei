<template>
    <nav class="w-full bg-primary h-screen flex">
            <div class="w-[500px] h-screen bg-white border-r-2 border-gray-300">
                <div class="w-[80px] h-[90px] "> <img src="/../app/assets/logo-company.png" alt="" class="w-[100%] h-[100%] ml-[30px] pt-[20px]"></div>
                <div class="flex flex-col mt-[100px] ml-[30px] gap-2">
                        <span class="text-lg text-gray-500 ">Dashboard</span>
                            <nav class="ml-[50px] text-xl">
                                <ul class="leading-15 font-san">
                                    <li>
                                    <NuxtLink to="/about" class="flex items-center gap-2">
                                        <Icon name="mdi:account-group" class="text-2xl" />
                                        Employees Management
                                    </NuxtLink>
                                    </li>

                                    <li>
                                    <NuxtLink to="/posts/1" class="flex items-center gap-2">
                                        <Icon name="mdi:calendar-check" class="text-2xl" />
                                        Attendance Management
                                    </NuxtLink>
                                    </li>

                                    <li>
                                    <NuxtLink to="/posts/2" class="flex items-center gap-2">
                                        <Icon name="mdi:calendar-clock" class="text-2xl" />
                                        Roster Management
                                    </NuxtLink>
                                    </li>

                                    <li>
                                    <NuxtLink to="/posts/2" class="flex items-center gap-2">
                                        <Icon name="mdi:calendar-remove" class="text-2xl" />
                                        Leave Management
                                    </NuxtLink>
                                    </li>
                                </ul>
                                </nav>
                </div>
            </div>
            <div class="w-full h-screen bg-secondary">
                    <div class="bg-primary w-full h-[80px] flex flex-ro justify-between items-center">
                            <div class="w-[400px] h-[60px] bg-white ml-[20px] rounded-lg"></div>
                            <div class="w-[300px] h-[70px] bg-red-500 mr-[20px]"></div>
                    </div>
            </div>
        
    </nav>
</template>