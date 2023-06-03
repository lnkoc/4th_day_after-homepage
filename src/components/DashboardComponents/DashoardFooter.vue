<script setup>
import { storeToRefs } from 'pinia'
import { useSessionStore } from '../../stores/session'
import { watch } from 'vue'

const store = useSessionStore()
const { hasChanged } = storeToRefs(store)

watch( 
    hasChanged, () => {
        console.log("Zaktualizuj sesję...")
    }
)


</script>

<template>
    <footer>
        Liczba rządań aktualizacji sesji: {{ hasChanged }} 
    </footer>
</template>

<style>
footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    min-width: 720px;
    height: 20px;
    text-align: right;
    padding-top: 4px;
    background-color: cornflowerblue;
    color: aliceblue;
}
</style>