<script setup>

import { ref, onMounted } from 'vue'
import axios from 'axios'

const emit = defineEmits("reloaded")
const comments = ref([])


// załadowanie komentarzy

onMounted(() => {

    axios.post('/getBinComments', {withCredentials: true})
        .then((res) => {

            comments.value = res.data;

            if (comments.value.length > 0) {

                for (const item of comments.value) {

                    let date = item.CREATED.slice(0, 10).split("-").reverse().join("/");
                    item.CREATED = date;
                }
            }
            else {

                console.log("brak komentarzy w koszu");
            }
        })
        .catch((err) => {

            console.log("Błąd podczas pobierania komentarzy w koszu " + err);
        })
})


// przywrócenie komentarza

function restoreComment(commentId) {

    axios.get('/restoreComment', {params: { commentId: commentId}}, {withCredentials:true})
        .then((res) => {

            // console.log(res)
            emit("reloaded")
        })
        .catch((err) => {

            console.log(err);
        })
}


// usunięcie komentarza

function deleteComment(commentId) {

    axios.get('/deleteComment', {params: {commentId: commentId}}, {withCredentials: true})
        .then((res) => {

            // console.log(res)
            emit("reloaded")
        })
        .catch ((err)=> {

            console.log(err);
        })
}
</script>

<template>
    <template v-for="item in comments">
        <div class="articleComment">
            <span class="title">{{ item.TITLE }}</span><br><br>
            {{ item.INTRO }}<br><br>
            <div class="comment">
                <span class="nickname">{{ item.NICKNAME }}</span>
                <span class="date">{{ item.CREATED }}</span><br><br>
                {{ item.CONTENT }}<br><br>
            </div>
            <button @click.prvent="restoreComment(item.ID)">Przywróć</button> <button @click.prevent="deleteComment(item.ID)">Usuń</button>
        </div><br>
    </template>
</template>

<style scoped>
.articleComment {
    background-color: rgba(255, 255, 255, 0.75);
    padding: 20px;
}
.title {
    font-weight: bold;
}
.comment {
    color: rgb(69, 127, 236);
}
.nickname {
    float: left;
}
.date {
    float: right;
}
button {
    padding: 10px;
    border: 0px;
    color: aliceblue;
    background-color: darkred;
}
</style>