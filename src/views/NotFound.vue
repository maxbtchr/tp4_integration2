<template>
  <div class="container d-flex justify-content-center flex-column">
    <h1 class="text-center">Woops!</h1>
    <p class="text-center">It appears this page does not exist.</p>
    <div class="d-flex justify-content-center">
      <button class="btn btn-primary" @click="goBack">Go Back</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.back();
    },
  },
};
</script>
