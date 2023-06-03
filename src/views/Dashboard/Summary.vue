<script setup>

import { ref, defineAsyncComponent } from 'vue'
import { useSessionStore } from '../../stores/session'

const CommentsLoader = defineAsyncComponent( () => import('../../components/DashboardComponents/CommentsLoader.vue'))
const CommentsBin = defineAsyncComponent(() => import('../../components/DashboardComponents/CommentsBin.vue'))

const store = useSessionStore()
const doReload = ref(0)


// po dowolnej akcji na komentarzach odświeżenie obydwu komponentów 

function refresh() {
    
    doReload.value++
    store.increment()
}

</script>

<template>
    <div class="container">
        <h2>Podsumowanie</h2>
        <h3>Nowe komentarze do wpisów na blogu</h3>
        <CommentsLoader @reloaded="refresh()" :key="doReload" />
        <h3>Komentarze w koszu</h3>
        <CommentsBin @reloaded="refresh()" :key="doReload" />
    </div>
</template>

<style>
.container {
    padding: 30px;
}
</style>