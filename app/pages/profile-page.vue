<template>

  
    <div class="p-8 banner container font-sans">

        
        
        <div class="flex items-center gap-4 mb-8">
              
            <NuxtLink to="/attendance" class="p-2 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-all">
                
                <Icon name="lucide:arrow-left" class="text-xl text-gray-600" />
            </NuxtLink>

            <h1 class="text-2xl font-black text-[#333]">Employee Profile</h1>
           
        </div>

            
        <div class="flex flex-col lg:flex-row gap-8">
                           
          <div class="w-full lg:w-1/3">
                  
                  
            <div class="bg-white border border-gray-100 rounded-3xl p-8  flex flex-col items-center text-center">                    
                      
                <div class="relative">                                                
                  <img src="../assets/employeepf4.png" class="w-32 h-32 rounded-full object-cover border-4 border-blue-50 shadow-md" />
                                
                </div>
                
                <h2 class="mt-4 text-xl font-bold text-gray-800">LimNi Mol</h2>
                <p class="text-sm text-gray-400 font-medium mb-6">UI/UX Designer</p>
                                  
                <div class="w-full border-t border-gray-100 pt-6 flex flex-col gap-4">                      
                  
                    <div class="flex items-center justify-between text-sm">
                                                      
                        <span class="text-gray-500">Employee ID</span>                        
                        <span class="font-bold text-gray-700">EMP-2026-001</span>                      
                    </div>
                              
                              
                    <div class="flex items-center justify-between text-sm">
                                
                        <span class="text-gray-500">Join Date</span>
                          <span class="font-bold text-gray-700">12 Jan 2024</span>

                    </div>

                </div>

            </div>

          </div>

              <div class="flex-1 space-y-6">
                
                  <div class="bg-white border border-gray-100 rounded-3xl p-8 ">
                      
                      <div class="flex items-center justify-between mb-6">
                      
                          <h3 class="text-xl font-bold text-gray-800">Personal Information</h3>
                          
                          <NuxtLink to="editdetail" class="text-[#1440b8] text-sm font-bold hover:underline">
                            Edit Info
                          </NuxtLink>
                          
                      </div>
                    
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        
                        <div>
                          
                          <p class="text-base text-gray-400  font-black  mb-1">Email Address</p>
                          
                          <p class="text-sm font-medium text-gray-700">limnimol@hansei.com</p>
                        </div>

                        <div>
                          
                          <p class="text-base text-gray-400  font-black mb-1">Phone Number</p>
                          <p class="text-sm font-medium text-gray-700">+855 12 345 678</p>
                        
                        </div>
                        
                        <div>
                          <p class="text-base text-gray-400  font-black  mb-1">Location</p>
                          <p class="text-sm font-medium text-gray-700">Phnom Penh, Cambodia</p>
                        </div>

                        <div>
                          
                          <p class="text-base text-gray-400  font-black  mb-1">Department</p>
                          <p class="text-sm font-medium text-gray-700">Product Design</p>
                        </div>

                      </div>

                  </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                  
                    <div class="bg-blue-50 border border-blue-100 p-6 rounded-[10px]">
                      
                      <p class="text-blue-600 text-sm font-bold ">Work Days</p>
                      <p class="text-3xl font-black text-blue-900 mt-1">220</p>
                      
                    </div>

                    <div class="bg-purple-50 border border-purple-100 p-6 rounded-[10px]">
                      
                      <p class="text-purple-600 text-sm font-bold ">Leave Days</p>
                      <p class="text-3xl font-black text-purple-900 mt-1">12</p>
                    </div>


                    <div class="bg-orange-50 border border-orange-100 p-6 rounded-[10px]">
                      
                      <p class="text-orange-600 text-sm font-bold ">Late Entries</p>
                      <p class="text-3xl font-black text-orange-900 mt-1">05</p>
                    </div>

                </div>

              </div>

            </div>


            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      
              <div class="bg-white border border-gray-100 rounded-3xl p-8 ">
                
                  <h3 class="text-xl font-bold text-gray-800 mb-6">Expertise</h3>
                  
                  <div class="flex flex-wrap gap-2">
                      
                    <span v-for="skill in ['Figma', 'Vue.js', 'Tailwind CSS', 'Laravel']" :key="skill" class="bg-blue-50 text-[#1440b8] border border-blue-100 px-4 py-2 rounded-full text-xs font-bold">
                        {{ skill }}
                      </span>

                  </div>

              </div>

              <div class="bg-white border border-gray-100 rounded-3xl p-8 ">
                
                  <div class="flex items-center justify-between mb-4">
                    
                    <h3 class="text-xl font-bold text-gray-800">Attendance Rating</h3>
                    

                  </div>
                  <p class="text-green-500 font-black text-3xl">98%</p>

                    
                  <p class="text-sm text-gray-400 mt-3 font-medium ">Excellent Reliability</p>

              </div>

            </div>

            <div class="bg-white border border-gray-100 rounded-3xl p-8  mt-6">
                
              <h3 class="text-xl font-bold text-gray-800 mb-6">Recent Activity</h3>
                
                <div class="space-y-6">
                  
                  <div v-for="activity in activities" :key="activity.id" class="flex gap-4">
                    
                      
                      <div class="pb-2">
                        
                        <p class="text-base font-bold text-gray-700">{{ activity.title }}</p>

                        <p class="text-xs text-gray-400">{{ activity.time }}</p>
                      </div>

                  </div>

                </div>

            </div>

    </div> 

  
    
      


</template>



<script setup>

const activities = [

  { id: 1, 
    title: 'Checked in for Morning Shift', 
    time: 'Today, 08:00 AM' },


  { id: 2, 
    title: 'Requested Leave for Khmer New Year', 
    time: 'Yesterday, 02:30 PM' },


  { id: 3, 
    title: 'Completed UI Refactor Project', 
    time: '21 March 2026' }

    
]

</script>