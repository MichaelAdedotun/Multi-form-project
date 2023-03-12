<template>
  <section class="absolute bg-white z-50 top-32 left-1 mx-5 p-5 rounded-xl
                   md:relative md:top-0"
  >
    <div class="mb-7">
      <h2 class="text-2xl font-bold text-Marine-blue">Personal info</h2>
      <p class="text-Cool-gray">Please provide your name, email address, and phone number.</p>
    </div>
    <form>
      <div class="mb-3 flex flex-col">
        <label class="text-Marine-blue font-semibold" for="text">Name</label>
        <input class="border border-Cool-gray rounded-lg outline-0 py-2 px-4" type="text" placeholder="e.g. Stephen King">
        <small class="text-Strawberry-red w-full flex justify-end hidden">This field is required</small>
      </div>
      <div class="mb-3 flex flex-col">
        <label class="text-Marine-blue font-semibold" for="email">Email Address</label>
        <input class="border border-Cool-gray rounded-lg outline-0 py-2 px-4" type="email" placeholder="e.g. stephenking@lorem.com">
        <small class="text-Strawberry-red w-full flex justify-end hidden">Invalid Email</small>
      </div>
      <div class="mb-3 flex flex-col">
        <label class="text-Marine-blue font-semibold" for="number">Phone Number</label>
        <input class="border border-Cool-gray rounded-lg outline-0 py-2 px-4" type="number" placeholder="e.g. +1 234 567 890">
        <small class="text-Strawberry-red w-full flex justify-end hidden">This field is required</small>
      </div>
    </form>

    <div class="hidden md:block">
      <router-link to="/plan" class="px-5 py-3 rounded-lg bg-Marine-blue text-white absolute bottom-3 right-3">Next Step</router-link>
    </div>
  </section>
  <section>
    <div class="md:hidden">
      <router-link to="/plan" class="px-5 py-3 rounded-lg bg-Marine-blue text-white absolute bottom-3 right-5">Next Step</router-link>
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