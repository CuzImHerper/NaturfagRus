<script setup>
import drugas from '@/assets/drugas.json';
import Table from '@/components/Table.vue';

const drugasTables = Object.values(drugas);
</script>

<template>
    <header>
        <img src="../images/bigbilde.png"/>
    </header>

    <main>
       <Table v-for="drug of drugasTables" :title="drug.title" :start="drug.start" :mid="drug.mid" :end="drug.end" />
    </main>
</template>

<style scoped>
header img {
    width: 100%;
    height: 700px;
}

</style>