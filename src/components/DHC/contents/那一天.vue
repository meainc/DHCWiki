<script setup>

import WikiQueto from '@/components/Wiki/WikiQueto.vue'
import WikiImage from '@/components/Wiki/WikiImage.vue'
import image1 from '@/assets/pages/那一天/1.png';
import image2 from '@/assets/pages/那一天/2.png';
import image3 from '@/assets/pages/那一天/3.png';

</script>

<template>
    <li class="uk-open">
        <a class="uk-accordion-title" href># 那一天</a>

        <div class="uk-accordion-content">
            <WikiQueto queto="那一天，走出了茅草屋的杨沧帆，发现了世界的真相" author=""/>
            在处于 “唯我独尊” 思想中几年后，杨沧帆终于还是被送去了学校。<br><br>
            进入学校的杨沧帆惊恐地发现，世界并非自己家的茅草屋，而自己也不是宇宙的主宰。
            强烈的反差一瞬击溃了杨沧帆濒临崩溃的内心，而自己肥硕而方正的大脸更是让自己成为
            全班女生取笑的对象。直到此时，<b>内心被击溃的杨沧帆依然能在学校苟延残喘，直到那一天的到来</b>
            <WikiImage :image="image1"></WikiImage>
            <WikiImage :image="image2"></WikiImage>
            <WikiImage :image="image3" text="那一天......"></WikiImage>
        </div>
    </li>


</template>

<style scoped></style>
