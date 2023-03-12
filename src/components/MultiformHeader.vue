<template>
    <section class="w-screen h-screen overflow-hidden bg-Pastel-blue md:flex md:justify-center md:items-center">
     <section class=" flex relative w-full h-1/3 md:bg-white md:rounded-xl md:w-2/3 md:h-2/3 md:p-3">
       <section class="
                  bg-sidebar-mobile bg-no-repeat bg-cover w-full h-full p-6
                  md:bg-sidebar-desktop md:bg-no-repeat md:h-full md: md:bg-cover md:w-1/3 md:rounded-lg"
       >
         <div>
           <div class="text-white text-xl flex justify-center items-center text-lg md:hidden">
             <router-link to="/"><span class="mr-2 border border-white py-2 px-4 rounded-full font-semibold hover:bg-Light-blue hover:text-Marine-blue">1</span></router-link>
             <router-link to="/plan"><span class="mx-2 border border-white py-2 px-4 rounded-full font-semibold hover:bg-Light-blue hover:text-Marine-blue">2</span></router-link>
             <router-link to=""><span class="mx-2 border border-white py-2 px-4 rounded-full font-semibold hover:bg-Light-blue hover:text-Marine-blue">3</span></router-link>
             <router-link to=""><span class="ml-2 border border-white py-2 px-4 rounded-full font-semibold hover:bg-Light-blue hover:text-Marine-blue">4</span></router-link>
           </div>
           <div class="hidden md:block md:text-white">
             <div class="flex items-center mb-5">
               <span class="mr-4 text-lg border border-white py-1 px-3.5 rounded-full font-semibold hover:bg-Light-blue hover:text-Marine-blue">1</span>
               <div class="">
                 <p class="text-xs text-Cool-gray">STEP 1</p>
                 <h3 class="font-semibold text-sm">YOUR INFO</h3>
               </div>
             </div>
             <div class="flex mb-5">
               <span class="mr-4 text-lg border border-white py-1 px-3 rounded-full font-semibold hover:bg-Light-blue hover:text-Marine-blue">2</span>
               <div>
                 <p class="text-xs text-Cool-gray">STEP 2</p>
                 <h3 class="font-semibold text-sm">SELECT PLAN</h3>
               </div>
             </div>
             <div class="flex mb-5">
               <span class="mr-4 text-lg border border-white py-1  px-3 rounded-full font-semibold hover:bg-Light-blue hover:text-Marine-blue">3</span>
               <div>
                 <p class="text-xs text-Cool-gray">STEP 3</p>
                 <h3 class="font-semibold text-sm">ADDS-ON</h3>
               </div>
             </div>
             <div class="flex mb-5">
               <span class="mr-4 text-lg border border-white py-1 px-3 rounded-full font-semibold hover:bg-Light-blue hover:text-Marine-blue">4</span>
               <div>
                 <p class="text-xs text-Cool-gray">STEP 4</p>
                 <h3 class="font-semibold text-sm">SUMMARY</h3>
               </div>
             </div>
           </div>
         </div>
       </section>

       <section class="md:w-2/3 md:border-2 md:border-red-300 md:py-5 md:px-10">
         <router-view />
       </section>
     </section>
    </section>
</template>

<script>



export default {
  name: "MultiformHeader",
  components: {

  },

}
</script>

<style scoped>

</style>