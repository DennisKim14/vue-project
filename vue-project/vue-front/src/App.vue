<template>
  <body class="body">
    <Header :logo="logo_src" :alt="app_name" />
    <Footer />
  </body>
</template>

<script setup lang="ts">
import Header from "./components/common/Header.vue";
import Footer from "./components/common/Footer.vue";

const logo_src = "/src/assets/logo.svg";
const app_name = "Vue-Project";
</script>

<style>
body {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.body {
  background-color: #2f2f2f;
  color: #ffffff;
}

.main-container {
  margin: 50px;
  min-height: 250px;
}

h1 {
  text-align: center;
  font-size: 42px;
  margin-bottom: 30px;
  color: #222;
}
</style>
