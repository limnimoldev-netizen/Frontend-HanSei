<template>
  <section class="max-w-6xl mx-auto p-6">

    <!-- content -->
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold border-b">Roster Management</h1>

      <button
        @click="showModal = true"
        class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 flex gap-2"
      >
        + Add Schedule
      </button>
    </div>

    <!-- Table -->
    <div class="bg-white rounded shadow overflow-hidden">
      <table class="w-full text-left">

        <thead class="bg-blue-600 text-white">
          <tr>
            <th class="p-3">Employee</th>
            <th class="p-3">Date</th>
            <th class="p-3">Shift</th>
            <th class="p-3">Status</th>
            <th class="p-3">Status</th>
            

          </tr>
        </thead>

        <tbody>
          <tr
            v-for="(item, index) in schedules"
            :key="index"
            class="border-t"
          >
            <td class="p-3">{{ item.employee }}</td>
            <td class="p-3">{{ item.date }}</td>
            <td class="p-3">{{ item.shift }}</td>
            <td class="p-3 font-semibold"
                :class="{
                'text-green-600': item.status === 'Working',
                'text-red-600': item.status === 'Leave' || item.status === 'Off'
                }"
            >{{ item.status }}</td>
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
          @click="addSchedule"
          class="bg-green-600 text-white px-3 py-2 rounded"
        >
          Save
        </button>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"


const showModal = ref(false)
const schedules = ref([
  {
    employee: "Mony",
    date: "2026-03-15",
    shift: "Morning",
    status: "Working"
  }
])

const form = ref({
  employee: "",
  date: "",
  shift: "Morning",
  status: "Working"
})

function addSchedule() {
  schedules.value.push({ ...form.value })


  form.value = {
    employee: "",
    date: "",
    shift: "Morning",
    status: "Working"
  }

  showModal.value = false
}
</script>