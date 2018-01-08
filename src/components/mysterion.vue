<template>
    <div class="base notification h-100 base-scroll">
        <div class="row  h-100 ">
            <div class="col-md-6 base-perfil pl-md-5 pr-md-5 pl-4 pr-4 col-12  mx-auto ">
                <header class="mb-md-5 pl-xl-3 pr-xl-3  text-center">
                    <h1 class="text-active text-center  mt-0 mb-2 mb-md-2 mb-xl-4 mt-md-2 text-uppercase">{{titulo}}</h1>
                    <img :src="image1">
                    <Clock :blink="true" />
                </header>
                <div class="row pl-xl-3 pr-xl-3 p-2 p-md-0 w-100 mx-auto">


                <div class="position-relative d-flex justify-content-start align-items-center info-notification col-md-1 col-1   text-center align-middle d-inline-block">
                    <h4 class="mt-0 pt-2 pb-0"><a class="text-default" href="" v-if="this.agora > '08:00'" > {{dica1}}</a> </h4>
                    <h4 class="mt-0 pt-2  pb-0"><spam class="text-default active"  v-show="this.agora < '08:00'">A dica será liberada às 08:00  </spam> </h4>
                </div>
                <div class="position-relative d-flex justify-content-center align-items-cente info-notification col-md-2 col-3 text-center align-middle d-inline-block">
                    <h4 class="mt-0 pt-2 pb-0"><a class="text-default" href="" v-if="this.agora > '10:00'" > {{dica5}}</a> </h4>
                    <h4 class="mt-0 pt-2  pb-0"><spam class="text-default active"  v-show="this.agora < '11:00'">A dica será liberada às 10:00  </spam> </h4>
                </div>
                <div class="position-relative d-flex justify-content-center align-items-cente info-notification col-md-2 col-3 text-center align-middle d-inline-block">
                    <h4 class="mt-0 pt-2 pb-0"><a class="text-default" href="" v-if="this.agora > '12:30'" > {{dica5}}</a> </h4>
                    <h4 class="mt-0 pt-2  pb-0"><spam class="text-default active"  v-show="this.agora < '12:30'">A dica será liberada às 12:30  </spam> </h4>
                </div>
                <div class="position-relative d-flex justify-content-center align-items-cente info-notification col-md-2 col-3 text-center align-middle d-inline-block">
                    <h4 class="mt-0 pt-2 pb-0"><a class="text-default" href="" v-if="this.agora > '15:00'" > {{dica5}}</a> </h4>
                    <h4 class="mt-0 pt-2  pb-0"><spam class="text-default active"  v-show="this.agora < '15:00'">A dica será liberada às 15:00  </spam> </h4>
                </div>
                <div class="position-relative d-flex justify-content-center align-items-cente info-notification col-md-2 col-3 text-center align-middle d-inline-block">
                    <h4 class="mt-0 pt-2 pb-0"><a class="text-default" href="" v-if="this.agora > '17:00'" > {{dica5}}</a> </h4>
                    <h4 class="mt-0 pt-2  pb-0"><spam class="text-default active"  v-show="this.agora < '18:00'">A dica será liberada às 17:00  </spam> </h4>
                </div>
                <div class="position-relative d-flex justify-content-center align-items-cente info-notification col-md-2 col-3 text-center align-middle d-inline-block">
                    <h4 class="mt-0 pt-2 pb-0"><a class="text-default" href="" v-if="this.agora > '20:00'" > {{dica5}}</a> </h4>
                    <h4 class="mt-0 pt-2  pb-0"><spam class="text-default active"  v-show="this.agora < '20:00'">A dica será liberada às 20:00  </spam> </h4>
                </div>
                <button @click="postNew()">trololo</button>

                    <table class="table table_top_max w-100 table-notification text-default mt-0 mb-0 pb-0">
                    <tbody>

                        
                         
                    </tbody>
                </table>
            </div>

            </div>
            </div>
        </div>
</template>

<script>
import axios from 'axios';
import Clock from 'vue-digital-clock'

    export default {
        name: "mysterion",
        components: {
            Clock,
        },
        data() {
            return {
                //mysterion: '',
                dica1: '',
                dica2: '',
                dica3: '',
                dica4: '',
                dica5: '',
                resposta: '',
                agora: '',
                titulo: '',
                image: ''
            }
        },
        methods: {

            getNotification: function() {
            axios({ method: "GET", "url": "http://mysterion.vitrinum.com/api/api.php/principal/1" }).then(result => {
                //this.mysterion = result.data;
                this.titulo = result.data.titulo;
                this.dica1 = atob(result.data.dica1);
                this.dica2 = atob(result.data.dica2);
                this.dica3 = atob(result.data.dica3);
                this.dica4 = atob(result.data.dica4);
                this.dica5 = atob(result.data.dica5);
                this.resposta = atob(result.data.resposta);
                this.agora = new Date().toLocaleTimeString('en-GB', { hour: "numeric", minute: "numeric"});
                this.image = result.data.image;
            }, error => {
                console.error(error);
            });
            },
            postNew: function() {
            const formData = new FormData();
                formData.append('titulo', 'titulo do 2');
                formData.append('dica1', 'dica 1 do 2');
                formData.append('dica2', 'dica 2 do 2');
                formData.append('dica3', 'dica 3 do 2');
                formData.append('dica4', 'dica 4 do 2');
                formData.append('dica5', 'dica 5 do 2');
                formData.append('resposta', 'resposta do 2');
                formData.append('image', 'imagem do 2');
                formData.append('2018-01-09', 'data do 2');

            axios.post('http://mysterion.vitrinum.com/api/api.php/principal', formData, {
                   headers: {
                        'Content-Type': 'application/json',
                    }
                }
            )

            
            },
            tableWidth: function() {
                const $width = window.innerWidth;
                if ($width < 768) {
                    document.getElementsByTagName('table')[0].classList.add('table-responsive')
                }
            },

        },
        mounted: function() {
            this.getNotification();
            this.tableWidth();
        }
    };
</script>
<style>
</style>
