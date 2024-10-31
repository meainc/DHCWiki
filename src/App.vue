<script setup>
import { RouterLink, RouterView } from 'vue-router'
import WikiHeader from './components/WikiHeader.vue'
</script>

<template>
  <header>
  </header>
  <div class="wikiView">
    <WikiHeader />
    <div class="fullNav">
    </div>
    <div class="content">
      <RouterView />
    </div>
  </div>

</template>

<style scoped>
.wikiView{

}
.fullNav {
  width: 100%;
  height: 40px;
}

.content {

  padding: 10px;
}
</style>
