<template>
    <main id="about">
        <section class="section__about__carusel">
            <div class="carusel">
                <div class="carusel__content">
                    <img class="carusel__images image" :src="'assets/img/'+image" :alt="index" v-for="(image, index) in img" :key="index" v-show="index == count">
                </div>
                <a href="" class="carusel__control prev" @click.prevent="prev"><span></span></a>
                <a href="" class="carusel__control next" @click.prevent="next"><span></span></a>
            </div>
        </section>
        <section class="section__about__info">
            <p class="about__info text" v-for="(text, index) in aboutUs" :key="index">{{text}}</p>
        </section>
        <section class="section__about__lice">
            <div class="about__license">
                <figure class="license__image"><img src="" alt="" class="license__image image"></figure>
            </div>
        </section>
        <section class="section__about__files">
            <h3>Наши Документы</h3>
            <ul>
                <li v-for="(docs, index) in documents" :key="index">
                    <button target="_self" class="documents__btn" :class="{'btn__active' : date == docs.year}"
                        @click="selectedYear(docs.year)">{{docs.year}}</button>
                </li>
            </ul>
            <document-blog v-for="(docs, index) in documents" :key="index" :docs="docs" :selected="date">
            </document-blog>


        </section>
    </main>
</template>


<style lang="scss">
    @import 'src/assets/style/template/about.scss';
</style>
<script>
    import {
        mapGetters
    } from 'vuex';
    Vue.component('document-blog', {
        props: ['docs', 'selected'],
        template: `  <article class="about__documents" >
                    <ol class="documents__list__ol" v-if="selected == docs.year">
                    <li class="ul__documents" v-for="(doc, indexFiles) in docs.files" :key="indexFiles">
                        <a :href="doc.file" class="document__link" target="_blank">
                            {{doc.name}}
                        </a>
                    </li>
                </ol>
            </article>`
    })

    export default {
        data() {
            return {
                date: new Date().getFullYear(),
                count: 0,
                isActive:false
            }
        },
        computed: {
            ...mapGetters(['ABOUT']),
            img() {
                return this.ABOUT.img
            },
            aboutUs() {
                return this.ABOUT.aboutUs
            },
            documents() {
                return this.ABOUT.documents
            },
        },
        methods: {
            selectedYear(select) {
               if(this.date = select){}
                this.date = select;
            },
            prev() {
                if(this.count < 1) this.count = this.img.length - 1;
                else this.count--
            },
            next() {
                if(this.img.length - 1 == this.count) this.count = 0;
                else this.count++
            }
        },
    }
</script>