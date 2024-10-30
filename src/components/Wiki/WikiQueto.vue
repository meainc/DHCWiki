<script setup>
import { ref } from 'vue'
const props = defineProps({
    queto: {
        type: String,
        default: ""
    },
    author:{
        type: String,
        default: ""
    }
})

//queto = "“ 我现在的内心相当于 11.3 个正常女孩子 ” --- 数学家杨沧帆”"
</script>
<template>
    <div class="WikiQueto">
        <i>
            <div class= "content">
                “
                {{ queto }}
                ”
                
            </div>
            <div class="author">
                 --- {{ author }} 
            </div>

        </i>

    </div>
</template>
<style lang="css" scoped>
.WikiQueto {
    background-color: rgb(248, 245, 245);
    padding-left: 5px;
    padding-right: 5px;
    padding-top: 10px;
    padding-bottom: 10px;

    margin-top: 10px;
    margin-bottom: 10px;
    text-align: center;
    color: rgb(128, 125, 125);
}
.author{
    margin-right: 20px;
    text-align: right;
    font-size: 13px;
    color:rgb(164, 164, 164);
}
</style>
<script>
export default {
  name: 'WikiQueto'
  // 其他选项...
}
</script>