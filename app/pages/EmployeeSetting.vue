<template>
  <div class=" container banner font-sans p-10">
    
    <h1 class="text-2xl font-bold text-gray-900 mb-8 px-4">Account Settings</h1>

    <div class="flex flex-col lg:flex-row gap-8">
      
      <aside class="w-full lg:w-72 bg-white rounded-[30px] p-6 s self-start">
       
        <nav class="space-y-1">
          
            <div v-for="link in menuLinks" :key="link"
               :class="link === 'My Profile' ? 'bg-blue-50 text-[#1440b8]' : 'text-gray-500 hover:bg-gray-50'"
               class="px-5 py-3 rounded-2xl text-[14px] font-bold cursor-pointer transition-all">
            {{ link }}

          </div>

          <div class="pt-8 mt-8 border-t border-gray-50">
            
            <button class="px-5 py-3 text-red-500 text-[14px] font-bold hover:bg-red-50 w-full text-left rounded-xl">
              Delete Account
            </button>

          </div>

        </nav>

      </aside>


        <div class="flex-1 space-y-6">

            <div class="bg-white rounded-[30px] p-10  relative">
            
            <h3 class="text-lg font-bold text-gray-800 mb-8">My Profile</h3>
            
            <div class="flex items-center justify-between">
                
                <div class="flex items-center gap-6">
                
                <img src="https://i.pinimg.com/474x/03/de/cf/03decfe1c4ed0c4bba15751a67ed23b3.jpg" class="w-20 h-20 rounded-full object-cover" />
                <div>
                    
                    <h2 class="text-lg font-black text-gray-900">Rin Vannara</h2>
                    <p class="text-sm text-gray-400 font-medium">UI/UX Designer</p>
                    <p class="text-sm text-gray-400 font-medium">Phnom Penh, Cambodia</p>
                </div>

                </div>

                <NuxtLink to="/editdetail">
                        
                    <button class="flex items-center gap-2 bg-blue-50 text-[#1440b8] border border-blue-100 px-5 py-2 rounded-xl text-sm font-bold">
                        <Icon name="lucide:edit-3" /> Edit
                    </button>
                </NuxtLink>

            </div>

            </div>


            <div class="bg-white rounded-[30px] p-10  relative">
            
                <div class="flex justify-between items-center mb-10">
                
                    <h3 class="text-xl font-bold text-gray-800">Personal Information</h3>
                   
                    <NuxtLink to="/editdetail">
                        
                        <button class="flex items-center gap-2 bg-blue-50 text-[#1440b8] border border-blue-100 px-5 py-2 rounded-xl text-sm font-bold">
                            <Icon name="lucide:edit-3" /> Edit
                        </button>
                    </NuxtLink>
            </div>

            <div class="grid grid-cols-2 gap-y-10 gap-x-8">
            
                <div v-for="(val, label) in profileData" :key="label">
                
                <p class="text-lg text-gray-400 font-medium mb-2">{{ label }}</p>
                <p class="text-base font-black text-gray-800">{{ val }}</p>
                </div>

            </div>
            </div>


            <div class="bg-white rounded-[30px] p-10  relative">
            
                <div class="flex justify-between items-center mb-10">
                    <h3 class="text-xl font-bold text-gray-800">Address</h3>
                    
                    <button class="flex items-center gap-2 bg-blue-50 text-[#1440b8] border border-blue-100 px-5 py-2 rounded-xl text-sm font-bold">
                        
                        <Icon name="lucide:edit-3" /> Edit
                    </button>

                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-8">
                
                    <div v-for="(val, label) in addressData" :key="label">
                    
                    <p class="text-lg text-gray-400 font-medium mb-2">{{ label }}</p>
                    <p class="text-base font-black text-gray-800">{{ val }}</p>

                    </div>
                    
                </div>
            </div>


            <div class="flex justify-end pt-4 pb-10">
                
                <NuxtLink to="/profile-page">
                    
                    <button class="bg-primary text-white px-12 py-4 rounded-2xl font-black  shadow-blue-100 hover:bg-blue-400 ">
                        Save All Changes
                    </button>
                </NuxtLink>

            </div>

        </div>

    </div>

  </div>

</template>


<script setup>
const menuLinks = ['My Profile', 'Password & Security', 'Teams', 'Team Member', 'Notifications', 'Billing', 'Data Export']

const profileData = {
  "First Name": "Rin",
  "Last Name": "Vannara",
  "Email Address": "rin.vannara@hansei.com",
  "Phone": "+855 12 345 678",
  "Bio": "UI/UX Designer"
}

const addressData = {
  "Country": "Cambodia",
  "City / State": "Phnom Penh, Chbar Ampov",
  "Postal Code": "12354",
  "Tax ID": "AS-998-123"
}
</script>