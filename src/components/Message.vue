<template>
<div class="alert alert-info mt-4" role="alert">
  <p class="text-center pt-3 ">{{ msg }}</p>
</div>
</template>

<script>
  export default {
    name: "Message",
    props: {
      msg: String
    }
  }
</script>

<style scoped>
</style>