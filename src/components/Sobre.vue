<template>

    <section id="sobre">
        <div class="container">
            <div class="descricao">
                <h1>OLÁ! <br />Me chamo Douglas Rodrigues Souza</h1><br />
                <h3>
                    Tenho 25 anos e resido em Brasília, Brasil.
                    Sou engenheiro e desenvolvedor de sistemas há cerca de três anos.
                </h3><br />
                <p>
                    Possuo habilidades significativas em Django, Python, MySQL, Active Directory, GitLab, Docker e Linux. Tive a oportunidade de trabalhar na Novacap (Companhia Urbanizadora da Nova Capital do Brasil) e no Confea (Conselho Federal de Engenharia e Agronomia).
                </p>
            </div>
            <div class="foto">
                <img src="@/assets/perfil.jpg" alt="Sua Foto">
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'SobreSection'
    };
    window.onload = () => {
        const element = document.getElementById('sobre');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

</script>

<style scoped>
    section {
        background: linear-gradient( rgba(0, 0, 0, 0.5), /* Cor preta com 50% de opacidade */
        rgba(0, 0, 0, 0.8) /* Cor preta com 50% de opacidade */
        ), url('@/assets/CAPA.png');
        background-size: cover; /* Garante que a imagem cubra todo o fundo */
        background-position: center; /* Centraliza a imagem */
        height: 10%;
    }
    h1, h3, p {
        color: white;
        text-align: justify;
    }



    #sobre {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2rem;
        background-color: #f4f4f4; /* Cor de fundo da seção */
    }

    .container {
        display: flex;
        align-items: center;
        max-width: 1200px;
        margin: 0 auto;
    }

    .foto {
        margin-left: 4rem; /* Adiciona um espaço entre a foto e a descrição */
        border: 15px solid #fff;
        border-radius:5%;
    }

        .foto img {
            width: 230px;
            height: 300px;
            border-radius: 5%;
            object-fit: cover;
        }

    .descricao {
        max-width: 900px;
    }

        .descricao h1 {
            margin-top: 0;
        }

        .descricao p {
            line-height: 1.6;
        }
</style>
