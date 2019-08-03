<template>
    <main id="coruption">
        <!--
        <div class="loading" v-if="loadingCorup">
            Загрузка
            <span class="point one">.</span>
            <span class="point two">.</span>
            <span class="point three">.</span>
        </div>

        <div v-if="errorCorup" class="error">Ошибка</div>
-->
        <section class="section__coruption__info">
            <article class="coruption__info" v-for="(inform, index) in informations" :key="index">
                <h2 class="coruption__name">{{inform.titel}}</h2>
                <p class="coruption__text">{{inform.text}}</p>
            </article>
        </section>


        <section class="section__coruption__accardion">
            
           <accardion-element  v-for="(docs, index) in accardionPost" :key="index" :docs="docs"></accardion-element>
            
        </section>
    </main>
</template>

<style lang="scss">
    @import 'src/assets/style/template/coruption.scss';
</style>

<script>
    import {
        mapGetters
    } from 'vuex';
    
    Vue.component('accardion-element',{
    data(){
        return{
            isOpen:false,
            
        }
    },
    props:['docs'],
    template:`<article class="coruption__docs">
                <button class="accardion__btn" @click="isOpen = !isOpen">{{docs.name}}</button>
                <transition name="accardions">
                <ul class="accardion__documents" v-if="isOpen">
                    <li class="accardion__documents__link" v-for="(doc, indexFiles) in docs.files" :key="indexFiles">
                        <a :href="doc.file" class="accardion__link" target="_blank">{{doc.name}}</a>
                    </li>
                </ul>
                </transition>
                </article>
           `
    })


    export default {
        data() {
            return {
                information:null,
                posts:null
            }
        },
        computed: {
            ...mapGetters(['CORUPINFO']),
            informations() {
             this.information = this.CORUPINFO.find(item => item.info).info;      
                return this.information
            },
            accardionPost(){
                  this.posts = this.CORUPINFO.find(item => item.document).document;      
                return this.posts
            }

        },
        methods: {
            openAccardion(){
                this.isOpen = !this.isOpen
            }
        },

    }
</script>