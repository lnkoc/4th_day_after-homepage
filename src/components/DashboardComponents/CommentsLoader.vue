<script setup>

import { ref, onMounted } from 'vue'
import axios from 'axios'

const comments = ref([])
const emit = defineEmits("reloaded")


// Pobieranie pełnej listy niezatwierdzonych komentarzy

onMounted(() => {

    axios.post('/getUndoneComments',  {withCredentials: true})
        .then((res) => {

            comments.value = res.data;

            if (comments.value.length > 0) {

                for (const item of comments.value) {

                    let date = item.CREATED.slice(0,10).split("-").reverse().join("/");
                    item.CREATED = date; 
                }
            }
        })
        .catch((err) => {

            console.log("błąd pobierania pełnej listy niezatwierdzonych komentarzy... " + err);
        })    
})


// Zatwierdzenie komentarza

function confirm(commentId) {
    axios.get('/confirmComment', {params: {commentId: commentId}}, {withCredentials: true})
        .then((res) => {

            // console.log(res)
            emit("reloaded")
        })
        .catch((err) => {

            console.log("blad zatwierdzania komentarza " + err);
        })
}


// Przeniesienie komentarza do kosza

function deny(commentId) {

    axios.get('/denyComment', { params: {commentId: commentId} }, { withCredentials: true })
        .then((res) => {

            // console.log(res) 
            emit("reloaded")
        })
        .catch((err) => {

            console.log("blad przenoszenia komentarza " + err);
        })
}
</script>

<template>
    <template v-for="item in comments">
        <div class="articleComment">
            <span class="title">{{ item.TITLE }}</span><br><br>
            {{ item.INTRO }} <br><br>
            <div class="comment">
                <span class="nickname">{{ item.NICKNAME }}</span>
                <span class="date">{{ item.CREATED }}</span><br><br>
                {{ item.CONTENT }} <br><br>
            </div>
            <button class="submitButton" @click="confirm(item.ID)">Zatwierdź komentarz</button> <button class="abortButton" @click="deny(item.ID)">Przenieś do kosza</button><br>
        </div><br>
    </template>
</template>

<style scoped>
.articleComment {
    background-color: rgba(255, 255, 255, 0.75);
    padding: 20px;
}
.comment {
    color: rgb(69, 127, 236);
}
.title {
    font-weight: bold;
}
.nickname {
    float:left;
}
.date {
    float: right;
}
.submitButton {
  padding: 10px;
  border: 0px;
  color: aliceblue;
  background-color: cornflowerblue;
}
.abortButton {
  padding: 10px;
  border: 0px;
  color: aliceblue;
  background-color: darkred;
}
</style>