<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
    image: String,
    title: String,
    description: String,
});

</script>

<template>
    <RouterLink to="/alkohol">
        <div class="card-container">
            <img :src="image" alt="card image" />
            <h1>{{ props.title }}</h1>
            <p>{{ props.description }}</p>
        </div>
    </RouterLink>
</template>

<style scoped>
.card-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    height: 100%;
    width: 300px;
    margin: 1rem;
    padding: 0;
    background-color: #808CA7;
    box-shadow: 17px 20px 7px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    color: white;
}

.card-container img {
    margin-top: 10px;
    width: 250px;
    height: 300px;
}

.card-container h1 {
    margin-bottom: 0;
}

.card-container h1,
 p {
    font-family: 'Lato', sans-serif;
    padding-left: 15px;
    width: 100%;
    float: left;
}
</style>