<script setup>

import axios from 'axios'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter();
const list = ref([]);
const showList = ref(true);
const openId = ref();


// załadowanie listy wpisów

onMounted(() => {

    axios.get('/getBlogList')
        .then((res) => {

            for (let item in res.data) {

                let date = res.data[item].CREATED.slice(0,10).split("-").reverse().join("/");
                res.data[item].CREATED = date;
                list.value.push(res.data[item]);
            }
        })
})


// załadowanie wybranego artykułu

function loadArticle(id, created) {

    let dateCreated = created.split("/").join("-")

    openId.value = id
    showList.value = false
    router.push('/articles/' + dateCreated)
}


// powrót do listy wpisów

function closed() {

    showList.value = true;
    openId.value = "";
    router.push('/');
}
</script>

<template>
    <div class="container">
        <h2>μBlog</h2>
        <div v-if="showList">
            <template v-for="item in list" :key="item.ID">
                <div class="articles">
                    <div class="title">{{item.TITLE}}</div><br>
                        {{item.CREATED}}<br><br>
                        {{item.INTRO}}<br><br>
                        <button class="openButton" @click="loadArticle(item.ID, item.CREATED)">Czytaj całość</button>
                    </div><br>
            </template>
        </div>
    <RouterView v-else :articleId="openId" @close="closed" />
    </div>
</template>

<style scoped>
.container {
    padding: 30px;
}
.articles {
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.75);
}
.title {
    font-size: 1.2em;
    font-weight: bold;
}
.openButton {
  padding: 10px;
  border: 0px;
  color: aliceblue;
  background-color: cornflowerblue;
}
</style>