<template>
    <div class="flex flex-col gap-3 ml-20 mr-20">
        <div class="text-3xl">
             <h1>Profile picture change</h1>
        </div>
    <div class="flex gap-5 items-center pb-5 border-b ">
      <div class="w-30 h-30 bg-primary rounded-full overflow-hidden">
        <img src="https://cdn-icons-png.flaticon.com/512/7084/7084424.png" alt="">
      </div>
      <button class="p-3 rounded-lg border-gray-400 border hover:bg-primary">Change</button>
      <button class="p-3 rounded-lg border-gray-400 border hover:bg-primary">Remove</button>
    </div>
    <h1 class="text-2xl font-semibold">Personal Information</h1>
    <div class="flex gap-5">
      <div class="flex flex-col gap-3 w-full">
        <label for="">First Name</label>
        <form action="">
          <input type="text" placeholder="Vannara" class="w-full p-5 border border-line rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
        </form>
      </div>
      <div class="flex flex-col gap-3 w-full">
        <label for="">Last Name</label>
        <form action="">
          <input type="text" placeholder="Rin" class="w-full p-5 border border-line rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
        </form>
      </div>
    </div>
    <div class="flex gap-5">
      <div class="flex flex-col gap-3 w-full">
        <label for="">Gender</label>
        <div class="grid grid-cols-2 border border-gray-400 rounded-lg">
          <form action="" class="w-full flex gap-6 items-center p-5 border-r border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary">
            <input type="radio" class="w-5 h-5">
            <label for="">Male</label>
          </form>
          <form action="" class="w-full flex gap-6 items-center p-5 border-l border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary">
            <input type="radio" class="w-5 h-5">
            <label for="">Female</label>
          </form>
        </div>
      </div>
      <div class="flex flex-col gap-3 w-full">
        <label for="">Date of birth</label>
        <form action="">
          <input type="date" placeholder="Rin" class="w-full p-5 border border-line rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
        </form>
      </div>
    </div>
    <div class="flex gap-5">
      <div class="flex flex-col gap-3 w-full">
        <label for="">Telephone</label>
        <form action="">
          <input type="text" placeholder="12 345 6789" class="w-full p-5 border border-line rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
        </form>
      </div>
      <div class="flex flex-col gap-3 w-full">
        <label for="">Email Address</label>
        <form action="">
          <input type="email" placeholder="example@gmail.com" class="w-full p-5 border border-line rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
        </form>
      </div>
    </div>


    <div class="flex gap-5">
      <div class="flex flex-col gap-3 w-full">
        <label for="">Mbbs passing year</label>
        <form action="">
          <input type="date" placeholder="2016" class="w-full p-5 border border-line rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
        </form>
      </div>
      <div class="flex flex-col gap-3 w-full">
        <label for="">Designation</label>
        <form action="">
          <input type="text" placeholder="Lacturer" class="w-full p-5 border border-line rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
        </form>
      </div>
    </div>


      <div class="flex gap-5">
      <div class="flex flex-col gap-3 w-full">
        <label for="">Bmdc reg</label>
        <form action="">
          <input type="text" placeholder="243576" class="w-full p-5 border border-line rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
        </form>
      </div>
      <div class="flex flex-col gap-3 w-full">
        <label for="">First date of joining</label>
        <form action="">
          <input type="date" placeholder="" class="w-full p-5 border border-line rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
        </form>
      </div>
    </div>

     <div class="flex gap-5">
      <div class="flex flex-col gap-3 w-2xl">
        <label for="">Current Position</label>
        <select name="" id="" class="w-full p-5 border border-line rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
            <option value="">Lecturer</option>
        </select>
      </div>
      </div>


      <div class="flex gap-5">
      <div class="flex flex-col gap-3 w-81">
        <label for="">New Position</label>
        <form action="">
          <input type="text" placeholder="Lacturer" class="w-full p-5 border border-line rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
        </form>
      </div>
      <div class="flex flex-col gap-3 w-81">
        <label for="">Active Date</label>
        <form action="">
          <input type="date" placeholder="" class="w-full p-5 border border-line rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
        </form>
      </div>
    </div>
    
    <div class="flex items-center justify-center gap-4">
        <button class="p-3 rounded-lg border-gray-400 border w-50 hover:bg-primary
        ">Cancel</button>
        <button class="p-3 rounded-lg border-gray-400 border w-50 hover:bg-primary
        ">Save</button>
    </div>9

    
  </div>
  </template>