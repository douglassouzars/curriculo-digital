<template>
    <section id="experiencia">
        <h1>Experiências</h1>
        <p>Conteúdo da seção Experiências</p>

        <div class="row">
            <div class="col-md-5">
                <div class="experience-card1">
                    <div><img src="@/assets/experiencias/confea.png" alt="CONFEA Logo"></div>
                    <div class="conteudo">
                        <h5>CONFEA<br />Conselho Federal de Engenharia e Agronomia</h5>
                        <p>Estagiário em Engenharia Eletrônica por 2 ano</p>
                    </div>
                </div>
            </div>
            <div class="col-md-2 position-relative">
                <div class="timeline"></div>
                <div class="dot dot-top"></div>
                <div class="dot dot-bottom"></div>
            </div>
            <div class="col-md-5">
                <div class="experience-card2">
                    <img src="@/assets/experiencias/novacap.png" alt="NOVACAP Logo">
                    <div class="conteudo">
                        <h5>NOVACAP<br />Companhia Urbanizadora Nova Capital do Brasil</h5>
                        <p>Estagiário em Desenvolvimento de Sistemas por 2 anos</p>
                    </div>
                </div>
            </div>
        </div>


    </section>
</template>

<script>export default {
    name: 'ExperienciaSection'
};</script>

<style scoped>
    section {
        background-color: black;
    }

    h1, p {
        color: white;
    }

    .experience-card1 {
        display: flex;
        align-items: center;
        background-color: #e0e0e0;
        border-radius: 15px;
        padding: 20px;
        position: relative;
        margin-top: 300px;
        max-height: 200px;
    }

    .experience-card2 {
        display: flex;
        align-items: center;
        background-color: #e0e0e0;
        border-radius: 15px;
        margin-top: 100px;
        padding: 20px;
        position: relative;
    }

    .timeline {
        position: absolute;
        left: 50%;
        top: 100px;
        height: 80%;
        width: 4px;
        background-color: #fff;
    }

    .dot {
        height: 10px;
        width: 10px;
        background-color: #ff4d4d;
        border-radius: 50%;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }

    .dot-top {
        top: 177px;
    }

    .dot-bottom {
        bottom: 77px;
    }

    .experience-card1 img, .experience-card2 img {
        max-width: 150px;
        margin-bottom: 0;
        margin-right: 15px; /* Adicione esta margem para separar a imagem do texto */
    }


    .conteudo h5, .conteudo p {
        color: black;
        margin-left: 0;
    }

</style>
