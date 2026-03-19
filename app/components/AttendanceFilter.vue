

<template>
  
    <div class="mt-8">
    
        <div class="flex flex-col md:flex-row justify-between gap-4">
        
            <div class="relative flex-1">
                
                <Icon name="si-glyph:magnifier" class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
                
                <input type="text" placeholder="Search anything ..." class="w-full bg-white border border-gray-200 rounded-lg py-2 pl-10 pr-4 text-[#333] focus:outline-none focus:ring-1 focus:ring-blue-400 transition-all"/>
            </div>

        
            <div class="flex items-center gap-3">
            
                <button class="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50">
                    <Icon name="lucide:list-filter" class="text-gray-500" />
                    <span>Filter </span>
                </button>
                
                <button class="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50">
                
                    <Icon name="si-glyph:calendar" class="text-gray-500" />
                    <span>12 March 2026</span>
                
                
                </button>

            </div>
        </div>

        <div class="flex items-center gap-2 mt-4"> 
            
            <div v-for="tag in ['Leave', 'Absent', 'Active']" :key="tag" 
                class="flex items-center gap-2 bg-gray-100 border border-gray-200 px-3 py-1 rounded-md text-sm font-medium text-gray-600">
                
                <span>{{ tag }}</span>
                
                <button class="hover:text-red-500">  
                    <Icon name="radix-icons:cross-2" class="text-[10px]" />
                
                </button>
            
            </div>

        </div> 
  </div>
  
</template>