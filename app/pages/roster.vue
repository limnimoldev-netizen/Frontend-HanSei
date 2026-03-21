<template>
  <section class="max-w-6xl mx-auto p-6">




    <!-- detail information -->
     <div class="justify-between items-center p-6 flex gap-2 w-full shadow mb-5 rounded-xl bg-secondary">
      <Box 
      img="https://i.pinimg.com/1200x/42/90/32/429032d6af1827671413c977766c1049.jpg"
      />
       <Box 
      img="https://i.pinimg.com/1200x/85/95/7f/85957f8aba52e654066b75a51482dec7.jpg"
      />
       <Box 
      img="https://i.pinimg.com/736x/40/c0/76/40c076c373ccaa910a9331a513e17dd5.jpg"
      />
     </div>
  



    <!-- content -->
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold border-b">Roster Management</h1>

      <button
      @click="openAdd"
      class="bg-green-600 text-white px-4 py-2 rounded"
    >
      + Add Schedule
    </button>
    </div>

    <!-- Table -->
    <div class="bg-white rounded shadow overflow-hidden">
      <table class="w-full text-left ">

        <thead class="bg-blue-600 text-white uppercase text-sm">
        <tr>
          <th class="py-4 px-4 text-left">Employee</th>
          <th class="py-4 px-4 text-left">Position</th>
          <th class="py-4 px-4 text-left">Department</th>
          <th class="py-4 px-4 text-left">Date</th>
          <th class="py-4 px-4 text-left">Shift</th>
          <th class="py-4 px-4 text-left">Status</th>
          <th class="py-4 px-4 text-left">Action</th>
        </tr>
      </thead>

        <tbody>
          <tr
            v-for="(item, index) in schedules"
            :key="index"
            class="border-t"
          >
            <td class="p-4">{{ item.employee }}</td>
            <td class="p-4">{{ item.position}}</td>
            <td class="p-4">{{ item.department}}</td>
            <td class="p-4">{{ item.date }}</td>
            <td class="p-4">{{ item.shift }}</td>
            <td class="p-4 font-semibold"
                :class="{
                'text-green-600': item.status === 'Working',
                'text-red-600': item.status === 'Leave' || item.status === 'Off'
                }"
            >{{ item.status }}</td>
             <td class="p-4 flex gap-3">
            <!-- Edit -->
            <button 
              @click="editItem(item, index)"
              class="text-green-500 hover:text-blue-700"
            >
              <Icon name="material-symbols:edit" class="text-sm h-25 w-25" />
            </button>

            <!-- Delete -->
            <button 
              @click="deleteItem(index)"
              class="text-red-500 hover:text-red-700"
            >
              <Icon name="line-md:account-delete" class="text-sm" />
            </button>
          </td>
          </tr>
        </tbody>

      </table>
    </div>
  </section>

  <!-- form -->
  <div
    v-if="showModal"
    class="fixed inset-0 bg-black/40 flex items-center justify-center"
  >
    <div class="bg-white p-6 rounded-lg w-96">

      <h2 class="text-xl font-bold mb-4">Add Schedule</h2>

      <input
        v-model="form.employee"
        type="text"
        placeholder="Employee Name"
        class="w-full border p-2 rounded mb-3"
      />


      <input
        v-model="form.position"
        type="text"
        placeholder="your position"
        class="w-full border p-2 rounded mb-3"
      />


      <input
        v-model="form.department"
        type="text"
        placeholder="your department"
        class="w-full border p-2 rounded mb-3"
      />

      <input
        v-model="form.date"
        type="date"
        class="w-full border p-2 rounded mb-3"
      />

      <select v-model="form.shift" class="w-full border p-2 rounded mb-3">
        <option>Morning</option>
        <option>Afternoon</option>
        <option>Night</option>
      </select>

      <select v-model="form.status" class="w-full border p-2 rounded mb-4 ">
        <option >Working</option>
        <option >Leave</option>
        <option >Off</option>
      </select>

      <div class="flex justify-end gap-2">
        <button
          @click="showModal = false"
          class="bg-gray-300 px-3 py-2 rounded"
        >
          Cancel
        </button>

      <button
        @click="saveSchedule"
        class="bg-green-600 text-white px-3 py-2 rounded"
      >
        Save
      </button>
      </div>

    </div>
  </div>
</template>
<script setup>
import Box from "~/components/Box.vue"
import { ref } from "vue"

const showModal = ref(false)
const editIndex = ref(null)

const schedules = ref([
  {
    employee: "Mony",
    position: "Manager",
    department: "IT Department",
    date: "2026-03-15",
    shift: "Morning",
    status: "Working"
  }
])

const form = ref({
  employee: "",
  position: "",
  department: "",
  date: "",
  shift: "Morning",
  status: "Working"
})


function openAdd() {
  resetForm()
  showModal.value = true
}


function saveSchedule() {
  if (editIndex.value !== null) {
    
    schedules.value[editIndex.value] = { ...form.value }
  } else {
    
    schedules.value.push({ ...form.value })
  }

  resetForm()
}

// EDIT
function editItem(item, index) {
  form.value = { ...item }
  editIndex.value = index
  showModal.value = true
}

// DELETE
function deleteItem(index) {
  if (confirm("Delete this schedule?")) {
    schedules.value.splice(index, 1)
  }
}

// FORM
function resetForm() {
  form.value = {
    employee: "",
    position: "",
    department: "",
    date: "",
    shift: "Morning",
    status: "Working"
  }

  editIndex.value = null
  showModal.value = false
}
</script>