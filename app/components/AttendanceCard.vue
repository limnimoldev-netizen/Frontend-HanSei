<template>
    
    <div class="flex items-center justify-between gap-4 mt-5">
        
        <div v-for="card in stats" :key="card.title" class="rounded-xl border border-gray-200 p-5 h-[140px] flex-1 bg-white shadow-sm">
        
            <div class="flex items-center gap-3 text-gray-700">
                
                <Icon :name="card.icon" class="text-2xl" />
                <p class="font-bold text-lg">{{ card.title }}</p>
            
            </div>

            <p class="text-3xl font-black text-gray-900 mt-2">{{ card.value }}</p>
            <p class="text-sm text-gray-400 font-medium">{{ card.subtext }}</p>

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