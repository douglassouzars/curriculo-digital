<template>
    <section id="portifolio">
        <h1>Portifólio</h1>
        <p>Aqui está o portifólio</p>

        <div id="carousel" class="carousel">
            <div v-for="(image, index) in images" :key="index" :class="getClass(index)">
                <!-- Adicionando a tag <a> para linkar a imagem -->
                <a :href="image.url" target="_blank">
                    <img :src="image.src" alt="Carousel Image">
                </a>
            </div>
            <div class="buttons">
                <button class="button-82-pushable" role="button" @click="prev">
                    <span class="button-82-shadow"></span>
                    <span class="button-82-edge"></span>
                    <span class="button-82-front text"> &lt; </span>
                </button>
                <button class="button-82-pushable" role="button" @click="next">
                    <span class="button-82-shadow"></span>
                    <span class="button-82-edge"></span>
                    <span class="button-82-front text"> &gt; </span>
                </button>
            </div>
        </div>

        <!-- Botão "VISUALIZAR" -->
        <div class="view-button-container">
            <button class="view-button" @click="goToPortfolio">VISUALIZAR</button>
        </div>
    </section>
</template>


<script>
    import image1 from '../assets/portifolio/dr.png';
    import image2 from '../assets/portifolio/dr.png';
    import image3 from '../assets/portifolio/dr.png';

    export default {
        name: 'PortfolioSection',
        data() {
            return {
                images: [
                    { src: image1, url: 'https://www.dreletronico.com.br' },
                    { src: image2, url: 'https://www.dreletronico.com.br' },
                    { src: image3, url: 'https://www.dreletronico.com.br' }
                ],
                currentIndex: 1 // Ajuste o índice inicial para corresponder ao novo número de itens
            };
        },
        methods: {
            getClass(index) {
                const distance = (index - this.currentIndex + this.images.length) % this.images.length;
                switch (distance) {
                    case 0: return 'selected';
                    case 1: return 'next';
                    case 2: return 'prev';
                    default: return distance < this.images.length / 2 ? 'hideRight' : 'hideLeft';
                }
            },
            prev() {
                this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
            },
            next() {
                this.currentIndex = (this.currentIndex + 1) % this.images.length;
            },
            goToPortfolio() {
                const currentImage = this.images[this.currentIndex];
                window.open(currentImage.url, '_blank');
            }
        }
    };
</script>


<style scoped>
    section {
        background-color: darkgray;

    }

    #carousel {
        position: relative;
        height: 500px;
        top: 250px;
        transform: translateY(-50%);
        overflow: hidden;
    }

        #carousel div {
            position: absolute;
            transition: transform 400ms, left 400ms, opacity 400ms, z-index 0s;
            opacity: 1;
        }

            #carousel div img {
                width: 900px;
                transition: width 400ms;
                -webkit-user-drag: none;
                box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
                border-radius: 10px;
            }

            #carousel div.hideLeft {
                left: 0%;
                opacity: 0;
                transform: translateY(50%) translateX(-50%);
            }

                #carousel div.hideLeft img {
                    width: 200px;
                }

            #carousel div.hideRight {
                left: 100%;
                opacity: 0;
                transform: translateY(50%) translateX(-50%);
            }

                #carousel div.hideRight img {
                    width: 200px;
                }

            #carousel div.prev {
                z-index: 5;
                left: 20%;
                transform: translateY(50px) translateX(-50%);
            }

        #carousel img:hover {
            cursor: pointer;
        }

        #carousel div.prev img {
            width: 500px;
        }

        #carousel div.prevLeftSecond {
            z-index: 4;
            left: 15%;
            transform: translateY(50%) translateX(-50%);
            opacity: 0.7;
        }

            #carousel div.prevLeftSecond img {
                width: 200px;
            }

        #carousel div.selected {
            z-index: 10;
            left: 50%;
            transform: translateY(0px) translateX(-50%);
        }

        #carousel div.next {
            z-index: 5;
            left: 80%;
            transform: translateY(50px) translateX(-50%);
        }

            #carousel div.next img {
                width: 500px;
            }

        #carousel div.nextRightSecond {
            z-index: 4;
            left: 85%;
            transform: translateY(50%) translateX(-50%);
            opacity: 0.7;
        }

            #carousel div.nextRightSecond img {
                width: 200px;
            }
/* Estilos do botão "VISUALIZAR" */
    .view-button-container {
        display: flex;
        justify-content: center;  /* Alinha o botão no centro */
        margin-top: 20px;  /* Espaçamento entre o carrossel e o botão */
    }
     .view-button {
        background-color: #4CAF50;  /* Cor de fundo verde */
        color: white;  /* Cor do texto */
        border: none;  /* Remove a borda */
        padding: 12px 24px;  /* Espaçamento interno */
        font-size: 16px;  /* Tamanho da fonte */
        cursor: pointer;  /* Muda o cursor ao passar por cima */
        border-radius: 8px;  /* Cantos arredondados */
        transition: background-color 0.3s ease;  /* Transição suave para a cor de fundo */
    }

    /* Efeito ao passar o mouse sobre o botão */
    .view-button:hover {
        background-color: #45a049;  /* Cor do botão ao passar o mouse */
    }


    .buttons {
        position: absolute;
        top: 50%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        transform: translateY(-50%);
    }

    .button-82-pushable {
        position: relative;
        border: none;
        background: transparent;
        padding: 0;
        cursor: pointer;
        outline-offset: 4px;
        transition: filter 250ms;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
    }

    .button-82-shadow {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 12px;
        /*background: rgba(0, 0, 0, 0.25); /* Cor da sombra (alterada) */
        will-change: transform;
        transform: translateY(2px);
        transition: transform 600ms cubic-bezier(.3, .7, .4, 1);
    }

    .button-82-edge {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 12px;
        /*background: linear-gradient(to left, #333 0%, #555 8%, #555 92%, #333 100%); /* Cor da borda (alterada) */
    }

    .button-82-front {
        display: block;
        position: relative;
        padding: 12px 27px;
        border-radius: 12px;
        font-size: 10%;
        color: black;
        background: darkgray; /* Cor de fundo do bot�o (alterada) */
        will-change: transform;
        transform: translateY(-4px);
        transition: transform 600ms cubic-bezier(.3, .7, .4, 1);
    }

    @media (min-width: 768px) {
        .button-82-front {
            font-size: 1.25rem;
            padding: 12px 12px;
        }
    }

    .button-82-pushable:hover {
        filter: brightness(110%);
        -webkit-filter: brightness(110%);
    }

        .button-82-pushable:hover .button-82-front {
            transform: translateY(-6px);
            transition: transform 250ms cubic-bezier(.3, .7, .4, 1.5);
        }

    .button-82-pushable:active .button-82-front {
        transform: translateY(-2px);
        transition: transform 34ms;
    }

    .button-82-pushable:hover .button-82-shadow {
        transform: translateY(4px);
        transition: transform 250ms cubic-bezier(.3, .7, .4, 1.5);
    }

    .button-82-pushable:active .button-82-shadow {
        transform: translateY(1px);
        transition: transform 34ms;
    }

    .button-82-pushable:focus:not(:focus-visible) {
        outline: none;
    }
</style>


