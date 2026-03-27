<template>

  
    <div class="flex items-center gap-[20px] flex-wrap">
        
        <div v-for="item in stats" :key="item.title"class="mt-5 rounded-xl border-4 border-blue-200 font-xs p-[18px] h-[130px] w-[240px]  ">
            
            <div class="flex items-center gap-[10px]">
                
                <Icon :name="item.icon" class="text-2xl text-gray-700" />
                
                <p class="font-medium text-lg text-gray-800">{{ item.title }}</p>
            
            </div>

            <p class="text-3xl font-black text-primary mt-2">{{ item.value }}</p>

            <p class="text-sm text-gray-400 font-medium">{{ item.subtext }}</p>

        </div>

    </div>

</template>

<script setup>

const stats = [

  { title: 'Employee', 
    value: '1304', 
    subtext: 'Total Staff', 
    icon: 'mdi:account-multiple' },


  { title: 'Present Today', 
    value: '40', 
    subtext: '134 People Remaining', 
    icon: 'si-glyph:square-checked' },

  { title: 'Late Entry', 
    value: '26', 
    subtext: '13 People are on time', 
    icon: 'mdi:alarm-note-off' },


  { title: 'On Leave', 
    value: '12', 
    subtext: 'Approved leave', 
    icon: 'mdi:account-arrow-left' },


  { title: 'Absent', 
    value: '03', 
    subtext: 'Without informing', 
    icon: 'mdi:account-cancel' }


]


   
    <div class="flex items-center justify-center gap-[60px]">

        <div class="rounded-md bg-primary p-[18px] border-2 h-[130px] w-[240px]  text-white">
            <div class="flex items-center gap-[10px]">
                <Icon name="mdi:account-multiple" class="text-2xl text-white" />
                <p class="font-medium text-lg">Employee</p>   
            </div>
            <p class="font-medium text-lg mt-3">1304</p>
            <p class="text-white">Without informing</p>
        </div>  

        <div class="rounded-md bg-primary p-[18px] border-2 h-[130px] w-[240px]  text-white">
            <div class="flex items-center gap-[10px]">
                <Icon name="si-glyph:square-checked" class="text-2xl text-white" />
                <p class="font-medium text-lg">Present Today</p>
            </div>
            <p class="font-medium text-lg mt-3">40</p>
            <p class="text-white">134 People Remaining</p>
        </div>

        <div class="rounded-md bg-primary p-[18px] border-2 h-[130px] w-[240px]  text-white">
            <div class="flex items-center gap-[10px]">
                <Icon name="mdi:alarm-note-off" class="text-2xl text-white" />
                <p class="font-medium text-lg">Late Entry</p>
            </div>
            <p class="font-medium text-lg mt-3">26</p>
            <p class="text-white">13 People are on time</p>
        </div>

        <div class="rounded-md bg-primary p-[18px] border-2 h-[130px] w-[240px]  text-white">
            <div class="flex items-center gap-[10px]">
                <Icon name="mdi:account-arrow-left" class="text-2xl text-white" />
                <p class="font-medium text-lg">On Leave</p>        
            </div>
            <p class="font-medium text-lg mt-3">12</p>
            <p class="text-white">Approved leave</p>
        </div>
            
        <div class="rounded-md bg-primary p-[18px] border-2 h-[130px] w-[240px]  text-white">
            <div class="flex items-center gap-[10px]">
                <Icon name="mdi:account-cancel" class="text-2xl text-white" />
                <p class="font-medium text-lg">Absent</p>   
            </div>
            <p class="font-medium text-lg mt-3">03</p>
            <p class="text-white">Without informing</p>
        </div>    
    </div>

</script>