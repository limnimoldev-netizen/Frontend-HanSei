
<template>
  
    <div class="mt-6 bg-white border border-gray-200 rounded-lg shadow-xs overflow-hidden">
        
        <table class="w-full text-left border-collapse">
            
            <thead class="bg-primary border-b border-gray-100 text-[#ffff]  text-sm  font-bold">
                
                <tr>
                    <th class="p-4">Employee Name </th>
                    <th class="p-4 text-center">Date</th>
                    <th class="p-4 text-center">Check In</th>
                    <th class="p-4 text-center">Check Out</th>
                    <th class="p-4 text-center">Spent</th>
                    <th class="p-4 text-center">Status</th>
                    <th class="p-4 text-center">Action</th>
                </tr>
            </thead>

            <tbody class="text-sm divide-y divide-gray-100">
                
                <tr>
                    <td class="p-4 flex items-center gap-3">
                        <img src="../assets/employeepf.png" class="w-15 h-15 rounded-full object-cover border border-gray-100" />
                        
                        <div>
                            <p class="font-bold text-gray-800">LimNi Mol    </p>
                            <p class="text-[10px] text-gray-400 font-medium">UI/UX Designer</p>
                        </div>
                    </td>
                    
                    <td class="p-4 text-center text-gray-400 font-medium">Jan 24 2026</td>
                    <td class="p-4 text-center text-gray-400 font-medium">9:00 Am</td>


                     
                    <td class="p-4 text-center text-gray-400 font-medium">4h:26mn</td>

                    
                    <td class="p-4 text-center text-gray-400 font-medium">4h:26mn</td>
                    
                    
                    <td class="p-4">
                        <div class="flex justify-center">
                        <span class="bg-green-50 text-green-500 border border-green-100 px-3 py-1 rounded-full text-sm font-bold ">
                            Active
                        </span>
                        </div>
                    </td>
                    
                    <td class="p-4 text-center ">
                        <Icon name="bi:three-dots-vertical" class="text-base" />

                    </td>
                </tr>

                <tr>
                    <td class="p-4 flex items-center gap-3">
                        
                        <img src="../assets/employeepf2.png" class="w-15 h-15 rounded-full object-cover border border-gray-100" />
                        <div>
                            <p class="font-bold text-gray-800">Bessie Cooper</p>
                            <p class="text-[10px] text-gray-400 font-medium">Product Designer</p>
                        </div>

                    </td>
                    
                    <td class="p-4 text-center text-gray-400 font-medium">Jan 24 2026</td>
                    <td class="p-4 text-center text-gray-400 font-medium">10:40 Am</td>
                    <td class="p-4 text-center text-gray-400 font-medium">6:44 AM</td>

                
                    <td class="p-4 text-center text-gray-400 font-medium">8h:4mn</td>

                    
                    <td class="p-4">
                        <div class="flex justify-center">
                        <span class="bg-orange-50 text-orange-500 border border-orange-100 px-3 py-1 rounded-full text-sm font-bold ">
                            Late
                        </span>
                        </div>
                    </td>
                    
                    <td class="p-4 text-center ">
                        <Icon name="bi:three-dots-vertical" class="text-base" />

                    </td>
                </tr>



                <tr>
                    <td class="p-4 flex items-center gap-3">
                        
                        <img src="../assets/employyee1.png" class="w-15 h-15 rounded-full object-cover border border-gray-100" />
                        <div>
                            <p class="font-bold text-gray-800">Apav Cuties</p>
                            <p class="text-[10px] text-gray-400 font-medium">Full-Stack Developer</p>
                        </div>

                    </td>
                    
                    <td class="p-4 text-center text-gray-400 font-medium">Jan 24 2026</td>                     
                    <td class="p-4 text-center text-gray-400 text-2xl">--</td>


                                   
                    <td class="p-4 text-center text-gray-400 text-2xl">--</td>

                    <td class="p-4 text-center text-gray-400 text-2xl">--</td>

                    
                    <td class="p-4">
                        <div class="flex justify-center">
                        <span class="bg-red-50 text-red-500 border border-red-100 px-3 py-1 rounded-full text-sm font-bold ">
                            Absent
                        </span>
                        </div>
                    </td>
                    
                    <td class="p-4 text-center ">
                        <Icon name="bi:three-dots-vertical" class="text-base" />

                    </td>
                </tr>

                <tr>
                    <td class="p-4 flex items-center gap-3">
                        
                        <img src="../assets/employeepf2.png" class="w-15 h-15 rounded-full object-cover border border-gray-100" />
                        <div>
                            <p class="font-bold text-gray-800">Bessie Cooper</p>
                            <p class="text-[10px] text-gray-400 font-medium">Product Designer</p>
                        </div>

                    </td>
                    
                    <td class="p-4 text-center text-gray-400 font-medium">Jan 24 2026</td>
                    <td class="p-4 text-center text-gray-400 font-medium">10:40 Am</td>
                    <td class="p-4 text-center text-gray-400 font-medium">6:44 AM</td>

                
                    <td class="p-4 text-center text-gray-400 font-medium">8h:4mn</td>

                    
                    <td class="p-4">
                        <div class="flex justify-center">
                        <span class="bg-orange-50 text-orange-500 border border-orange-100 px-3 py-1 rounded-full text-sm font-bold ">
                            Late
                        </span>
                        </div>
                    </td>
                    
                    <td class="p-4 text-center ">
                        <Icon name="bi:three-dots-vertical" class="text-base" />

                    </td>
                </tr>

                

            </tbody>

        </table>

    </div>

