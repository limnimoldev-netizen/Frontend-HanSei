    <template>

    
        <div class="flex items-center gap-[32px] flex-wrap">
            
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


    </script>