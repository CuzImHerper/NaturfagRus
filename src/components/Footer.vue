<script setup>

</script>

<template>
    <footer>
        <div class="footer-container">
            <div class="footer-content">
                <h3>Kilder:</h3>

                <ul>
                    <li>Håvard</li>
                    <li>Marthin</li>
                    <li>Henriette</li>
                </ul>
            </div>
        </div>
    </footer>
</template>

<style scoped>
.footer-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #3E4452;
    color: white;
    padding: 2rem;
    font-family: 'Lato', sans-serif;
    font-size: 1.2rem;
    margin-top: 2rem;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .2);
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    padding: 0.5rem;
}
</style>