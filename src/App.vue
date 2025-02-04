<!--<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="teste com � �reia Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
    -->
<template>
    <meta charset="UTF-8">

    <div id="app">
        <NavBar />
        <main>
            <section id="sobre">
                <Sobre />
            </section>
            <section id="habilidades">
                <Habilidades />
            </section>
            <section id="portifolio">
                <Portifolio />
            </section>
            <section id="experiencia">
                <Experiencia />
            </section>
            <section id="certificado">
                <Certificado />
            </section>
            <section id="contato">
                <Contato />
            </section>
        </main>
    </div>
</template>

<script>
    import NavBar from './components/NavBar.vue';
    import Sobre from './components/Sobre.vue';
    import Habilidades from './components/Habilidades.vue';
    import Portifolio from './components/Portifolio.vue';
    import Experiencia from './components/Experiencia.vue';
    import Certificado from './components/Certificado.vue';
    import Contato from './components/Contato.vue';

    export default {
        name: 'App',
        components: {
            NavBar,
            Sobre,
            Habilidades,
            Portifolio,
            Experiencia,
            Certificado,
            Contato
        }
    };
</script>

<style>
    /* Estilos globais para o curr�culo */
    body {
        margin: 0;
        font-family: Arial, sans-serif;
    }

    html {
        scroll-behavior: smooth;
    }

    #app {
        display: flex;
        flex-direction: column;
        background-color: black;
    }

    main {
        display: flex;
        flex-direction: column;
    }

    section {
        padding: 30px;
        margin-bottom: -40px;
        min-height: 75vh; /* Garante que cada se��o ocupe a altura total da janela de visualiza��o */
    }
    h1,p{
        text-align:center;
    }

    header {
        position: fixed;
        width: 100%;
        top: 0;
        left: 0;
        background-color: #fff;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        z-index: 1000;
    }
</style>
