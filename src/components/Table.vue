<script setup lang=ts>
import { ref } from 'vue'

const showItems = ref(true)

const props = defineProps({
    id: String,
    start: String,
    mid: String,
    end: String,
});
</script>

<template>
    <main>
        <div class="container">
            <h2>{{ props.id }}</h2>
            <h2>Info</h2>
            <button @click="showItems = !showItems">+</button>
            <Transition>
                <div class="content">
                    <p v-if="showItems">Hello</p>
                    <p v-if="showItems">Ok</p>
                    <p v-if="showItems">Bye</p>
                </div>
            </Transition>
        </div>
    </main>
</template>

<style scoped>

main {
    display: flex;
    width: 100%;
    justify-content: center;
}
 .container{
    display: flex;
    margin-top: 2rem;
    align-items: center;
    width: 800px;
    height: 65px;
    text-align: center;
    background-color: #E1E7F2;
    color: rgb(0, 0, 0);
    font-family: 'Gowun Dodum', sans-serif;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .2);
 }

 .container h2 {
    justify-content: flex-start;
    margin-left: 15px;
 }
 .container button {
    margin: auto;
    margin-right: 20px;
 }

 .content {
    display: none;
    flex-direction: column;
    width: 100%;
    gap: 10px;
    text-align: center;
    color: rgb(0, 0, 0);
    font-family: 'Gowun Dodum', sans-serif;
 }
</style>