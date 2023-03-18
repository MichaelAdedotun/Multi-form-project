<template>
  <section class="absolute bg-white z-50 top-32 left-1 mx-5 p-5 rounded-xl
                   md:relative md:top-0 md:mx-0 md:p-0 "
  >
    <div class="mb-7 md:mb-3">
      <h2 class="text-2xl font-bold text-Marine-blue md:text-xl">Personal info</h2>
      <p class="text-Cool-gray md:text-sm">Please provide your name, email address, and phone number.</p>
    </div>
    <form>
      <div class="mb-3 flex flex-col md:mb-2">
        <label class="text-Marine-blue font-semibold md:text-sm" for="text">Name</label>
        <input class="border border-Cool-gray rounded-lg outline-0 py-2 px-4" type="text" placeholder="e.g. Stephen King">
        <small class="text-Strawberry-red w-full flex justify-end hidden">This field is required</small>
      </div>
      <div class="mb-3 flex flex-col md:mb-2">
        <label class="text-Marine-blue font-semibold md:text-sm" for="email">Email Address</label>
        <input class="border border-Cool-gray rounded-lg outline-0 py-2 px-4" type="email" placeholder="e.g. stephenking@lorem.com">
        <small class="text-Strawberry-red w-full flex justify-end hidden">Invalid Email</small>
      </div>
      <div class="mb-3 flex flex-col md:mb-2">
        <label class="text-Marine-blue font-semibold md:text-sm" for="number">Phone Number</label>
        <input class="border border-Cool-gray rounded-lg outline-0 py-2 px-4" type="number" placeholder="e.g. +1 234 567 890">
        <small class="text-Strawberry-red w-full flex justify-end hidden">This field is required</small>
      </div>
    </form>

    <div class="">
      <router-link to="/plan" class="px-5 py-3 rounded-lg bg-Marine-blue text-white absolute -bottom-1/3 right-0
                      md:-bottom-1/4 right-5 lg:-bottom-1/3"
      >
        Next Step
      </router-link>
    </div>
  </section>

</template>

<script>
export default {
  name: "InfoView"
}
</script>

<style scoped>

</style>