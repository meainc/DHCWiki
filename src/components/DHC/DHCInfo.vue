<script setup>
import dhcimage from "@/assets/DHC/DHC.jpg";
import p0 from "@/components/DHC/contents/身份信息.vue";
import p1 from "@/components/DHC/contents/表演型人格.vue";
import p2 from "@/components/DHC/contents/演员的成长.vue";
import p3 from "@/components/DHC/contents/那一天.vue";
import p4 from "@/components/DHC/contents/网络大世界.vue";
</script>

<template>
    <div>
        <!--div class="uk-card uk-card-default wiki-content-menu"-->
            <div class="uk-card-body">
                <div class="DHCInfo">
                    <div class="DHCInfo-sum">
                        <img :src="dhcimage" alt="DHC">
                        <div>
                            <p>
                                <big><b>东子DHC </b><br></big>&emsp;实名杨沧帆，活跃于东方有关网络圈子，就读于湖北大专荆州学院。
                                身为一个表演型人格，从小到大被女孩子的嫌弃的杨沧帆长期无法在现实释放自己的表演欲，在2021年之前只能在自己的
                                QQ空间撰写意义不明的小作文发泄自我，<b>是妥妥的自闭国男</b>。而在2021这一年，杨沧帆在完成高考之后，犹如被堵厕所的大脑被突开，创建了
                                一个昵称为DHC，头像为东方角色芙兰朵露的新QQ，人设为<b>女高中生</b>，从此开启了他在网络的送妈之旅
                            </p>
                        </div>

                    </div>
                    <br>
                    <div class="DHCInfo-content">
                        <ul uk-accordion>
                            <p0 />
                            <p1 />
                            <p2 />
                            <p3 />
                            <p4 />
                        </ul>

                    </div>
                </div>
            </div>

        <!--/div-->

    </div>
</template>

<style scoped>
.DHCInfo-sum {
    max-width: 700px;
}
.DHCInfo {
    display: flex;
    flex-direction: column;
}

.DHCInfo-sum img {
    flex-shrink: 0;
    width: 30%;
    min-width: 110px;
    max-width: 150px;
    float: left;
    margin: 5px;
}
</style>
