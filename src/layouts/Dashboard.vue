<script setup>

import { RouterView } from 'vue-router'
import { ref } from 'vue'
import DashboardHeader from '../components/DashboardComponents/DashboardHeader.vue'
import DashboardFooter from '../components/DashboardComponents/DashoardFooter.vue'
import { useSessionStore } from '../stores/session'

//TODO (wishlist) sprawdzać stan połączenia z serwerem - może osobny komponent?

const reload = ref(0)
const store = useSessionStore()

function chosen() {
    
    store.increment()
    reload.value++
}
</script>

<template>
    <div class="page-container">
        <DashboardHeader @loadComponent="chosen()" />
        <div class="content-wrapper">
            <RouterView :key="reload" />
        </div>
        <DashboardFooter />
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