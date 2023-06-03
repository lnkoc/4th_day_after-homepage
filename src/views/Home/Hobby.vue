<script setup>
import WebGLGallery from '../../components/HomeComponents/WebGLGallery.vue'
</script>

<template>
    <div class="container">
        <h2>Moje hobby</h2>
                <p> Poza informatyką lubię spojrzeć nieco w inną stronę. Gdy wychodzę na zewnątrz odruchowo spoglądam na niebo. 
                    Najczęściej nocą moją pierwszą uwagę przyciągają gwiazdozbiory które aktualnie są widoczne. W dalszej kolejności sprawdzam fazę w 
                    jakiej znajduje się Księżyc. Czasem szukam planet naszego Układu Słonecznego. Gdy światła uliczne gasną lub gdy znajduję się
                    poza miastem spoglądam na Drogę Mleczną. 
                </p>
                <p> Innym razem poszukuję zjawisk, których nie można obserwować rok do roku. Niebo się zmienia. Raz są to obserwacje Marsa, kiedy był 
                    bardzo blisko Ziemii i mogąc na niego spojrzeć przez uzbrojone w teleskop oko dostrzegając już tarczę zamiast malutkiego punktu,
                    który można podziwiać przy użyciu tego samego sprzętu obecnie. A jeszcze innnym może to być zaćmienie Słońca, tak jak miało 
                    to miejsce w 2006 roku w miejscowości Side w Turcji. Trzy minuty osiem sekund, jedne z najdłużych jakie mogłem sobie wyobrazić. 
                </p>
        <h2>Trzy wymiary</h2>
                <p>
                    Od pierwszych doświadczeń z grafiką trójwymiarową minęło sporo czasu. Zawsze jednak ciekawiło mnie to, w jaki sposób komputer 
                    radzi sobie z generowaniem i wyświetlaniem obrazów w trzech wymiarach. Ponadto chciałem się dowiedzieć, czy będę w stanie 
                    stworzyć takie obrazy na posiadanym komputerze? Aby się o tym przekonać było mi dane poczekać. Dosyć długo poczekać. Pierwszym
                    zagadnieniem, jakie przybliżyło mnie do uzyskania odpowiedzi było poznanie rzutu izometrycznego. Dobrych kilka lat później
                    poznając podstawy technologii OpenGL dowiedziałem się jak generować pierwsze prymitywy i jak działa kamera. Świat grafiki
                    trójwymiarowej stał się bardziej otwarty. 
                </p>
                <p>
                    Choć obecnie raczej stronię od pisania w czystym OpenGL, to moja uwaga została skupiona na technologii umożliwiającej 
                    wyświetlanie w przeglądarce intenetowej. Tak też poznałem WebGL, a ściślej framework THREE.js. Gdy zacząłem zaznajamiać się
                    z jego możliwościami powstała pewna liczba projektów, które można podejrzeć poniżej. Jednym z zagadnień, jakie wydało się 
                    interesujące jest algorytm do generowania losowych terenów. 
                </p>
      <WebGLGallery />
    </div>
</template>

<style scoped>
.container {
    padding: 30px;
}
</style>