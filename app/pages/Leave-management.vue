<template>
  <div class="min-h-screen bg-secondary flex ">
    <!-- main-content -->
     <div class="flex-2 p-6">
      <h1 class="text-2xl font-bold mb-6 text-[#333]">Leave Mangement</h1>

      <!-- leave-table -->
       <div class="bg-white rounded-lg shadow overflow-x-auto">
        <table class="min-w-full text-base ">
          <thead>
            <tr>
              <th class="p-4 text-left">Employee</th>
              <th class="p-4 text-left">Position</th>
              <th class="p-4 text-left">Leave type</th>
              <th class="p-4 text-left">Reason</th>
              <th class="p-4 text-left">Start-Day</th>
              <th class="p-4 text-left">End-Day</th>
              <th class="p-4 text-left">Day</th>
              <th class="p-4 text-left">Action</th>

            </tr>
          </thead>

          <tbody>

            <Tablename
            name="Mony" 
            position="Developer"
            leavetype="Sick leave"
            reason="To spport my heart"
            start="10 Mar 26"
            end="12 Mar 26"
            day="2"
            status="pending"
            />

            <Tablename
            name="Mony" 
            position="Developer"
            leavetype="Sick leave"
            reason="To spport my heart"
            start="10 Mar 26"
            end="12 Mar 26"
            day="2"
            status="pending"
            />

            <Tablename
            name="Mony" 
            position="Developer"
            leavetype="Sick leave"
            reason="To spport my heart"
            start="10 Mar 26"
            end="12 Mar 26"
            day="2"
            status="pending"
            />
            


          </tbody>
    

        </table>
       </div>

     </div>
  </div>
</template>


<script setup>

import Tablename from '../components/Tablename.vue';

</script>



