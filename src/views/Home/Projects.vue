<template>
    <div class="container">
        <h2>Projekty</h2>
          <ul>
                <li>
                    Pierwsza produkcyjna wersja mikrobloga właśnie zawitała na raspberrypi. Źródła pojawią się wkrótce.
                </li>
                <li> Strona domowa wraz z mikroblogiem, którą zacząłem pisać kilka miesięcy temu i przenoszę przez kolejne technologie jest rozwinięciem 
                drugiego projektu napisanym przeze mnie w VUE. Tym razem używałem rówież Options API, aby docelowo przejść 
                na Composition API. Backend zapewnia Node.js w połączeniu z bazą MariaDB. Można tutaj znaleźć również kilka przykładowych projektów
                napisanych we frameworku THREE.js. 
                <br>
                Źródła frontendu są pod adresem: 
                <a href="http://github.com/lnkoc/uBlog_vite_router">http://github.com/lnkoc/uBlog_vite_router</a>
                <br>
                Backend jest tutaj: <a href="http://github.com/lnkoc/uBlogApi">http://github.com/lnkoc/uBlogApi</a>
                </li><br>
                <li> Pierwszym projektem przy którym zapoznawałem się z VUE jest 'local' - prosty system rejestracji wydarzeń i uczestników na 
                powstałe wydarzenia. Projekt ten na chwilę pisania tego tekstu jest w wersji 0.0.9. Działa w przeglądarce Chrome, nie jest 
                jeszcze dopasowany do innych przeglądarek oraz nie jest ukończone jego zarządanie od strony bazy danych. Służył głownie do
                zapoznania się z językiem PHP i komunikacją z bazą danych MariaDB. A od frontendu z możliwościami VUE przy pierwszym podejściu,
                gdzie korzystałem z Options API.
                <br>
                Źródła projektu znajdują się na githubie pod adresem: <a href="http://github.com/lnkoc/local">github.com/lnkoc/local</a>
                </li>
          </ul>
    </div>
</template>

<style scoped>
.container {
    padding: 30px;
}
</style>