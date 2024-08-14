<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-black">
            <div class="container">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item" v-for="section in sections" :key="section.id">
                        <a class="nav-link"
                           :href="`#${section.id}`"
                           :class="{ active: activeSection === section.id }"
                           @click="setActiveSection(section.id)">
                            {{ section.name }}
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
    export default {
        name: 'NavBar',
        data() {
            return {
                activeSection: '',
                sections: [
                    { id: 'sobre', name: 'Sobre' },
                    { id: 'habilidades', name: 'Habilidades' },
                    { id: 'portifolio', name: 'Portifólio' },
                    { id: 'experiencia', name: 'Experiências' },
                    { id: 'certificado', name: 'Certificados' },
                    { id: 'contato', name: 'Contato' }
                ]
            };
        },
        mounted() {
            window.addEventListener('scroll', this.onScroll);
        },
        beforeUnmount() {
            window.removeEventListener('scroll', this.onScroll);
        },
        methods: {
            setActiveSection(sectionId) {
                this.activeSection = sectionId;
            },
            onScroll() {
                const scrollPosition = window.scrollY + 200;
                for (const section of this.sections) {
                    const element = document.getElementById(section.id);
                    if (element.offsetTop <= scrollPosition && element.offsetTop + element.offsetHeight > scrollPosition) {
                        this.activeSection = section.id;
                        break;
                    }
                }
            }
        }
    };
</script>

<style>
    .navbar-nav {
        margin: 0 20px;
    }

    .nav-link {
        color: #fff;
    }

    .nav-item a {
        color: white;
    }

    .nav-link.active {
        border-bottom: 2px solid white;
    }
</style>
