<script setup>
import axios from 'axios'
import { ref } from 'vue'
import odata from '../assets/yangxuan/res.json'
var dataSource = odata
var displayData = ref([])
var loadComplete = ref(false)
var loadOnce = 15
var hasLoadCount = 0
function fetchData() {

}
function loadMoreData() {
    //alert("sddas")
    for (let i = 0; i < loadOnce; i++) {
        if (dataSource.length <= i + hasLoadCount) {
            loadComplete.value = true
            return
        }
        displayData.value.push(dataSource[i + hasLoadCount])

    }
    hasLoadCount += loadOnce
    if (hasLoadCount >= dataSource.length) {
        loadComplete.value = true
    } else {
        loadComplete.value = false
    }
}
function recoveryNoSearch() {
    dataSource = odata
}
function clearDisplay() {
    displayData.value = []
    hasLoadCount = 0
}
function searchData() {
    //alert('dsa')
    clearDisplay()
    var keyword = document.getElementById("yangXuanInput").value
    var accountKeyword = document.getElementById("accountKeyword").value
    var enableContentKeyword = true
    if (keyword == "" || keyword.length == 0) {
        enableContentKeyword = false
    }
    if (accountKeyword == "" || accountKeyword.length == 0) {
        enableContentKeyword = false
    }
    var resultData = []
    for (let i = 0; i < odata.length; i++) {
        if (!enableContentKeyword && odata[i].text.indexOf(keyword) < 0) {
            continue
        }
        if (accountKeyword.length > 0 && odata[i].nickname.indexOf(accountKeyword) < 0) {
            continue
        }
        resultData.push(odata[i])
    }
    dataSource = resultData
    loadMoreData()
}
loadMoreData()
</script>

<template>
    <div class="yangxuan-search-box">
        <form class="uk-search uk-search-default wiki-search-form">
            <input id="yangXuanInput" class="uk-search-input" type="search" placeholder="在 杨选 中搜索" aria-label="Search">
        </form>
        <button @click="searchData()" class="uk-button uk-button-primary yangxuan-search-button">搜索</button>

    </div>
    <div class="yangxuan-search-box-advanced">
        <ul uk-accordion>
            <li>
                <a class="uk-accordion-title" href>账号关键词</a>
                <div class="uk-accordion-content">
                    <form class="uk-search uk-search-default wiki-search-form">
                        <input id="accountKeyword" class="uk-search-input" type="search" placeholder="账号关键词,例:DHC"
                            aria-label="Search">
                    </form>
                </div>
            </li>
        </ul>
    </div>
    <hr>
    <div v-for="data in displayData" class="yangxuan-item">
        <div class="uk-card uk-card-default uk-card-body uk-width-1-2@m yangxuan-card">
            <!--h3 class="uk-card-title">Default</h3-->
            <div class="item-nickname">
                {{ data.nickname}} :
            </div>
            <div class="item-content">
                {{ data.text }}
            </div>
            <div class="item-time">
                    {{ data.timestr }}
            </div>
            <br>
                

        </div>
    </div>
    <div class="uk-card uk-card-default uk-card-body uk-width-1-2@m loadMoreDiv">
        <button @click="loadMoreData()" v-if="!loadComplete" class="uk-button uk-button-primary">加载更多</button>
        <div v-else class="uk-text-center">
            <p>已全部加载完成</p>
        </div>
    </div>
</template>

<style scoped>
.yangxuan-search-box-advanced {
    margin-top: 20px;
    margin-left: 5px;
    margin-right: 5px;
}

.uk-accordion-title {
    margin-left: 5px;
    font-size: 15px;
}
.item-content {
    margin-top: 3px;
    padding: 15px;
    font-size: 15px;
    background-color: #fcf6f6;
    
}
.item-nickname {
    font-size: 17px;
    width: 100%;
    border-bottom: 1px solid #ccc;
}
.item-time{
    color:grey;
    font-size:13px;
    float: right;
}
.yangxuan-item {
    margin: 5px;
}
.yangxuan-card{
    width: 100%;
}
.yangxuan-item form {
    width: 80%;
}

.yangxuan-search-button {
    width: 30%;
}

.yangxuan-search-box {
    margin-top: 20px;
    margin-left: 5px;
    margin-right: 5px;

}

.wiki-search-form {
    width: 70%;
}

.loadMoreDiv {
    width: 100%;
    margin: 5px;

    /*background:linear-gradient(to left,rgb(154, 236, 249),rgb(114, 187, 242));*/
}

.wiki-search-input {
    width: 80%;
}

.loadMoreDiv button {
    width: 100%;
}
</style>
