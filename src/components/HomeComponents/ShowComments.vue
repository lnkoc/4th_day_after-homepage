<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const prop = defineProps(["articleId"]);
const display = ref(false);
const comments = ref([]);

onMounted(() => {
    axios.post('/getComments', {params: {articleId: prop.articleId}})
        .then((res) => {
            comments.value = res.data;
            if (comments.value.length > 0) {
                display.value = true;
                for (const item of comments.value) {
                    let date = item.CREATED.slice(0,10).split("-").reverse().join("/");
                    item.CREATED = date; 
                }
            }
        })
        .catch((err) => {
            console.log("Błąd pobierania komentarzy: " + err);
        });
})

</script>

<template>
    <div v-if="display">
        <h3>Komentarze</h3>
        <template v-for="item in comments">
            <div class="comment">
                <span class="name">{{ item.NICKNAME }}</span>
                <span class="date">{{ item.CREATED }} </span><br>
                {{ item.CONTENT }}
            </div>
            <br>
        </template>
    </div>
    <div v-else>
        Nie ma jeszcze komentarzy
    </div>
</template>

<style scoped>
* {
    color: rgb(69, 127, 236);
}
.name {
    font-weight: bold;
    float: left;
}
.date {
    float: right;
}
.comment {
    padding: 10px;
    text-align: justify;
    background-color: white;
}
</style>