<template>
    <section id="certificado">
        <h1>Certificados</h1>
        <p>Conteúdo da seção Certificados</p>

        <div class="gallery">
            <div class="image-item" v-for="image in images" :key="image.id" @click="openModal(image.src)">
                <img :src="image.src" :alt="image.alt" class="img-thumbnail" />
            </div>
        </div>

        <!-- Modal de imagem ampliada -->
        <div v-if="modalOpen" class="modal" @click="closeModal">
            <div class="modal-content" @click.stop>
                <img :src="currentImage" alt="Imagem ampliada" class="modal-image" />
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'CertificadoSection',
    data() {
        return {
            modalOpen: false,  // Controle do estado do modal
            currentImage: '',  // A imagem que será exibida no modal
            images: [
                { id: 1, src: require('@/assets/certificados/diploma.jpg'), alt: 'Certificado 1' },
                { id: 2, src: require('@/assets/certificados/posarquitetura.png'), alt: 'Certificado 2' },
                { id: 3, src: require('@/assets/certificados/devops2.jpg'), alt: 'Certificado 3' },
                { id: 4, src: require('@/assets/certificados/mysql.jpg'), alt: 'Certificado 4' },
                { id: 5, src: require('@/assets/certificados/scrum.jpg'), alt: 'Certificado 5' },
                { id: 6, src: require('@/assets/certificados/python1.jpg'), alt: 'Certificado 6' },
                { id: 7, src: require('@/assets/certificados/python2.jpg'), alt: 'Certificado 7' },
                { id: 8, src: require('@/assets/certificados/devops.jpg'), alt: 'Certificado 8' }
                // Adicione mais imagens conforme necessário
            ]
        };
    },
    methods: {
        // Abre o modal com a imagem clicada
        openModal(imageSrc) {
            this.currentImage = imageSrc;
            this.modalOpen = true;
        },
        // Fecha o modal
        closeModal() {
            this.modalOpen = false;
            this.currentImage = '';  // Limpa a imagem atual
        }
    }
};
</script>

<style scoped>
section {
    background-color: darkgray;
    padding: 20px;
    height: 800px;
}

.gallery {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.image-item {
    flex: 1 1 calc(25% - 15px); /* Ajusta a largura para 4 imagens por linha, considerando o espaço entre elas */
    box-sizing: border-box;
}

.img-thumbnail {
    width: 100%;
    height: 300px;
    border: 1px solid #ddd;
    cursor: pointer;
    transition: transform 0.3s ease;
}

.img-thumbnail:hover {
    transform: scale(1.05);  /* Efeito de zoom nas imagens */
}

/* Estilo para o modal */
.modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

.modal-content {
    position: relative;
    max-width: 80%;
    max-height: 80%;
}

.modal-image {
    width: 100%;
    height: auto;
    border-radius: 8px;
}

.modal:hover {
    cursor: pointer;
}
</style>