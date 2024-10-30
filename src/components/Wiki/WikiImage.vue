<script setup>
const props = defineProps({
    image: {
        type: String,
        default: ""
    },
    text:{
        type: String,
        default: ""
    }
})

//queto = "“ 我现在的内心相当于 11.3 个正常女孩子 ” --- 数学家杨沧帆”"
</script>
<template>
    <div class="WikiImage">
        <img :src="image">
        <p>{{text}}</p>

    </div>
</template>
<style lang="css" scoped>
.WikiImage {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    flex-direction: column;
}
.WikiImage img {
    width: 80%;
    max-width: 600px;
    border: 1px solid #ccc;
}
.WikiImage p {
    text-align: center;
    font-size: 12px;
    color: #706e6e;
}
</style>