</template>


<script setup>
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

const attendanceData = [
  {
    name: 'LimNi Mol',
    position: 'UI/UX Designer',
    image: 'http://localhost:3000/_nuxt/assets/employeepf.png',
    sun: '4', 
    tue: '4h 36m', tueIcon: 'line-md:alert-circle', tueStyle: 'bg-orange-50 text-orange-400 border-orange-100',
    wed: 'Leave', wedIcon: 'line-md:emoji-frown', wedStyle: 'bg-purple-50 text-purple-600 rounded-full border-purple-100',
    fri: '9', sat: '10'
  },
  {
    name: 'Bessie Cooper',
    position: 'Product Designer',
    image: 'http://localhost:3000/_nuxt/assets/employeepf2.png',
    sun: '4', 
    tue: '8 Hours', tueIcon: 'line-md:circle-to-confirm-circle-transition', tueStyle: 'bg-green-50 text-green-600 border-green-100',
    wed: 'Absent', wedIcon: 'line-md:close-circle', wedStyle: 'bg-red-50 text-red-600 rounded-full border-red-100',
    fri: '9', sat: '10'
  },

  {
    name: 'Apav Cuties',
    position: 'Full-Stack Developer',
    image: 'http://localhost:3000/_nuxt/assets/employyee1.png',
    sun: '4', 
    tue: '8 Hours', tueIcon: 'line-md:circle-to-confirm-circle-transition', tueStyle: 'bg-green-50 text-green-600 border-green-100',
    wed: 'Absent', wedIcon: 'line-md:close-circle', wedStyle: 'bg-red-50 text-red-600 rounded-full border-red-100',
    fri: '9', sat: '10'
  },
  {
    name: 'Apav Cuties',
    position: 'Full-Stack Developer',
    image: 'http://localhost:3000/_nuxt/assets/employyee1.png',
    sun: '4', 
    tue: '8 Hours', tueIcon: 'line-md:circle-to-confirm-circle-transition', tueStyle: 'bg-green-50 text-green-600 border-green-100',
    wed: 'Absent', wedIcon: 'line-md:close-circle', wedStyle: 'bg-red-50 text-red-600 rounded-full border-red-100',
    fri: '9', sat: '10'
  },
  {
    name: 'Apav Cuties',
    position: 'Full-Stack Developer',
    image: 'http://localhost:3000/_nuxt/assets/employyee1.png',
    sun: '4', 
    tue: '8 Hours', tueIcon: 'line-md:circle-to-confirm-circle-transition', tueStyle: 'bg-green-50 text-green-600 border-green-100',
    wed: 'Absent', wedIcon: 'line-md:close-circle', wedStyle: 'bg-red-50 text-red-600 rounded-full border-red-100',
    fri: '9', sat: '10'
  },

]


</script>
