<template>
    <section id="certificado">
        <h1>Certificados</h1>
        <p>Conteúdo da seção Certificados</p>

        <div class="gallery">
            <div class="image-item" v-for="image in images" :key="image.id">
                <img :src="image.src" :alt="image.alt" class="img-thumbnail" />
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'CertificadoSection',
        data() {
            return {
                images: [
                    { id: 1, src: require('@/assets/certificados/diploma.jpg'), alt: 'Certificado 1' },
                    { id: 2, src: require('@/assets/certificados/devops.jpg'), alt: 'Certificado 2' },
                    { id: 3, src: require('@/assets/certificados/devops2.jpg'), alt: 'Certificado 3' },
                    { id: 4, src: require('@/assets/certificados/mysql.jpg'), alt: 'Certificado 4' },
                    { id: 5, src: require('@/assets/certificados/scrum.jpg'), alt: 'Certificado 5' },
                    { id: 6, src: require('@/assets/certificados/python1.jpg'), alt: 'Certificado 6' },
                    { id: 7, src: require('@/assets/certificados/python2.jpg'), alt: 'Certificado 7' },
                    { id: 8, src: require('@/assets/certificados/fundamentosc.jpg'), alt: 'Certificado 8' }
                    // Adicione mais imagens conforme necessário
                ]
            };
        }
    };
</script>

<style scoped>
    section {
        background-color: darkgray;
        padding: 20px;
        height:800px;
    }

    .gallery {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }

    .image-item {
        flex: 1 1 calc(25% - 15px); /* Ajusta a largura para 6 imagens por linha, considerando o espaço entre elas */
        box-sizing: border-box;
    }

    .img-thumbnail {
        width: 100%;
        height: 300px;
        border: 1px solid #ddd;
    }
</style>
