<script setup>
import { ref, computed } from "vue"

const baseSalary = ref(0)
const attendance = ref(0)
const hours = ref(0)
const overtime = ref(0)

const totalSalary = computed(() => {
  if (!attendance.value || !hours.value) return 0

  const hourlyRate = baseSalary.value / (attendance.value * hours.value)
  const overtimePay = overtime.value * hourlyRate * 1.5

  return baseSalary.value + overtimePay 
})
</script>

<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center">

    <div class="bg-white p-8 rounded-2xl shadow-lg w-100">

      <h1 class="text-2xl font-bold mb-6 text-center">
        Salary Calculator
      </h1>

      <div class="space-y-4">

        <div>
          <label class="block text-sm font-medium">Base Salary</label>
          <input
            v-model.number="baseSalary"
            type="number"
            class="w-full border rounded-lg p-2"
          />
        </div>

        <div>
          <label class="block text-sm font-medium">Attendance Days</label>
          <input
            v-model.number="attendance"
            type="number"
            class="w-full border rounded-lg p-2"
          />
        </div>

        <div>
          <label class="block text-sm font-medium">Working Hours / Day</label>
          <input
            v-model.number="hours"
            type="number"
            class="w-full border rounded-lg p-2"
          />
        </div>

        <div>
          <label class="block text-sm font-medium">Overtime Hours</label>
          <input
            v-model.number="overtime"
            type="number"
            class="w-full border rounded-lg p-2"
          />
        </div>

      </div>

      <div class="mt-6 p-4 bg-blue-100 rounded-lg text-center">

        <p class="text-gray-600">Total Salary</p>

        <p class="text-2xl font-bold">
          $ {{ totalSalary.toFixed(2) }}
        </p>

      </div>

    </div>

  </div>
</template>