<script setup>
    import EmployeeTable from '../components/EmployeeTable.vue';
    import EmployeeCard from '../components/EmployeeCard.vue';
    import EditDetail from '../components/EditDetail.vue';


</script>


<template>
    
    <div class="bg-secondary font-san container banner  ">
        
        <div class="flex items-center gap-[515px]">
            
            <div class="">
                

                <h1 class="text-2xl font-semibold text-[#333] ">
                 Employees List
                </h1>
                <p class=" text-[#4d4d4d]">Manage and oversee  you oganization's workforce  effectively.</p>
           
            </div>
           
            <div class="flex items-center gap-4">
                    
                <button class="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-lg text-base font-medium hover:bg-gray-50">
                        <Icon name="lucide:arrow-down-to-line" class="text-xl text-gray-500" />
                        <span>Export List</span>
                </button>
                
                <NuxtLink to="/AddEmployee"> 
                 
                    <button class="flex items-center gap-2 bg-primary border border-gray-200 px-4 py-2 rounded-lg text-white text-base font-medium hover:text-gray-500 hover:bg-blue-200">
                    
                        <Icon name="ic:outline-person-add-alt" class="text-2xl" />
                        <span>Add Employee</span>
                    </button>

                </NuxtLink>
                

                
            </div>
        </div>

        
        
        <EmployeeCard />
        
        <div class="mt-8">
    
            <div class="flex flex-col md:flex-row justify-between gap-4">
                
                <div class="relative flex-1">
                    
                    <Icon name="si-glyph:magnifier" class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
                    
                    <input type="text" placeholder="Search employee " class="w-full bg-white border border-gray-200 rounded-lg py-2 pl-10 pr-4 text-[#333] focus:outline-none focus:ring-1 focus:ring-blue-400 transition-all"/>
                </div>

            
                <div class="flex items-center gap-3">
                
                    <button class="flex items-center gap-2 bg-white border border-gray-200 px-5 py-2 rounded-lg text-sm font-medium hover:bg-gray-50">
                        <Icon name="lucide:list-filter" class="text-xl text-gray-500" />
                        <span>Filter </span>
                    </button>
                    
                    

                </div>
                
            </div>
  
        </div>
        
        <EmployeeTable />


    </div>

</template>

