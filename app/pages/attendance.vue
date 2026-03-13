<script setup>

    import AttendanceCard from '../components/AttendanceCard.vue';
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

        
        <AttendanceCard />
        
        <AttendanceFilter />

        <AttendanceTable />


    </div>




</template>