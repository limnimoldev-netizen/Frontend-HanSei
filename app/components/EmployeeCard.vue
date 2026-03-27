
    <template>

    
        <div class="flex items-center gap-[32px] flex-wrap">
            
            <div v-for="item in stats" :key="item.title"class="mt-5 rounded-xl border-4 border-blue-200 font-xs p-[18px] h-[130px] w-[240px]  ">
                
                <div class="flex items-center gap-[10px]">
                    
                    <Icon :name="item.icon" class="text-2xl text-gray-700" />
                    
                    <p class="font-medium text-lg text-gray-800">{{ item.title }}</p>
                
                </div>

                <p class="text-3xl font-black text-primary mt-2">{{ item.value }}</p>

                <p class="text-sm text-gray-400 font-medium">
                    
                    <span class="text-base text-green-500 font-medium">{{ item.subnum }}</span>
                    <span class="text-base text-red-500 font-medium">{{ item.subnumcut }}</span>

                             
                {{ item.subtext }}</p>
                


            </div>

        </div>

    </template>

    <script setup>

    const stats = [


    { title: 'Total Employee', 
        value: '134', 
        subtext: ' From last month', 
        subnum: '+3 ',
        icon: 'mdi:account-group' },

    { title: 'New Hires ', 
        value: '5', 
        subtext: 'From last month', 
        subnum: '+2 ',
        icon: 'mdi:account-plus' },


    { title: 'Average Tenure', 
        value: '28', 
        subtext: 'From last year', 
        subnum: '1.2%  ',

        icon: 'mdi:briefcase-variant' },


    { title: 'Active Department', 
        value: '134', 
        subtext: ' From last year', 
        subnumcut: '-1  ',

        icon: 'mdi:account-settings-variant' }


    ]


    </script> 