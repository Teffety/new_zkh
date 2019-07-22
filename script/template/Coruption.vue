<template>
    <main id="coruption">

        <div class="loading" v-if="loadingCorup">
            Загрузка
            <span class="point one">.</span>
            <span class="point two">.</span>
            <span class="point three">.</span>
        </div>

        <div v-if="errorCorup" class="error">Ошибка</div>

        <section class="section__coruption__info" v-if="corupInfo">
            <article class="coruption__info">
                <h3 class="coruption__name">Lorem</h3>
                <p class="coruption__text text"></p>
            </article>
        </section>


        <div class="loading" v-if="loadingDoc">
            Загрузка
            <span class="point one">.</span>
            <span class="point two">.</span>
            <span class="point three">.</span>
        </div>

        <div v-if="errorDocs" class="error">Ошибка</div>

        <section class="section__coruption__accardion" v-if="accordionDocs">
            <article class="coruption__docs">
                <a href="" class="accardion__btn">lorem lorem</a>
                <ul class="accardion__documents">
                    <li class="accardion__documents__link">
                        <a href="#" class="accardion__link" target="_blank">
                            <img src="" alt="" class="accardion__img">lorem lorem lorem</a>
                    </li>
                </ul>
            </article>
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

    export default {
        data() {
            return {
                loadingCorup: true,
                errorCorup: null,
                corupInfo: null,
                loadingDoc: false,
                errorDocs: null,
                accordionDocs: null,
                isOpen: false,



            }
        },
        computed: {
            ...mapGetters(['CORUPINFO']),

        }

    }
</script>