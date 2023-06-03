<script setup>
import { RouterLink } from 'vue-router'
const emit = defineEmits(["loadComponent"]);

function loadComponent() {
    emit("loadComponent");
}
</script>

<template>
    <header>
        <div class="header-container">
            <div class="logo">
                <RouterLink to="/login">
                    <img alt="login" src="../../assets/ln.png">
                </RouterLink>
            </div>
            <nav  @click="loadComponent">
                <RouterLink to="/"><div>μBlog</div></RouterLink>
                <RouterLink to="/about"><div>O mnie</div></RouterLink>
                <RouterLink to="/hobby"><div>Hobby</div></RouterLink>
                <RouterLink to="/projects"><div>Projekty</div></RouterLink>
                <RouterLink to="/contact"><div>Kontakt</div></RouterLink>
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
.logo {
    float:left;
    width: 180px;
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
</style>