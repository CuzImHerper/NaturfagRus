<script setup lang=ts>
import { ref } from 'vue'

const showItems = ref(true)

const props = defineProps({
    title: String,
    start: String,
    mid: String,
    end: String,
});
</script>

<template>
    <main>
        <div class="container">
            <h2>{{ props.title }}</h2>
            <button @click="showItems = !showItems">+</button>
        </div>
        
        <Transition name="slide">
            <div v-if="showItems" class="content">
                <p>{{ props.start }}</p>
                <p>{{ props.mid }}</p>
                <p>{{ props.end }}</p>
            </div>
        </Transition>
    </main>
</template>

<style scoped>

main {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
}

.container button {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: none;
    background-color: #C9CFD9;
    color: rgb(0, 0, 0);
    font-family: 'Gowun Dodum', sans-serif;
    font-size: 20px;
    cursor: pointer;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .2);
    outline: none;
    transition: all 0.3s ease-out;
}
 .container {
    display: flex;
    margin-top: 2rem;
    border-radius: 20px 20px 0 0;
    align-items: center;
    width: 800px;
    height: 65px;
    text-align: center;
    background-color: #E1E7F2;
    color: rgb(0, 0, 0);
    font-family: 'Gowun Dodum', sans-serif;
 }

 .container h2 {
    justify-content: flex-start;
    margin-left: 20px;
 }
 .container button {
    margin: auto;
    margin-right: 20px;
 }

 .content {
    display: flex;
    flex-direction: column;
    background-color: #E1E7F2;
    width: 800px;
    gap: 10px;
    text-align: center;
    color: rgb(0, 0, 0);
    font-family: 'Gowun Dodum', sans-serif;
 }

 .content p {
    margin: 0;
    padding: 10px;
 }

 .slide-enter-active {
  transition: all 0.3s ease-out;
}

.slide-leave-active {
  transition: all 0.8s ease-in;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateY(-100px);
  opacity: 0;
}
</style>