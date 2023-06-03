<script setup>
import { RouterView } from 'vue-router'
import { ref } from 'vue'
import PageHeader from '../components/HomeComponents/PageHeader.vue'
import PageFooter from '../components/HomeComponents/PageFooter.vue'

const reload = ref(0);

function chosen() {
    reload.value++;
}
</script>

<template>
    <div class="page-container">
        <PageHeader @loadComponent="chosen" />
        <div class="content-wrapper">
            <RouterView :key="reload" />
        </div>
        <PageFooter />
    </div>
</template>

<style scoped>
.page-container {
    position: relative;
    min-height: 100vh;
}
.content-wrapper {
    width: 720px;
    margin: auto;
    background-color: rgba(255, 255, 255, 0.8);
    padding-bottom: 20px;
}
</style>