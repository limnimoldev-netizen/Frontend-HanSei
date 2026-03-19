<template>
    <nav class="h-screen flex justify-center items-center ">
            <div class="bg-primary w-[1200px] h-[800px] flex justify-center items-center gap-5">
                    <div class="bg-secondary w-[500px] h-[750px] flex flex-col justify-center items-center gap-4">
                            <span class="font-san text-black text-3xl">Welcome Back</span>
                            <span class="text-gray-500">Enter your email and password to access your account.</span>
                            <div class=" flex flex-col ">
                                    <label for="Email" class="text-base">Email</label>
                                    <input type="text" placeholder="  Email@email.com"  class="bg-white border-1 border-primary rounded-sm w-[350px] h-[40px]">
                            </div>
                            <div class=" flex flex-col ">
                                    <label for="Password" class="text-base">Password</label>
                                    <input type="password" placeholder="  Password"  class="bg-white border-1 border-primary rounded-sm w-[350px] h-[40px]">
                            </div>
                            <div class="gap-2 flex gap-25 text-sm">
                                    <div>
                                        <input type="checkbox">  <span>   Remmber Me</span>
                                    </div>
                                    <div>
                                        <span class="text-primary">Forgot Your Password ?</span>
                                    </div>
                            </div>
                            <button class="bg-primary w-[350px] h-[50px] rounded-base font-bold text-lg text-secondary">
                                    Login   
                            </button>
                                    <span class="text-sm">----------  Or Login With  ----------</span>
                            <div class="bg-secondary w-[350px] h-[50px] border-1 border-primary rounded-base rounded-base flex justify-center items-center text-lg gap-5">
                              <Icon name="mdi:google" class="text-xl " />  Google
                            </div>
                            <div class="bg-secondary w-[350px] h-[50px] border-1 border-primary rounded-base rounded-base flex justify-center items-center text-lg gap-5">
                              <Icon name="uil:apple" class="text-xl " />  Apple
                            </div>
                            <div><span class="text-sm">Don't Have An Account?</span><span class="text-primary text-sm font-bold"><NuxtLink to="/posts/2">  Register Now</NuxtLink></span></div>
                    </div>
                    <div class="bg-black w-[650px] h-[500px]">
                        <img src="/../app/assets/login-picture.jpg" alt="" class="w-[100%] h-[100%]">
                    </div>
            </div>
    </nav>
</template>