<script setup>
import { RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <Navbar />
  <router-view/>
  <Footer />
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Lato:400,700');
@import url('https://fonts.googleapis.com/css2?family=Hubballi&display=swap');
</style>
