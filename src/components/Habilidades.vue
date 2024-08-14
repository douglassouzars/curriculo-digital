<template>
    <section id="habilidades">
        <h1>Habilidades</h1>
        <div class="chart-container">
            <Bar :data="data" :options="options" />
        </div>
        <div class="images-container">
            <img src="@/assets/habilidades/python.png" alt="Python" class="skill-logo">
            <img src="@/assets/habilidades/c.png" alt="C#" class="skill-logo">
            <img src="@/assets/habilidades/docker.png" alt="Docker" class="skill-logo">
            <img src="@/assets/habilidades/js.png" alt="JavaScript" class="skill-logo">
            <img src="@/assets/habilidades/vue.png" alt="Vue.js" class="skill-logo">
            <img src="@/assets/habilidades/ad.png" alt="ActiveDirectory" class="skill-logo">
            <img src="@/assets/habilidades/virtualbox.png" alt="VirtualBox" class="skill-logo">
            <img src="@/assets/habilidades/ubuntu.png" alt="Ubuntu" class="skill-logo">
            <img src="@/assets/habilidades/django.png" alt="Django" class="skill-logo">
            <img src="@/assets/habilidades/mysql.png" alt="MySQL" class="skill-logo">
            <img src="@/assets/habilidades/postegresql.png" alt="PostegreSQL" class="skill-logo">
            <img src="@/assets/habilidades/gitlab.png" alt="GitLab" class="skill-logo">
            <img src="@/assets/habilidades/sqlserver.png" alt="SQL Server" class="skill-logo">
            <img src="@/assets/habilidades/html.png" alt="HTML" class="skill-logo">
            <img src="@/assets/habilidades/aspnet.png" alt="ASP.NET" class="skill-logo">
        </div>
    </section>
</template>

<script>
    import { Bar } from 'vue-chartjs';
    import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

    ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

    export default {
        name: 'HabilidadesSection',
        components: {
            Bar
        },
        data() {
            return {
                data: {
                    labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                    datasets: [{
                        label: '',
                        data: [90, 60, 30, 80, 45, 85, 80, 70, 85, 60, 50, 70, 70, 90, 75],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)'
                        ],
                        borderWidth: 2,
                        barThickness: 10 // Ajuste a espessura da barra
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            display: false // Oculta a legenda padrão
                        },
                        tooltip: {
                            callbacks: {
                                label: function (tooltipItem) {
                                    return tooltipItem.label + ': ' + tooltipItem.raw + '%'; // Formata o tooltip
                                }
                            }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: {
                                callback: function (value) {
                                    return value + '%'; // Adiciona '%' no eixo y
                                },
                                padding: 10 // Ajusta o padding para evitar que a barra ocupe toda a altura
                            },
                            suggestedMax: 20 // Ajusta o máximo sugerido para o eixo Y
                        },
                        x: {
                            grid: {
                                display: false // Oculta a linha de grade no eixo X
                            },
                           
                        }
                    }
                }
            };
        }
    };
</script>

<style scoped>
    section {
        background-color: black;
        padding: 20px; /* Adiciona um padding para garantir que o gráfico não ocupe toda a seção */
    margin-bottom:-60px;
    }

    h1, p {
        color: white;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }
    

    .chart-container {
        margin-top: 0px; /* Ajuste para o espaço desejado */
        height: 535px;
        margin-left: 55px;
        overflow: auto;
    }

    .custom-canvas {
        display: block;
        box-sizing: border-box;
        height: 540px;
        width: 1073px;
    }

    .images-container {
        margin-left: 120px;
        margin-bottom: 60px;
        display: flex;
        flex-wrap: wrap; /* Permite que as imagens se movam para a linha seguinte em telas menores */
    }



    .skill-logo {
        width: 50px; /* Ajuste o tamanho da imagem conforme necessário */
        height: auto;
        border-radius: 20px;
        margin-right: 18px;
    }
</style>
