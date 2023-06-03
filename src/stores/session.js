import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

// magazyn sesji

export const useSessionStore = defineStore('session', () => {

    const currentSession = ref()
    const hasChanged = ref()
    const isAuth = ref(false)
    const refreshTimeout = ref()

    
    // ustanowienie sesji
    
    function set(token) {

        currentSession.value = token
        isAuth.value = true
        hasChanged.value = 0
        refreshTimeout.value = setTimeout(() => {
            
            update()
        }, 2000)
    }

    // prośba o aktualizację sesji (zwiększane przez komponent po załadowaniu lub aktualizacji)

    function increment() {

        hasChanged.value++
    }


    // wyzwalacz uaktualniający sesję gdy hasChanged jest niezerowy 

    function update() {
        
        if (hasChanged.value >= 1) {
            
            axios.get('/validateToken', {params: {token: currentSession.value }}, { withCrendentials: true })
                .then((res) => {

                    if (res.status == 200) {

                        currentSession.value = res.data
                        hasChanged.value = 0
                        refreshTimeout.value = setTimeout(() => {

                            update()
                        }, 2000)
                        
                    }
                    else {

                        currentSession.value = ""
                        isAuth.value = false
                        clearTimeout(refreshTimeout.value)
                    }
                })
                .catch((err) => {

                    console.log(err)
                })
        }
        else {

            refreshTimeout.value = setTimeout(() => {

                update()
            }, 2000)
        }
    }


    // zakończenie sesji

    function end() {

        let byeToken = currentSession.value

        axios.get('/logout', {params: {token: byeToken}}, {withCredentials: true})
        .then((res) => {

            console.log(res)
        });
        currentSession.value = ""
        isAuth.value = false
    }

    return { isAuth, hasChanged, increment, update, set, end }
}
)