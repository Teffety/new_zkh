<template>
    <div class="post__window" @click="goBack()">


        <div class="loading" v-if="loading">
            Загрузка
            <span class="point one">.</span>
               <span class="point two">.</span>
                  <span class="point three">.</span>
        </div>
        <div v-if="error" class="error">Ошибка</div> 
        <div v-if="info" class="posts">
            <a class="close" @click="goBack()">&#10006;</a>
            <section class="posts-header">
                <slot name="header">
             
                    
                    <h1>{{info.titel}}</h1>
                </slot>
            </section>
            <section class="posts-body">
                <slot name="body">
                    <p>{{info.text}}</p>
                </slot>
            </section>
            <section class="posts-footer">
                <slot name="footer">
                    <p>{{info.author}}</p>
                    <p>{{info.date}}</p>
                </slot>
            </section>
        </div> 
    </div>
</template>

<script>
    export default {
        created() {
           this.loadPost();
        },
        computed: {
            task(){
         return this.$store.getters.TASK
            }        },
        data(){
            return {
                loading:false,
                error:null,
                info: null
            }
        },
        watch: {
            '$route':'loadPost'
        },
    
        methods: {
            goBack() {
               this.$router.push("/");
            },
            loadPost(){              
                this.error = this.posts = null;
                this.loading =true;           
               this.getPost(this.$route.params.id , this.task)
            },
            getPost(id,obj){
                this.loading =false;
                if(id == null) return  this.error = 'Ошибка, отсутвует id новости'
                else if (obj == null) return this.error = 'Отсутсвуют новости'
                else  return  this.info = obj.filter(post => post.id == id)[0];
            }
            
        }
    };
</script>





<style lang="scss">
    @import "../../assets/style/template/posts.scss";
    
</style>