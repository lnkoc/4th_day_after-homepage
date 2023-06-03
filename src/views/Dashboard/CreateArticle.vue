<script setup>

import { ref, reactive, watch } from "vue"
import { useSessionStore } from "../../stores/session"
import axios from "axios"

const store = useSessionStore()

const article = reactive({
    title: "",
    intro: "",
    content: ""
})

const numberOfLetters = ref(0)


// aktualizacja licznika sesji co 11 znaków

watch(article, (current) => {

    let dataLength = current.title.length + current.intro.length + current.content.length
    
    if (dataLength - numberOfLetters.value > 10) {

        numberOfLetters.value = dataLength
        store.increment()
    }
})


// wysłanie wpisu

function submit() {

    axios.post('/saveArticle', { params: article }, { withCredentials: true })
        .then((res) => {

            if (res.status === 200) {

                store.increment()
                article.title = ""
                article.intro = ""
                article.content = ""
            }
            else {

                store.end()
            }
            })
        .catch((err) => {

            console.log(err);
        }); 
}

</script>

<template>
    <div class="container">
        <h2>Utwórz artykuł</h2>
        <form>
            <label for="title">Tytuł</label><br>
            <input v-model="article.title" class="generalSet" type="text" maxlength="255" id="title"><br>
            <label for="intro">Wstęp</label><br>
            <textarea v-model="article.intro" class="generalSet" maxlength="300" id="intro" rows="4"></textarea><br>
            <label for="content">Treść</label><br>
            <textarea v-model="article.content" class="generalSet" maxlength="3000" id="content" rows="20"></textarea><br>
                
            <button @click.prevent="submit" class="createButton">Wyślij</button>
        </form>
    </div>
</template>

<style>
.container {
    padding: 30px;
}
.generalSet {
    width: 660px;
    padding: 10px;
    box-sizing: border-box;
}
form label {
    font-size: 0.8em;
}    
form textarea {
    resize: none;
}
.createButton {
  padding: 10px;
  border: 0px;
  color: aliceblue;
  background-color: cornflowerblue;
}

</style>