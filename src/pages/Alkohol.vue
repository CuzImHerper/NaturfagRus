<script setup>
import '@/assets/drugas.json';
import Table from '@/components/Table.vue';


</script>

<template>
    <header>
        <img src="../images/bigbilde.png"/>
    </header>

    <main>
       <Table />
    </main>
</template>

<style scoped>
header img {
    width: 100%;
    height: 700px;
}

</style>