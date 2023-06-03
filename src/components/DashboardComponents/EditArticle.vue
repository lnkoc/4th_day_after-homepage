<script setup>

import { reactive, onMounted } from 'vue';
import axios from 'axios';
import { useSessionStore } from '../../stores/session'
import ApprovedComments from '../DashboardComponents/ApprovedComments.vue'

const prop = defineProps(["id"])
const emit = defineEmits(["submited"])
const store = useSessionStore()


const article = reactive({
    title: "",
    intro: "",
    content: "",
    created: ""
});


// pobranie treści artykułu

onMounted(() => {

    axios.post('/getArticle', {params: {id: prop.id}}, {withCredentials: true})
        .then((res) => {

            if (res.status == 200) {
                
                let date =  res.data[0].CREATED.slice(0,10).split("-").reverse().join("/")

                article.title = res.data[0].TITLE
                article.intro = res.data[0].INTRO
                article.content = res.data[0].CONTENT
                article.created = date
            }
            else {

                store.end()
            }
        })
        .catch((err) => {

            console.log("blad " + err);
        });
})


// anulowanie edycji

function abort() {

    emit("submited");
}


// aktualizacja wpisu

function update() {

    axios.post('/updateArticle', { params: {
            id: prop.id,
            title: article.title,
            intro: article.intro,
            content: article.content
        }},
        { withCredentials: true }
    )
    .then((res) => {
        
        if (res.status == 200) {
        
            store.increment()
            emit("submited")
        }
        else {

            store.end()
        }
    })
    .catch((err) => {

        console.log(err);
    })
}
</script>

<template>
    <h2>Edycja artykułu</h2>
    <form>
        <label for="title">Tytuł</label><span>{{ article.created }}</span><br>
        <input v-model="article.title" class="generalSet" type="text" maxlength="255" id="titile"><br>
        <label for="intro">Wstęp</label><br>
        <textarea v-model="article.intro" class="generalSet" maxlength="300" id="intro" rows="4"></textarea><br>
        <label for="content">Treść</label><br>
        <textarea v-model="article.content" class="generalSet" maxlength="3000" id="content" rows="20"></textarea><br>
        <button @click.prevent="update" class="submitButton">Modyfikuj</button> <button @click.prevent="abort()" class="abortButton">Anuluj</button>
    </form>
    <ApprovedComments :articleId="prop.id" />
</template>

<style scoped>
span {
    float: right;
}
.generalSet {
    width: 660px;
    padding: 10px;
    box-sizing: border-box;
    outline: 0px;
}
form label {
    font-size: 0.8em;
}    
form textarea {
    resize: none;
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