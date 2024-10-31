<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="wikiNav">
        <div>
            <a class="wikiTitleText">
                DHC维基
            </a>
        </div>
        <div class ="wikiNavItem">
            <a class="wikiNavItem">首页</a>
        </div>
        <div class ="wikiNavItem">
            <a class="wikiNavItem">杨选阅读</a>
        </div>
    </div>

</template>

<style scoped>
.wikiNavItem{
    margin-left: 10px;
    align-self: center;
    color:#a8a8a8;
    font-size:18px;
}
.wikiTitleText a{
    color:#3a3a3a;
    
}
.wikiTitleText {
    font-size: 25px;
    font-weight: bold;
    color: rgb(211, 211, 211);
}

.wikiNav {
    background: linear-gradient(to top right, #1a1a1a, #3a3a3a);
    box-shadow: gray 0px 0px 6px 0px;
    color: white;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
    padding: 10px;

    display: flex;
    flex-direction: row;
}
</style>
