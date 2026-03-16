<template>
            <div class="bg-secondary w-full h-[300px] p-[10px] text-gray-600 flex flex-col border-b-1">
                                <span class="text-base">{{currentDateTime}}</span>
                                <span class="p-[20px] text-4xl font-bold flex items-center gap-5"> <div class="bg-primary w-[100px] h-[100px] rounded-[50%] flex justify-center items-center"><Icon name="mdi:account-outline" class="text-6xl text-white" /></div>{{ greeting }}!</span>
                                <span class="ml-[30px] p-[5px]">Create On: <span class="font-bold text-black">2 Mar,2025</span> </span>
                                <span class="ml-[30px] p-[5px]">Position <span class="font-bold text-black">Risk Management </span> </span>
                                <div class=" w-[350px] h-[100px] flex justify-center items-center gap-5">
                                            <div class="bg-primary w-auto p-[10px] h-[35px] rounded-lg flex flex-row justify-center items-center gap-2 border border-white">
                                            <Icon name="mdi:account-outline" class="text-2xl text-white" />
                                            <span class="text-base text-white">Online: <span class="font-bold">142</span> </span>
                                            </div>
                                            <div class="bg-red-600 w-auto p-[10px] h-[35px] rounded-lg flex flex-row justify-center items-center gap-2 border border-white">
                                            <Icon name="mdi:inbox-outline" class="text-2xl text-white" />
                                            <span class="text-base text-white">Offline: <span class="font-bold">1093</span> </span>
                                            </div>
                                            
                                              
                                </div>
                
                                
            </div>
             <div class="bg-primary w-full h-[550px] flex justify-evenly items-center">
                    <div class="bg-white w-[350px] h-[90%] rounded-xl shadow-md border border-slate-200 flex flex-col items-center justify-center p-8">
    
                        <div class="mb-4">
                            <Icon name="mdi:account-group" class="text-5xl text-primary"  />
                        </div>

                        <span class="text-primary font-medium text-lg uppercase tracking-wide">
                            Present Employees
                        </span>

                        <span class="text-7xl font-bold text-primary my-4">
                            142
                        </span>

                        <div class="flex items-center gap-2 bg-green-50 px-3 py-1 rounded-full border border-green-100">
                            <div class="h-2 w-2 rounded-full bg-green-500"></div>
                            <span class="text-green-700 text-xs font-bold uppercase">Active Now</span>
                            
                            
                        </div>
                        
                        <div class="flex items-center gap-2 bg-primary px-3 py-1 rounded-base border border-green-100 mt-[20px]">
                            <span class="text-black text-xs font-bold uppercase">Total Employees</span>
                        </div>

                        <div class="flex items-center gap-2  px-3 py-1 rounded-base  mt-[5px]">
                            <span class="text-black text-base font-bold uppercase">142/1235 <span class="text-gray-500">Employees</span></span>
                        </div>

                    </div>
                     <div class="bg-white w-[350px] h-[90%] rounded-xl shadow-md border border-slate-200 flex flex-col items-center justify-center p-8">
    
                        <div class="mb-4">
                            <Icon name="mdi:account-group" class="text-5xl text-primary"  />
                        </div>

                        <span class="text-primary font-medium text-lg uppercase tracking-wide">
                            Absent Employees
                        </span>

                        <span class="text-7xl font-bold text-red-500 my-4">
                            900
                        </span>

                        <div class="flex items-center gap-2 bg-red-50 px-3 py-1 rounded-full border border-green-100">
                            <div class="h-2 w-2 rounded-full bg-red-500"></div>
                            <span class="text-red-700 text-xs font-bold uppercase">Unactive </span>
                            
                            
                        </div>
                        
                        <div class="flex items-center gap-2 bg-primary px-3 py-1 rounded-base border border-green-100 mt-[20px]">
                            <span class="text-black text-xs font-bold uppercase">Total Employees</span>
                        </div>

                        <div class="flex items-center gap-2  px-3 py-1 rounded-base  mt-[5px]">
                            <span class="text-black text-base font-bold uppercase">900/1235 <span class="text-gray-500">Employees</span></span>
                        </div>

                    </div>

                    <div class="bg-white w-[700px] h-[90%] rounded-xl shadow-md border border-slate-200 flex flex-col items-center justify-center p-8">
    
                        <div class="mb-4">
                            <Icon name="mdi:account-group" class="text-5xl text-primary"  />
                        </div>

                        <span class="text-primary font-medium text-lg uppercase tracking-wide">
                            Pending Approvals
                        </span>

                        <span class="text-7xl font-bold text-primary my-4">
                            193
                        </span>

                        <div class="flex items-center gap-2 bg-red-50 px-3 py-1 rounded-full border border-green-100">
                            <div class="h-2 w-2 rounded-full bg-green-500"></div>
                            <span class="text-green-700 text-xs font-bold uppercase">notification </span>
                            
                            
                        </div>
                        
                        <div class="flex items-center gap-2 bg-primary px-3 py-1 rounded-base border border-green-100 mt-[20px]">
                            <span class="text-black text-xs font-bold uppercase">Total Employees</span>
                        </div>

                        <div class="flex items-center gap-2  px-3 py-1 rounded-base  mt-[5px]">
                            <span class="text-black text-base font-bold uppercase">193/1235 <span class="text-gray-500">Employees</span></span>
                        </div>

                    </div>
                    
                    
                    

            </div>
            
</template>

<script setup>
    import { ref, onMounted, onUnmounted } from 'vue'

    const currentDateTime = ref('') 
    let timer

    onMounted(() => {
    const updateTime = () => {
        currentDateTime.value = new Date().toLocaleString('en-US', {
        weekday: 'long', 
        year: 'numeric',
        month: 'long',     
        day: 'numeric',
        })
    }

    updateTime()
    timer = setInterval(updateTime, 1000)
    })

    onUnmounted(() => {
    clearInterval(timer)
    })



        const greeting = ref('');

        const setGreeting = () => {
        const hour = new Date().getHours();

        if (hour < 5) {
            greeting.value = ' Good Night';
        } else if (hour < 12) {
            greeting.value = ' Good Morning';
        } else if (hour < 17) {
            greeting.value = ' Good Afternoon';
        } else if (hour < 21) {
            greeting.value = ' Good Evening';
        } else {
            greeting.value = '   Good Night';
        }
        };


onMounted(() => {
  setGreeting();
});
</script>