<template>
  <div class="min-h-screen bg-secondary flex ">
    <!-- main-content -->
     <div class="flex-2 p-6">
      <h1 class="text-2xl font-bold mb-6 text-[#333]">Leave Mangement</h1>

      <!-- Total employe leave -->

      <div class="flex p-6">

        <Tablename

        b
        
        />



      </div>


      <!-- leave-table -->
       <div class="overflow-x-auto bg-sencondary shadow rounded-lg">
        <table class="min-w-full text-bold ">
          <thead>
            <tr class="bg-[#D3D3D3] ">

              <th class="p-6 text-left ">Employee</th>
              <th class="p-6 text-left ">Position</th>
              <th class="p-6 text-left ">Leave type</th>
              <th class="p-6 text-left ">Reason</th>
              <th class="p-6 text-left ">Start-Day</th>
              <th class="p-6 text-left ">End-Day</th>
              <th class="p-6 text-left ">Day</th>
              <th class="p-6 text-left ">Action</th>

            </tr>
          </thead>

          <tbody>

            <Tablename
           
            name="Mony" 
            img="https://i.pinimg.com/736x/b6/f2/cf/b6f2cfa3a24119b06a58867b469a1d37.jpg"
            position="Frontend"
            leavetype="Sick leave"
            reason="Fever and headache"
            start="2026-03-10"
            end="2026-03-12"
            day="3"
            btnapprove="Aprove"
            btnreject="Reject"
            
           
            
            
            
            />

            <Tablename
           
            name="Dane" 
            img="https://i.pinimg.com/736x/24/fe/66/24fe669317107656da7022b7c5152c75.jpg"
            position="Developer"
            leavetype="Sick leave"
            reason="To spport my heart"
            start="10 Mar 26"
            end="12 Mar 26"
            day="2"
            btnapprove="Approve"
            btnreject="Reject"
            
            
            />



            <Tablename
           
            name="Lucky" 
            img="https://i.pinimg.com/736x/54/97/52/549752276a07ccf79bb172757aa1c14c.jpg"
            position="HR Manager"
            leavetype="Annual Leave"
            reason="Family vacation"
            start="2026-03-15"
            end="2026-03-20"
            day="6"
            btnapprove="Approve"
            btnreject="Reject"
            
            
            />




            <Tablename
           
            name="Vannak Kim" 
            img="https://i.pinimg.com/736x/54/97/52/549752276a07ccf79bb172757aa1c14c.jpg"
            position="Backend Developer"
            leavetype="Sick leave"
            reason="Doctor appointmen"
            start="2026-03-11"
            end="2026-03-11"
            day="1"
            btnapprove="Approve"
            btnreject="Reject"
            
            
            />



            <Tablename
           
            name="Ratha Sun" 
            img="https://i.pinimg.com/736x/d2/26/fe/d226fe525328474e21ec1822423c50f0.jpg"
            position="UI/UX Designer"
            leavetype="Personal Leave"
            reason="Personal business"
            start="2026-03-18"
            end="2026-03-19"
            day="2"
            btnapprove="Approve"
            btnreject="Reject"
            
            
            />





            <Tablename
           
            name="Dara Srey" 
            img="https://i.pinimg.com/736x/9d/43/43/9d4343c817c7e05b488ba931899fded3.jpg"
            position="Accountant"
            leavetype="Annual Leave"
            reason="Travel with family"
            start="2026-03-22"
            end="2026-03-25"
            day="4"
            btnapprove="Approve"
            btnreject="Reject"
            
            
            />




             <Tablename
           
            name="Pich Sopheak" 
            img="https://i.pinimg.com/736x/9d/43/43/9d4343c817c7e05b488ba931899fded3.jpg"
            position="Marketing Officer"
            leavetype="Flu"
            reason="To spport my heart"
            start="10 Mar 26"
            end="12 Mar 26"
            day="2"
            btnapprove="Approve"
            btnreject="Reject"
            
            
            />




             <Tablename
           
            name="Nita Heng" 
            img="https://i.pinimg.com/736x/9d/43/43/9d4343c817c7e05b488ba931899fded3.jpg"
            position="Project Manager"
            leavetype="Maternity Leave"
            reason="Pregnancy leave"
            start="2026-04-01"
            end="2026-06-30"
            day="90"
            btnapprove="Approve"
            btnreject="Reject"
            
            
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



