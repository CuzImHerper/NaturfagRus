<script setup>

const kilder = {
    "Forskning.no": "https://forskning.no/partner-alkohol-og-narkotika-hogskulen-pa-vestlandet/vi-har-eit-storre-problem-med-alkohol-enn-vi-vil-innromme/290893",


    "Blakors": "https://www.blakors.no/alkoholvaner-i-norge-koster-oss-dyrt/",


    "rusopplysningen.no": "https://rusopplysningen.no/alkohol"
    ,

    "Store Norske Leksikon": "https://sml.snl.no/alkohol_-_rusmiddel"
    ,

    "Ung rus": "https://www.ungrus.no/sporsmal/aw-alkohol-og-samfunnet"
    ,

    "Helsenorge": "https://www.helsenorge.no/alkohol/alkohol-og-helse/ "
    ,

    "FHI": "https://www.fhi.no/nettpub/alkoholinorge/forebyggende-tiltak/forebyggende-tiltak-pa-alkoholfeltet/"

}
</script>

<template>
    <footer>
        <div class="footer-container">
            <div class="footer-content">
                <h3>Kilder:</h3>

                <ul>
                    <li v-for="i in kilder">{{ i }}</li>
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
    padding: 0.5rem 0;
}
</style>