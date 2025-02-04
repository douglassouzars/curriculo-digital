<template>
    <section id="contato">
        <h1>Contato</h1>
        <div class="icon-container">
            <a href="https://github.com/douglassouzars" target="_blank" class="icon-link">
                <img :src="icons.github" alt="GitHub">
            </a>
            <a href="https://www.linkedin.com/in/douglasrodrigues-dr/" target="_blank" class="icon-link">
                <img :src="icons.linkedin" alt="LinkedIn">
            </a>
            <a href="https://www.dreletronico.com.br" target="_blank" class="icon-link">
                <img :src="icons.web" alt="Site">
            </a>
            <a href="https://wa.me/61981064843" target="_blank" class="icon-link">
                <img :src="icons.zap" alt="WhatsApp">
            </a>
            <a href="mailto:douglassouza15.ds@gmail.com" class="icon-link">
                <img :src="icons.gmail" alt="Gmail">
            </a>
        </div>
    </section>
</template>

<script>
import githubIcon from '@/assets/contato/github.png';
import linkedinIcon from '@/assets/contato/linkedin.png';
import webIcon from '@/assets/contato/web.png';
import zapIcon from '@/assets/contato/zap.png';
import gmailIcon from '@/assets/contato/gmail.png';

export default {
    name: 'ContatoSection',
    data() {
        return {
            icons: {
                github: githubIcon,
                linkedin: linkedinIcon,
                web: webIcon,
                zap: zapIcon,
                gmail: gmailIcon
            }
        };
    }
};
</script>

<style scoped>
    section {
        background-color: black;
    }

    h1, p {
        color: white;
    }

    .icon-container {
        display: flex;
        justify-content: center; /* Centraliza os ícones */
        gap: 30px; /* Espaçamento entre os ícones */
        width: 100%; /* Garante que a container ocupe a largura total */
        margin: 0 auto; /* Centraliza o container */
        margin-top:200px;
    }

    .icon-link img {
        width: 70px;
        height: 70px;
        object-fit: contain;
        transition: transform 0.3s;
    }

        .icon-link img:hover {
            transform: scale(1.1);
        }
</style>
