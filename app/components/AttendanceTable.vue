
<template>
  
    <div class="mt-6 bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
        
        <table class="w-full text-left border-collapse">
            
            <thead class="bg-gray-50 border-b border-gray-200 text-gray-400 text-sm  font-bold">
                
                <tr>
                    <th class="p-4">Employee</th>
                    <th class="p-4 text-center">Sunday</th>
                    <th class="p-4 text-center">Monday</th>
                    <th class="p-4 text-center">Tuesday</th>
                    <th class="p-4 text-center">Wednesday</th>
                    <th class="p-4 text-center">Thursday</th>
                    <th class="p-4 text-center">Friday</th>
                    <th class="p-4 text-center">Saturday</th>
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
                    
                    <td class="p-4 text-center text-gray-400 font-medium">4</td>
                    <td class="p-4">
                    
                        <div class="bg-green-50 text-green-600 border border-green-100 text-[10px] font-bold py-1 px-2 rounded flex items-center justify-center gap-1">
                            <Icon name="si-glyph:checked" class="text-xs" /> 8 Hours
                        </div>
                    </td>

                    <td class="p-4">
                        
                        <div class="bg-orange-50 text-orange-600 border border-orange-100 text-[10px] font-bold py-1 px-2 rounded flex items-center justify-center gap-1">
                            <Icon name="si-glyph:alarm-clock" class="text-xs" /> 4h 36m
                        </div>
                    </td>
                    
                    <td class="p-4">
                        <div class="bg-purple-50 text-purple-600 border border-purple-100 text-[10px] font-bold py-1 px-2 rounded flex items-center justify-center gap-1">
                            <Icon name="si-glyph:circle-forward" class="text-xs" /> Leave
                        </div>
                    </td>

                    <td class="p-4 text-center text-green-500 font-bold text-xs">Active</td>
                    <td class="p-4 text-center text-gray-400">9</td>
                    <td class="p-4 text-center text-gray-400">10</td>
                </tr>

                <tr>
                    <td class="p-4 flex items-center gap-3">
                        
                        <img src="../assets/employeepf2.png" class="w-15 h-15 rounded-full object-cover border border-gray-100" />
                        <div>
                            <p class="font-bold text-gray-800">Bessie Cooper</p>
                            <p class="text-[10px] text-gray-400 font-medium">Product Designer</p>
                        </div>

                    </td>
                    
                    <td class="p-4 text-center text-gray-400 font-medium">4</td>
                
                    <td class="p-4">
                        
                        <div class="bg-green-50 text-green-600 border border-green-100 text-[10px] font-bold py-1 px-2 rounded flex items-center justify-center gap-1">
                            <Icon name="si-glyph:checked" class="text-xs" /> 8 Hours
                        </div>
                    </td>

                    <td class="p-4">
                        
                        <div class="bg-green-50 text-green-600 border border-green-100 text-[10px] font-bold py-1 px-2 rounded flex items-center justify-center gap-1">
                            <Icon name="si-glyph:checked" class="text-xs" /> 8 Hours
                        </div>
                    </td>
                
                    <td class="p-4">
                        
                        <div class="bg-red-50 text-red-600 border border-red-100 text-[10px] font-bold py-1 px-2 rounded flex items-center justify-center gap-1">
                            <Icon name="si-glyph:square-error" class="text-xs" /> Absent
                        </div>
                    </td>
                    
                    <td class="p-4 text-center text-green-500 font-bold text-xs">Active</td>
                    <td class="p-4 text-center text-gray-400">9</td>
                    <td class="p-4 text-center text-gray-400">10</td>
                </tr>

            </tbody>

        </table>

    </div>

</template>