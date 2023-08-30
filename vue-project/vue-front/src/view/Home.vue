<template>
  <div>
    <HelloWorld msg="Vue-Project" />
    <div class="main-container">
      <h1>Welcome</h1>
      <TheWelcome />
    </div>
  </div>
</template>

<script setup lang="ts">
import HelloWorld from "../components/HelloWorld.vue";
import TheWelcome from "../components/TheWelcome.vue";
</script>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
