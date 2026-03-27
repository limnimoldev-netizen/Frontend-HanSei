<template>
  <div class="min-h-screen w-full bg-secondary flex ">
    <!-- main-content -->
     <div class="flex-2 p-6">
      <h1 class="text-2xl font-bold mb-6 text-[#333]">Leave Mangement</h1>

      <!-- Total employe leave -->


        <div class="justify-between items-center p-6 flex gap-2 w-full shadow mb-5 rounded-xl bg-secondary">


          <box 
          title="28"
          content="Total Available Leaves"
         
          />


           <box 
          title="08"
          content="Total Sick Leaves"
         
          />



               <box 
          title="08"
          content="Total Sick Leaves"
         
          />



          <box 
          title="08"
          content="Total Sick Leaves"
         
          />




          



       

        </div>

    


      <!-- leave-table -->
       <div class="overflow-x-auto bg-sencondary shadow rounded-lg">
        <table class="min-w-full text-bold ">
          <thead>
            <tr class="bg-primary text-[#ffff] font-bold text-lg">

              <th class="p-3 text-left ">Employee</th>
              <th class="p-3 text-left ">Position</th>
              <th class="p-3 text-left ">Leave type</th>
              <th class="p-3 text-left ">Reason</th>
              <th class="p-3 text-left ">Start-Day</th>
              <th class="p-3 text-left ">End-Day</th>
              <th class="p-3 text-left ">Day</th>
              <th class="p-3 text-left ">Status</th>
              <th class="p-3 text-left ">Action</th>

            </tr>
          </thead>



          <tbody>
            


      
            <LeaveTable
              v-for="item in leaves"
              :key="item.id"
              :item="item"
            />

          


          </tbody>
    

        </table>
       </div>

     </div>
  </div>
</template>


<script setup>

import LeaveTable from '../components/LeaveTable.vue';
const leaves = ref([


  {
    id: 1,
    name: "Lucky",
    position: "Manager",
    Leavetype: "Sick Leave",
    reason: "Fever and headache",
    start_day: "2026-03-10",
    end_day: "2026-03-12",
    Total_day: 3,
    img: "https://i.pravatar.cc/100?img=1",
    status: "Pending"
  },
  {
    id: 2,
    name: "Mony",
    position: "Frontend Developer",
    Leavetype: "Annual Leave",
    reason: "Family vacation",
    start_day: "2026-03-15",
    end_day: "2026-03-20",
    Total_day: 6,
    img: "https://i.pravatar.cc/100?img=2",
    status: "Pending"
  },
  {
    id: 3,
    name: "Dara",
    position: "Backend Developer",
    Leavetype: "Sick Leave",
    reason: "Doctor appointment",
    start_day: "2026-03-11",
    end_day: "2026-03-11",
    Total_day: 1,
    img: "https://i.pravatar.cc/100?img=3",
    status: "Pending"
  },
  {
    id: 4,
    name: "Sokha",
    position: "UI/UX Designer",
    Leavetype: "Personal Leave",
    reason: "Personal business",
    start_day: "2026-03-18",
    end_day: "2026-03-19",
    Total_day: 2,
    img: "https://i.pravatar.cc/100?img=4",
    status: "Pending"
  },
  {
    id: 5,
    name: "Nita",
    position: "Accountant",
    Leavetype: "Annual Leave",
    reason: "Travel with family",
    start_day: "2026-03-22",
    end_day: "2026-03-25",
    Total_day: 4,
    img: "https://i.pravatar.cc/100?img=5",
    status: "Pending"
  },
  {
    id: 6,
    name: "Vannak",
    position: "Marketing Officer",
    Leavetype: "Sick Leave",
    reason: "Flu",
    start_day: "2026-03-13",
    end_day: "2026-03-14",
    Total_day: 2,
    img: "https://i.pravatar.cc/100?img=6",
    status: "Pending"
  },
  {
    id: 7,
    name: "Ratha",
    position: "Project Manager",
    Leavetype: "Maternity Leave",
    reason: "Pregnancy leave",
    start_day: "2026-04-01",
    end_day: "2026-06-30",
    Total_day: 90,
    img: "https://i.pravatar.cc/100?img=7",
    status: "Pending"
  },
  {
    id: 8,
    name: "Srey Pov",
    position: "QA Tester",
    Leavetype: "Personal Leave",
    reason: "Family event",
    start_day: "2026-03-16",
    end_day: "2026-03-16",
    Total_day: 1,
    img: "https://i.pravatar.cc/100?img=8",
    status: "Pending"
  },
  {
    id: 9,
    name: "Kosal",
    position: "DevOps Engineer",
    Leavetype: "Annual Leave",
    reason: "Relaxation",
    start_day: "2026-03-25",
    end_day: "2026-03-28",
    Total_day: 4,
    img: "https://i.pravatar.cc/100?img=9",
    status: "Pending"
  },
  {
    id: 10,
    name: "Pich",
    position: "Support Officer",
    Leavetype: "Sick Leave",
    reason: "Back pain",
    start_day: "2026-03-17",
    end_day: "2026-03-18",
    Total_day: 2,
    img: "https://i.pravatar.cc/100?img=10",
    status: "Pending"
  }
  




])
import box from '../components/box.vue';
</script>



