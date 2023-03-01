<template>
  <section>
    <div>
      <h2>Personal info</h2>
      <p>Please provide your name, email address, and phone number.</p>
    </div>
    <form>
      <div>
        <label for="text">Name</label>
        <input type="text" placeholder="e.g. Stephen King">
        <small>Thus field is required</small>
      </div>
      <div>
        <label for="email">Email Address</label>
        <input type="email" placeholder="e.g. stephenking@lorem.com">
        <small>Thus field is required</small>
      </div>
      <div>
        <label for="number">Phone Number</label>
        <input type="number" placeholder="e.g. +1 234 567 890">
        <small>Thus field is required</small>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: "InfoView"
}
</script>

<style scoped>

</style>