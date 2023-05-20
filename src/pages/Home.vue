<script lang ="ts" setup>
import Cards from '../components/Cards.vue';

const cards = [
  {
    image: '/src/components/images/alcohol.png',
    title: 'Alkohol',
    description: 'Alkohol, eller etanol, er et rusmiddel i øl, vin og brennevin. Drikk ansvarlig og moderat for å unngå helseproblemer og avhengighet.'
  }
]
</script>

<template>
  <header>
    <img src="../components/images/banner.png" alt="banner" />
  </header>

  <main>
    <Cards v-for="item in cards" :image="item.image" :title="item.title" :description="item.description" />

  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

header img {
  width: 100%;
  height: 500px;
}
</style>