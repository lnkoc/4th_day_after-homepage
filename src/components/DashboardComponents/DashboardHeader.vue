<script setup>

import { RouterLink, useRouter } from 'vue-router'
import { useSessionStore } from '../../stores/session'

const emit = defineEmits('loadComponent')
const store = useSessionStore()
const router = useRouter();


// wylogowanie 

function logout() {

    store.end()
    router.push("/")
}
</script>

<template>
    <header>
        <div class="header-container">
            <div class="desc">Panel</div>
            <nav @click.prevent="emit('loadComponent')">
                <RouterLink to="/dashboard/summary"><div>Podsumowanie</div></RouterLink>
                <RouterLink to="/dashboard/create"><div>Utwórz artykuł</div></RouterLink>
                <RouterLink to="/dashboard/list"><div>Edycja artykułów</div></RouterLink>
                <div class="logout" @click="logout">Wyloguj</div>
            </nav>
        </div>
    </header>
</template>

<style>

header {
  top: 0px;
  position: sticky;
  width: 100%;
  background-color: cornflowerblue;
  z-index: 1;
}

.header-container {
  width: 720px;
  height: 60px;
  margin: auto;
  overflow: hidden;
  background-color: rgb(69, 127, 236);
}
nav {
  height: 60px;
  padding: 5px 0px 0px 0px;
  border: 0px;
  float: right;
  text-align: right;
  overflow: hidden;
}
nav div {
    float: left;
    padding: 17px 12px 21px 12px;
    margin: auto;
    background-color: rgb(69, 127, 236);
    color: aliceblue;
    border: 0px;
    transition-duration: 0.4s;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
nav div:hover {
    background-color: aliceblue;
    color: rgb(69, 127, 236);
}
.desc {
    width: 100px;
    float: left;
    padding: 19px;
    color: aliceblue;
    font-size: 19px;
    font-weight: bold;
}
.logout {
    cursor: pointer;
}
</style>
