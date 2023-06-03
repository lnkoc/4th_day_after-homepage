<script setup>

import { reactive, onMounted } from 'vue';
import axios from "axios";
import ShowComments from './ShowComments.vue'
import AddComment from './AddCommment.vue'

const prop = defineProps(["articleId"]);
const emit = defineEmits(["close"]);
const article = reactive({
    title: "",
    createdDate: "",
    content: ""
});


// załadowanie artukułu

onMounted(() => {

    axios.get('/getBlogArticle', {params: { ID: prop.articleId}})
        .then((res) => {

            let date = res.data[0].CREATED.slice(0,10).split("-").reverse().join("/");
            article.title = res.data[0].TITLE;
            article.createdDate = date;
            article.content = res.data[0].CONTENT;
        })
})
function close() {
    emit("close");
}
</script>

<template>
    <div class="article">
      <h3>{{article.title}}</h3>
      {{article.createdDate}}<br><br>
      <span v-html="article.content"></span><br><br>
      <ShowComments :articleId="prop.articleId" />
      <AddComment :articleId="prop.articleId" /><br><br>
      <button @click="close()" class="closeButton">Powrót do listy artykułów</button>
    </div>
</template>
  
<style>
  .article {
      padding: 20px;
      background-color: rgba(255, 255, 255, 0.75);
  }
  .closeButton {
    padding: 10px;
    border: 0px;
    color: aliceblue;
    background-color: cornflowerblue;
  }
</style>