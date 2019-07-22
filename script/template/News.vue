<template>

    <main id="news">
        <transition name="zoom">
            <router-view></router-view>
        </transition>
        <section class="news__search">
             <img src="/assets/img/search.svg" class="iconSearch" @click.prevent="isOpen = !isOpen">
<transition name="slide">
 <input type="search" class="searchNews__text" v-if="isOpen" v-model="search" placeholder="Поиск по заголовку">
</transition>
          

        </section>
        <section class="news__section">
            <article class="news__article" v-for="info in searchNews" v-bind:key="info.id" >
             
                <article class="news__article__content">
                    <h3 class="news__h3">{{info.titel}}</h3>
                    <div class="text__info">
                        <p class="news__text text">{{info.text | deleteLongText}}</p>
                    </div>
                    <router-link v-if="info.boolean" class="goPosts" :to="{name:'posts',params:{id:info.id }}">Продолжение...
                    </router-link>
                </article>
                <article class="news__article__info">
                    <p class="author text">{{info.author}}</p>
                    <p class="createTime text">{{info.date}}</p>
                </article>
         
            </article>
        </section>
    </main>

</template>

<script>
    import modal from './modal.vue';
    import {mapGetters} from 'vuex';

    export default {
              data(){
            return {
                posts:null,
                search:'',
                isOpen:false,
             
            }
        },     
        computed: {
           ...mapGetters(['TASK']),
           checkLengthText() {
           this.posts = JSON.parse(JSON.stringify(this.TASK));
           let testingPosts = this.posts
                return   testingPosts.map(words => {
                    if (words.text.length > 100) {
                        words.boolean = true;
                    
                        return words
                    } else {
                        return words};
                });
            },
            searchNews(){
                return this.checkLengthText.filter(news => news.titel.match(this.search))
            }
        },
        filters:{
        deleteLongText:value => value.length >= 100 ? (value.slice(0,101)) : value
        }
        


    }
</script>

<style lang="scss">
    @import 'src/assets/style/template/news.scss';
</style>