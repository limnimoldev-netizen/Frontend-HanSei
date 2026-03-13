<template>
  <tr class=" border-l border-b border-r divide-dashed rounded-lg bg-secondary border-[#28a745]">
    <td class=" p-3 items-center flex ">
      <img :src="img" alt="img" class="w-15 h-15 rounded-full object-cover border border-green-600 p-1.5 hover:scale-125" />

      <div>
        <p class="font-bold text-black-800 p-3 ">{{ name }}</p>
      </div>
    </td>
    <td class="p-6">{{ position }}</td>
    <td class="p-6">{{ leavetype }}</td>
    <td class="p-6">{{ reason }}</td>
    <td class="p-6">{{ start }}</td>
    <td class="p-6">{{ end }}</td>
    <td class="p-6">{{ day }}</td> 
              <td class="p-6 flex-1 gap-2">
                <button class="bg-green-50 text-green-600 px-3 py-1 rounded-lg text-bold  transition duration-400 hover:bg-green-600 hover:text-secondary">
                  
                  {{ btnapprove }}
                </button>
                  
                <button class="bg-red-50 text-red-600 px-3 py-1 rounded-lg text-bold  transition duration-400 hover:bg-red-600 hover:text-secondary">
                  {{ btnreject }}
                </button>
              </td>


   
  </tr>


</template>

<script setup>
const props = defineProps({
  img:String,
  name: String,
  position: String,
  leavetype:String,
  reason: String,
  start: String,
  end: String,
  day:String,
  action:String,
  btnapprove:String,
  btnreject:String,
 
 
});

</script>


