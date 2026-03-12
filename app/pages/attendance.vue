<script setup>

    import AttendanceFilter from '../components/AttendanceFilter.vue';
    import AttendanceTable from '../components/AttendanceTable.vue';

</script>

<template>
    
    <div class="bg-secondary font-san container banner  ">
        
        <div class="">
            <h1 class="text-2xl font-semibold text-[#333] ">
                Employee Attendance
            </h1>
            <p class=" text-[#4d4d4d]">Analyse attendance records of employee</p>
        </div>

        
        
        <div class="flex items-center gap-[25px]">
            
            <div class=" mt-5 rounded-md border border-gray-300 p-[20px] border-2 h-[130px] w-[250px] boder-[#333]">
                
                <div class="flex items-center  gap-[10px]">
                        
                    <Icon name="si-glyph:square-checked" class="text-2xl " />

                    <p class="font-medium text-lg"> Present Today</p>
                    
                </div>

                <p class="font-medium text-lg  mt-3">  40 </p>
                <p class=" text-[#4d4d4d]">134 People Remaining</p>
                
            </div>

            <div class=" mt-5 rounded-md border border-gray-300 p-[20px] border-2 h-[130px] w-[250px] boder-[#333]">
                
                <div class="flex items-center  gap-[10px]">
                        
                    <Icon name="si-glyph:alarm-clock" class="text-2xl " />

                    <p class="font-medium text-lg"> Late Entry</p>
                    
                </div>

                <p class="font-medium text-lg  mt-3">  26 </p>
                <p class=" text-[#4d4d4d]">13 People are on time</p>
                
            </div>

            <div class=" mt-5 rounded-md border border-gray-300 p-[20px] border-2 h-[130px] w-[250px] boder-[#333]">
                
                <div class="flex items-center  gap-[10px]">
                        
                    <Icon name="si-glyph:circle-forward" class="text-2xl " />

                    <p class="font-medium text-lg"> On Leave</p>
                    
                </div>

                <p class="font-medium text-lg  mt-3">  06 </p>
                <p class=" text-[#4d4d4d]">Approved leave</p>
                
            </div>
            
            <div class=" mt-5 rounded-md border border-gray-300 p-[20px] border-2 h-[130px] w-[250px] boder-[#333]">
                
                <div class="flex items-center  gap-[10px]">
                        
                    <Icon name="si-glyph:compass" class="text-2xl " />

                    <p class="font-medium text-lg"> Absent</p>
                    
                </div>

                <p class="font-medium text-lg  mt-3">  01 </p>
                <p class=" text-[#4d4d4d]">Wihtout informing</p>
                
            </div>

        </div>

        <AttendanceFilter />

        <AttendanceTable />

        
        
        
        



    </div>




</template>