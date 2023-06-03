<script setup>

import { useRouter } from 'vue-router'
import {ref, onMounted } from 'vue'
import axios from 'axios';
import { useSessionStore } from '../../stores/session'

const router = useRouter()
const store = useSessionStore()
const editArticle = ref()
const list = ref([]);


// pobranie listy wpisów

onMounted(() => {

    refresh()
})


// pobranie aktualnej listy wpisów

function refresh() {

    editArticle.value = false

    axios.get("/getArticlesList", {withCredentials: true})
        .then((res) => {

            if (res.status == 200) {

                for (let item in res.data) {

                  let date = res.data[item].CREATED.slice(0, 10).split("-").reverse().join("/")
                  res.data[item].CREATED = date

                  list.value.push(res.data[item])
                }
            }
            else {

                store.end()
            }
        })
        .catch((err) => {

            console.log(err)
        })
}


// otwarcie edycji wpisu

function openArticle(id) {

    store.increment()
    editArticle.value = true
    router.replace({path: '/dashboard/edit/' + id, params: {id}})
}


// usunięcie wpisu

function deleteArticle(deleteId) {

    axios.post('/deleteArticle', { params: { id: deleteId } }, { withCredentials: true })
        .then((res) => {

            if (res.status == 200) {
                
                store.increment()
            }
            else {

                store.end()
            }
        })
        .catch((err) => {

            console.log(err)
        })

    refresh()
}

</script>

<template>
  <div class="container">
    <div v-if="!editArticle">
        <h2>Lista artykułów</h2>
        <template v-for="item in list" :key="item.ID">
          <div class="item">
            <h3> {{item.TITLE}}</h3>
            {{ item.CREATED }}
            <p> {{item.INTRO}}</p>
            <button @click.prevent="openArticle(item.ID)" class="editButton">Edytuj</button> <button @click.prevent="deleteArticle(item.ID)" class="deleteButton">Usuń</button>
          </div>
          <br><br>
        </template>
    </div>
    <RouterView v-else @submited="refresh()" />
  </div>

</template>

<style scoped>
.container {
    padding: 30px;
}

.item {
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.75);;
}
.editButton {
  padding: 10px;
  border: 0px;
  color: aliceblue;
  background-color: cornflowerblue;
}
.deleteButton {
  padding: 10px;
  border: 0px;
  color: aliceblue;
  background-color: darkred;
}
</style>