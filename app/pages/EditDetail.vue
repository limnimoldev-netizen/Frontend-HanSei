    <script setup lang="ts">
    import { ref } from 'vue'
    import EmployeeComponent from './employee.vue'

    </script>

    <template>
        
        <div class="fixed inset-0  bg-gray-200 flex justify-center items-center p-4">
            
            <div class="bg-white w-full max-w-xl rounded-2xl p-8 shadow-xl relative">
            
                <div class="flex items-center gap-6 mb-8 pb-6">
                    
                    <img src="../assets/employeepf3.png" class="w-20 h-20 rounded-full object-cover  " />
                    
                    <div class="flex-1">
                        <h2 class="text-2xl font-bold text-gray-800">LimNi Mol</h2>
                    </div>

                    <button class="border-2 border-gray-200 px-4 py-1.5 rounded-xl text-sm font-bold hover:bg-gray-50">
                    <Icon name="lucide:pen" class="text-xs " />
                    Edit 
                    </button>
                </div>

                <div class="grid grid-cols-2 gap-6">
                    
                    <div class="col-span-2">
                    
                        <p class="text-lg text-gray-400   mb-1">Name</p>
                        <input type="text" value="Lim Nimol" class="w-full border-b-2 border-gray-100 py-2 outline-none  font-medium">
                
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
                        <input type="text" value="" class="w-full border-b-2 border-gray-100  outline-none font-medium">
                    </div>

                    <div>
                        <p class="text-sm text-gray-400 f mb-1">Employee ID</p>
                        <input type="text" value="" class="w-full border-b-2 border-gray-100  outline-none font-medium">
                    </div>

                </div>

                


                <div class="flex gap-4 mt-5">
                    
                    <NuxtLink to="/employee" class="flex-1">
                    
                        <button type="button" class="w-full py-3 border-2 border-gray-100 rounded-2xl">
                            Cancel
                        </button>

                    </NuxtLink>
                                        
                    <NuxtLink to="/employee" class="flex-1">
                        
                        <button type="submit" class="w-full py-3 bg-blue-500 text-white rounded-2xl font-bold hover:bg-blue-600 transition-colors">
                            Save Employee
                        </button>

                    </NuxtLink>

                </div>
                            
            </div>
        </div>
    </template>