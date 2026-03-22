<template>
     

   
    <div class="flex items-center gap-[25px]">

        <div class=" mt-5 rounded-md border border-gray-300 p-[18px] border-2 h-[130px] w-[240px] boder-[#333]">

            
                
            <div class="flex items-center  gap-[10px]">
                        
                <Icon name="mdi:account-multiple" class="text-2xl " />
                <p class="font-medium text-lg"> Employee</p>   
            </div>

            <p class="font-medium text-lg  mt-3">  1304 </p>
            <p class=" text-[#4d4d4d]">Wihtout informing</p>
                
        </div>  

        <div class=" mt-5 rounded-md border border-gray-300 p-[18px] border-2 h-[130px] w-[240px] boder-[#333]">

                
            <div class="flex items-center  gap-[10px]">
                        
                <Icon name="si-glyph:square-checked" class="text-2xl " />
                <p class="font-medium text-lg"> Present Today</p>
                    

            </div>

            <p class="text-3xl font-black text-gray-900 mt-2">{{ card.value }}</p>
            <p class="text-sm text-gray-400 font-medium">{{ card.subtext }}</p>

        </div>


        <div class=" mt-5 rounded-md border border-gray-300 p-[18px] border-2 h-[130px] w-[240px] boder-[#333]">
                
            <div class="flex items-center  gap-[10px]">
                            
                <Icon name="mdi:alarm-note-off" class="text-2xl " />
                <p class="font-medium text-lg"> Late Entry</p>
                        
            </div>

            <p class="font-medium text-lg  mt-3">  26 </p>
            <p class=" text-[#4d4d4d]">13 People are on time</p>
                
        </div>

        <div class=" mt-5 rounded-md border border-gray-300 p-[18px] border-2 h-[130px] w-[240px] boder-[#333]">


                
            <div class="flex items-center  gap-[10px]">
                        
                <Icon name="mdi:account-arrow-left" class="text-2xl " />
                <p class="font-medium text-lg"> On Leave</p>        
            </div>

                <p class="font-medium text-lg  mt-3">  12 </p>
                <p class=" text-[#4d4d4d]">Approved leave</p>
                
        </div>
            
        <div class=" mt-5 rounded-md border border-gray-300 p-[18px] border-2 h-[130px] w-[240px] boder-[#333]">

            
                
            <div class="flex items-center  gap-[10px]">
                        
                <Icon name="mdi:account-cancel" class="text-2xl " />
                <p class="font-medium text-lg"> Absent</p>   
            </div>

            <p class="font-medium text-lg  mt-3">  03 </p>
            <p class=" text-[#4d4d4d]">Wihtout informing</p>
                
        </div>    

    </div>

</template>

<script setup>
const stats = [

  { title: 'Present Today', 
    value: '40', 
    subtext: '134 People Remaining', 
    icon: 'si-glyph:square-checked'

 },

  { title: 'Late Entry', 
    value: '26', 
    subtext: '13 People are on time', 
    icon: 'si-glyph:alarm-clock' 
},

  { title: 'On Leave', 
    value: '12', 
    subtext: 'Approved leave', 
    icon: 'si-glyph:circle-forward'

 },

  { title: 'Absent', 
    value: '03', 
    subtext: 'Without informing', 
    icon: 'line-md:alert-circle'

 }
]

</script>