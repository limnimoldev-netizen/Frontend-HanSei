<template>
    
    <div class="bg-secondary font-san container banner  ">
        
        <div class="flex items-center gap-[665px]">
            
            <div class="">
                

                <h1 class="text-2xl font-semibold text-[#333] ">
                 Employees List
                </h1>
                <p class=" text-[#4d4d4d]">Manage and oversee  you oganization's workforce  effectively.</p>
           
            </div>
           
            <div class="flex items-center gap-3">
                    
                <button class="flex items-center gap-2 bg-blue-500 border border-gray-200 px-4 py-2 rounded-lg text-white text-sm font-medium hover:text-gray-500 hover:bg-blue-200">
                    
                    <Icon name="ic:outline-person-add-alt" class="text-xl" />
                    <span>Add Employee</span>
                </button>

                
            </div>
        </div>

        
   
        <div class="flex items-center gap-[85px]">
            
            <div class=" mt-5 rounded-md border border-gray-300 p-[22px] border-2 h-[130px] w-[255px] boder-[#333]">
                    
                <div class="flex items-center text-gray-500  gap-[10px]">
                            
                    <Icon name="mdi:account-group" class="text-xl " />
                    <p class="font-medium text-sm"> Total Employees</p>
                        
                </div>

                <p class="font-bold text-4xl mt-3"> 134 </p>
                <p class=" text-green-600 mt-2 ">+3 <span class="text-gray-500">From last month</span></p>
                    
            </div>

            <div class=" mt-5 rounded-md border border-gray-300 p-[22px] border-2 h-[130px] w-[255px] boder-[#333]">
                    
                <div class="flex items-center text-gray-500  gap-[10px]">
                            
                    <Icon name="mdi:account-plus" class="text-xl " />
                    <p class="font-medium text-sm"> New Hires This Month</p>
                        
                </div>

                <p class="font-bold text-4xl mt-3"> 5 </p>
                <p class=" text-green-600 mt-2 ">+2 <span class="text-gray-500">From last month</span></p>
                    
                    
            </div>

            <div class=" mt-5 rounded-md border border-gray-300 p-[22px] border-2 h-[130px] w-[255px] boder-[#333]">
                    
                <div class="flex items-center text-gray-500  gap-[10px]">
                            
                    <Icon name="mdi:briefcase-variant" class="text-xl " />
                    <p class="font-medium text-sm"> Average Tenure (Years)</p>
                        
                </div>

                <p class="font-bold text-4xl mt-3"> 28 </p>
                <p class=" text-green-600 mt-2 ">1.2% <span class="text-gray-500">From last year</span></p>
                    
            </div>
                
            <div class=" mt-5 rounded-md border border-gray-300 p-[22px] border-2 h-[130px] w-[255px] boder-[#333]">
                    
                <div class="flex items-center text-gray-500  gap-[10px]">
                            
                    <Icon name="ic:outline-manage-accounts" class="text-xl " />
                    <p class="font-medium text-sm">Active Department</p>
                        
                </div>

                <p class="font-bold text-4xl mt-3"> 134 </p>
                <p class=" text-red-600 mt-2 ">-1 <span class="text-gray-500">From last year</span></p>
                    
            </div>    
        </div>

        <div class="mt-8">
    
            <div class="flex flex-col md:flex-row justify-between gap-4">
                
                <div class="relative flex-1">
                    
                    <Icon name="si-glyph:magnifier" class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
                    
                    <input type="text" placeholder="Search employee " class="w-full bg-white border border-gray-200 rounded-lg py-2 pl-10 pr-4 text-[#333] focus:outline-none focus:ring-1 focus:ring-blue-400 transition-all"/>
                </div>

            
                <div class="flex items-center gap-3">
                
                    <div class="flex flex items-center gap-2 ">
                 
                        <Icon name="mdi:account-group" class="text-xl text-blue-500 " />
                        <p class="text-gray-400">Total Employee: <span class="text-black font-semibold">134 employees</span> </p>

                    </div>
                
                    <button class="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50">
                        <Icon name="ic:sharp-filter-alt" class="text-xl text-gray-500" />
                        <span>Filter 03</span>
                    </button>
                    
                    

                </div>
                
            </div>
  
        </div>

        <div class="mt-6 bg-white border border-gray-200 rounded-lg shadow-xs overflow-hidden">
            
            <table class="w-full text-left border-collapse">
                
                <thead class="bg-gray-50 border-b border-gray-100 text-gray-400 text-sm  font-bold">

                    <tr>
                        
                        <div class="p-4 text-center flex gap-6">
                            
                            <Icon name="ic:baseline-check-box-outline-blank" class="text-xl  text-gray-400 " />
                            <p>Name</p>

                        </div>      

                        <th class="p-4 text-center">Department</th>
                        <th class="p-4 text-center">Position</th>
                        <th class="p-4 text-center">Status</th>
                        <th class="p-4 text-center">Join Date</th>
                        <th class="p-4 text-center">Action</th>
                        
                    </tr>
                </thead>

                <tbody class="text-sm divide-y divide-gray-100">
                    
                    <tr>
                        <td class="p-4 flex items-center gap-3">
                            <Icon name="ic:sharp-check-box" class="text-xl  text-blue-400 " />
                            <img src="../assets/employeepf.png" class="w-12 h-12 rounded-full object-cover border border-gray-100" />
                            
                            <div>
                                <p class="font-bold text-gray-800">LimNi Mol    </p>
                                <p class="text-[12px] text-gray-400 font-medium">UI/UX Designer</p>
                            </div>
                        </td>
                        
                        <td class="p-4 text-center text-gray-400 font-medium">Marketing</td>
                        
                        <td class="p-4 text-center text-gray-400 font-medium">Manger</td>
                        <td class="p-4 text-center text-green-500 font-bold text-">Active</td>
                        <td class="p-4 text-center text-gray-400 font-medium">25-03-2026</td>
                        

                    </tr>

                    <tr>
                        <td class="p-4 flex items-center gap-3">
                            <Icon name="ic:baseline-check-box-outline-blank" class="text-xl  text-gray-400 " />
                            
                            <img src="../assets/employeepf2.png" class="w-12 h-12 rounded-full object-cover border border-gray-100" />
                            <div>
                                <p class="font-bold text-gray-800">Bessie Cooper</p>
                                <p class="text-[12px] text-gray-400 font-medium">Product Designer</p>
                            </div>

                        </td>
                        
                        <td class="p-4 text-center text-gray-400 font-medium">HR</td>
                    
                        <td class="p-4 text-center text-gray-400 font-medium">Recruiter</td>
                        <td class="p-4 text-center text-red-500 font-bold text-">Absent</td>
                        <td class="p-4 text-center text-gray-400 font-medium">17-09-2022</td>
                        
                    </tr>
                    <tr>
                        <td class="p-4 flex items-center gap-3">
                            
                            
                            <Icon name="ic:sharp-check-box" class="text-xl  text-blue-400 " />
                            <img src="../assets/employyee1.png" class="w-12 h-12 rounded-full object-cover border border-gray-100" />
                            <div>
                                <p class="font-bold text-gray-800">Apav Cuties</p>
                                <p class="text-[12px] text-gray-400 font-medium">Full-Stack Developer</p>
                            </div>

                        </td>
                        
                        <td class="p-4 text-center text-gray-400 font-medium">Design</td>
                    
                        <td class="p-4 text-center text-gray-400 font-medium">UX/UI Designer</td>
                        <td class="p-4 text-center text-green-500 font-bold text-">Active</td>


                        <td class="p-4 text-center text-gray-400 font-medium">12-12-2024</td>
                        
                    </tr>

                    <tr>
                        <td class="p-4 flex items-center gap-3">
                            

                            <Icon name="ic:baseline-check-box-outline-blank" class="text-xl  text-gray-400 " />
                            <img src="../assets/employeepf3.png" class="w-12 h-12 rounded-full object-cover border border-gray-100" />
                           
                            <div>
                                <p class="font-bold text-gray-800">Luo Liee</p>
                                <p class="text-[12px] text-gray-400 font-medium">Finance</p>
                            </div>

                        </td>
                        
                        <td class="p-4 text-center text-gray-400 font-medium">Finance</td>
                    
                        <td class="p-4 text-center text-gray-400 font-medium">Finance Manger</td>
                        <td class="p-4 text-center text-orange-500 font-bold text-">On leave</td>

                        
                        <td class="p-4 text-center text-gray-400 font-medium">02-11-2024</td>                        
                    </tr>


                    

                </tbody>

            </table>

        </div>

    </div>

</template>