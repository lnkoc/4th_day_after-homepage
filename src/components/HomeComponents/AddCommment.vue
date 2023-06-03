<script setup>
import { reactive, ref } from 'vue';
import axios from 'axios';

const prop = defineProps(["articleId"]);
const comment = reactive({articleId: prop.articleId, nickname:"", content: ""});
const sent = ref(false);

function sendComment() {
    axios.post('/saveComment', {params: comment})
        .then((res) => {
            console.log("wysłano komentarz " + res.status + " " + res.data);
            sent.value = true;
        })
        .catch((err) => {
            console.log("błąd wysyłania komentarza: " + err);
            //TODO wyświetlić informację o błędzie
        })
}
</script>
<template>
    <form v-if="!sent">
        <fieldset>
            <legend>Napisz coś od siebie ;)</legend>
            <label for="nickname">Nickname</label><br>
            <input type="text" v-model="comment.nickname" id="nickname" maxlength="25">
            <br><br>
            <label for="content">Komentarz</label><br>
            <textarea v-model="comment.content" id="content" rows="7" maxlength="500"></textarea>
            <br><br>
            <button @click.prevent="sendComment">Prześlij</button>
        </fieldset>
    </form>
    <div v-else>
        Twój komentarz został wysłany
    </div>
</template>

<style scoped>
form {
    color: rgb(69, 127, 236);
}
fieldset {
    border: 1px solid rgb(69, 127, 236);
}
legend {
    padding: 1em;
}
label {
    font-size: 0.8em;
}
input {
    padding: 10px;
    width: 566px;
    border: 1px solid cornflowerblue;
    outline: none;
}
textarea {
    padding: 10px;
    width: 566px;
    resize: vertical;
    border: 1px solid cornflowerblue;
    outline: none;
}
button {
    padding: 10px;
    border: 0px;
    color: aliceblue;
    background-color: cornflowerblue;
}
div {
    color: rgb(69, 127, 236);
}
</style>