<script setup>
import { reactive, ref, watch } from 'vue';
import axios from 'axios';

const message = reactive({
    email: "",
    content: ""
});
const emailError = ref("");
const contentError = ref("");
const status = ref("");

watch(() => message.email, (email) => {
    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (reg.test(email)) {
        emailError.value = "OK";
    }
    else {
        emailError.value = "Podaj poprawny adres email";
    }
})

watch(() => message.content, (content) => {
    contentError.value = "Pozostało " + (3000 - content.length) + " znaków";
})

function submit() {
    if (emailError.value == "OK" && status.value == "") {
        axios.post('/sendEmail', {params: message})
            .then((res) => {
                status.value = "Poprawnie wysłano wiadomość";
                message.email = "";
                message.content = "";
            })
            .catch((err) => {
                status.value = "Blad wysylania wiadomości: " + err;
            });
    }
}
</script>

<template>
    <div class="container">
        <h2>Kontakt</h2>
            <form>
                <label for="email">Twój adres email:</label><br>
                <input type="email" v-model="message.email" class="generalSet" id="email" /><br>
                <div class="error">{{emailError}}</div><br>
                <label for="text">Treść wiadomości:</label><br>
                <textarea id="text" v-model="message.content" class="generalSet" maxlength="3000" rows="20" /><br>
                <div class="error">{{contentError}}</div><br>
                <button @click.prevent="submit" class="sendButton">Wyślij</button> {{status}}
            </form>
            Ta podstrona jeszcze znajduje się w budowie. Proszę o inną formę kontaktu
            <!-- //TODO Podpiąć tę podstronę pod BE,  -->
    </div>
</template>

<style scoped>
.container {
    padding: 30px;
}
.generalSet {
    width: 660px;
    padding: 10px;
    resize: none;
    box-sizing: border-box;
}
.error {
    font-size: small;
    float: right;
}
.sendButton {
    padding: 10px;
    border: 0px;
    color: aliceblue;
    background-color: cornflowerblue;
}
</style>