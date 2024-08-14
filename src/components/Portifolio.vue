<template>
    <section id="portifolio">
        <h1>Portifólio</h1>
        <p>Aqui está o portifolio</p>

        <div id="carousel" class="carousel">
            <div v-for="(image, index) in images" :key="index" :class="getClass(index)">
                <img :src="image" alt="Carousel Image">
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
    </section>
</template>

<script>
    import image1 from '../assets/portifolio/foto3x4.jpg';
    import image2 from '../assets/portifolio/foto3x4.jpg';
    import image3 from '../assets/portifolio/foto3x4.jpg';
    import image4 from '../assets/portifolio/foto3x4.jpg';
    import image5 from '../assets/portifolio/foto3x4.jpg';

    export default {
        name: 'PortfolioSection', // Nome atualizado do componente
        data() {
            return {
                images: [image1, image2, image3, image4, image5],
                currentIndex: 3
            };
        },
        methods: {
            getClass(index) {
                const distance = (index - this.currentIndex + this.images.length) % this.images.length;
                switch (distance) {
                    case 0: return 'selected';
                    case 1: return 'next';
                    case 2: return 'nextRightSecond';
                    case this.images.length - 1: return 'prevLeftSecond';
                    case this.images.length - 2: return 'prev';
                    default: return distance < this.images.length / 2 ? 'hideRight' : 'hideLeft';
                }
            },
            prev() {
                this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
            },
            next() {
                this.currentIndex = (this.currentIndex + 1) % this.images.length;
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
                width: 400px;
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
                left: 30%;
                transform: translateY(50px) translateX(-50%);
            }

        #carousel img:hover {
            cursor: pointer;
        }

        #carousel div.prev img {
            width: 300px;
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
            left: 70%;
            transform: translateY(50px) translateX(-50%);
        }

            #carousel div.next img {
                width: 300px;
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
        background: darkgray; /* Cor de fundo do botão (alterada) */
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


