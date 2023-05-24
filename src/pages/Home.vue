<script lang ="ts" setup>
import Cards from '../components/Cards.vue';

const cards = [
  {
    image: '/src/images/alcohol.png',
    title: 'Alkohol',
    description: 'Alkohol, eller etanol, er et rusmiddel i øl, vin og brennevin. Drikk ansvarlig og moderat for å unngå helseproblemer og avhengighet.'
  }
]
</script>

<template>
  <header>
    <img src="/src/images/banner.png" alt="banner" />
  </header>

  <main>
    <Cards v-for="item in cards" :image="item.image" :title="item.title" :description="item.description" />
    <img src="/src/images/info.png" alt="informasjon" />
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: row;
  padding: 50px 0 50px 0;
  justify-content: space-evenly;
}

main img {
  width: 800px;
  height: 400px;
  margin-top: 50px;
  margin-right: 0;
}

header img {
  width: 100%;
  height: 500px;
}
</style>