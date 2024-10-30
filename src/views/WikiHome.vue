<script setup>
import WikiIntro from '../components/WikiHomeMenu/WikiIntro.vue';
import DHCIntro from '../components/WikiHomeMenu/DHCIntro.vue';
</script>

<template>
    <header>
    </header>

    <main>
        <div class="uk-card uk-card-default wiki-content-menu">
            <ul uk-accordion="">
                <WikiIntro/>
                <DHCIntro/>
            </ul>
        </div>
    </main>
</template>

<style scoped>
.wiki-content-menu{
    padding: 20px;
}
</style>
