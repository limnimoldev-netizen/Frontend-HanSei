<template>
    
    <div class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
        
        <div class="bg-white w-full max-w-xl rounded-2xl p-8 shadow-xl relative">
        
            <div class="flex items-center gap-6 mb-8 pb-6">
                
                <img src="../assets/employeepf2.png" class="w-20 h-20 rounded-full object-cover  " />
                
                <div class="flex-1">
                    <h2 class="text-2xl font-bold text-gray-800">Bessie Cooper</h2>
                </div>

                <button class="border-2 border-gray-200 px-4 py-1.5 rounded-xl text-sm font-bold hover:bg-gray-50">
                <Icon name="lucide:pen" class="text-xs " />
                Edit 
                </button>
            </div>

            <div class="grid grid-cols-2 gap-6">
                
                <div class="col-span-2">
                 
                    <p class="text-sm text-gray-400   mb-1">Name</p>
                    <input type="text" value="Bessie Cooper" class="w-full border-b-2 border-gray-100 py-2 outline-none  font-medium">
               
                </div>

                <div>
                   
                    <p class="text-sm text-gray-400  mb-1">Position</p>
                    
                    <select class="w-full border-b-2 border-gray-100 py-2 outline-none bg-white font-medium">
                        <option>Frontend Developer</option>
                    </select>

                </div>

                <div>
                   
                    <p class="text-sm text-gray-400  mb-1">Division</p>
                    <select class="w-full border-b-2 border-gray-100 py-2 outline-none bg-white font-medium">
                        <option>Product & Development</option>
                        <option>Marketing</option>
                    </select>
                
                </div>

                <div>
                    <p class="text-sm text-gray-400 mb-1">Gender</p>
                    
                    <select class="w-full border-b-2 border-gray-100 py-2 outline-none bg-white font-medium">
                        <option>Female</option>
                        <option>Male</option>
                    </select>
                    
                </div>

                <div>
                    <p class="text-sm text-gray-400  mb-1">Age</p>
                    <input type="text" value="" class="w-full border-b-2 border-gray-100 py-2 outline-none font-medium">
                </div>

                <div>
                    <p class="text-sm text-gray-400 mb-1">Email</p>
                    <input type="text" value="" class="w-full border-b-2 border-gray-100 py-2 outline-none font-medium">
                </div>

                <div>
                    <p class="text-sm text-gray-400 f mb-1">Employee ID</p>
                    <input type="text" value="" class="w-full border-b-2 border-gray-100 py-2 outline-none font-medium">
                </div>

            </div>

            <div class="flex gap-4 mt-12">
               
                <button class="flex-1 py-3 border-2 border-gray-100 rounded-2xl font-bold text-gray-500 hover:bg-gray-50">
                Cancel
                </button>
                
                <button class="flex-1 py-3 bg-blue-500 text-white rounded-2xl font-bold hover:bg-blue-300">
                Save
                </button>
            </div>

        </div>
    </div>
</template>