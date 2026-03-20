
<template>
    
    <div class="  flex justify-center items-center p-4 ">
  
          <sidebar />
        
        <div class=" rounded-2xl p-8  relative">
            
            <NuxtLink to="/employee">   
                    
                <button class="absolute top-6 right-8 text-gray-400 text-2xl">
                
                    <Icon name="mdi:close" class="text-2xl" />        
                </button>  
            </NuxtLink>
           

            <h2 class="text-2xl font-bold text-gray-800">Add Employee</h2>
            <p class="text-sm text-gray-500 mb-8">Please fill out the form below to add a new employee.</p>

            <div class="grid grid-cols-2 gap-6">
                
                <div>
                    <label class="block text-xs font-bold text-gray-400  mb-1">Employee ID</label>
                    <input type="text" placeholder="Enter id" class="w-full border border-gray-200 rounded-xl p-3 outline-none focus:border-blue-500">
                
                </div>

                <div>
                    <label class="block text-xs font-bold text-gray-400 mb-1">Full Name</label>
                    <input type="text" placeholder="Nimol Lim" class="w-full border border-gray-200 rounded-xl p-3 outline-none focus:border-blue-500">
                
                </div>

                <div>
                    <label class="block text-xs font-bold text-gray-400  mb-1">Email</label>
                    <input type="email" placeholder="limnimol.dev@gmail.com" class="w-full border border-gray-200 rounded-xl p-3 outline-none focus:border-blue-500">
                
                </div>

                <div>
                   
                    <label class="block text-xs font-bold text-gray-400  mb-1">Phone Number</label>
                    
                    <div class="flex border border-gray-200 rounded-xl overflow-hidden">
                        <span class="bg-gray-50 px-3 py-3  text-sm">+855</span>
                        <input type="text" placeholder="" class="w-full p-3 outline-none focus:border-blue-500">
                    </div>

                </div>

                <div class="col-span-2">
                    <label class="block text-xs font-bold text-gray-400  mb-2">Employment Type</label>
                    
                    <div class="flex gap-4">
                        
                        <label class="flex-1 flex items-center justify-between border-2 border-gray-100 p-3 rounded-xl cursor-pointer">
                           
                            <span class="text-sm font-bold text-gray-600">Full-time</span>
                            <div class="w-4 h-4 border-2 border-gray-300 rounded-full"></div>
                        </label>
                        
                        <label class="flex-1 flex items-center justify-between border-2 border-gray-100 p-3 rounded-xl cursor-pointer">
                           
                            <span class="text-sm font-bold text-gray-600">Part-time</span>
                            <div class="w-4 h-4 border-2 border-gray-300 rounded-full"></div>
                        </label>
                        
                        <label class="flex-1 flex items-center justify-between border-2 border-gray-100 p-3 rounded-xl cursor-pointer">
                            
                            <span class="text-sm font-bold text-gray-600">Contract</span>
                            <div class="w-4 h-4 border-2 border-gray-300 rounded-full"></div>
                        </label>

                    </div>
                </div>

                <div>
                   
                    <label class="block text-xs font-bold text-gray-400  mb-1">Position</label>
                    
                    <select class="w-full border border-blue-500 rounded-xl p-3 outline-none bg-white">
                        <option>None</option>
                        <option>UI/UX Designer</option>
                        
                        <option>Frontend Developer</option>
                    </select>


                </div>

                <div>
                    <label class="block text-xs font-bold text-gray-400  mb-1">Department</label>
                    <select class="w-full border border-blue-500 rounded-xl p-3 outline-none bg-white">
                        <option>None</option>
                        <option>Designer</option>
                        <option>Development</option>
                    </select>
                </div>

                <div>
                    
                    <label class="block text-xs font-bold text-gray-400  mb-1">Reporting Manager</label>
                    
                    <select class="w-full border border-gray-200 rounded-xl p-3 outline-none bg-white">
                        
                        <option>Nimol Lim</option>
                        <option>Apav Cuties</option>
                    </select>
                    
                </div>

                <div>
                    <label class="block text-xs font-bold text-gray-400  mb-1">Joined Date</label>
                    <input type="text" placeholder="" class="w-full border border-gray-200 rounded-xl p-3 outline-none">
                </div>

            </div>

            <div class="flex justify-between mt-10">
                
                <NuxtLink to="/employee">   
                    
                    <button class="px-6 py-2 border border-gray-200 rounded-xl hover:bg-gray-200 text-gray-500">Cancel</button>

                </NuxtLink>
                
                <button class="px-6 py-2 bg-blue-600 text-white rounded-xl  hover:bg-blue-300  ">Add Employee</button>
            </div>

        </div>
    </div>

</template>