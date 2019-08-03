<template>
    <main id="contacts">
        <section class="section__contact">
            <h4 class="contact__name">Полное наименование</h4>
         
   
            <p class="contact__info text" v-for="(contacts, index) in section__contact" :key="index">{{contacts.text}} <a v-if="contacts.email"
                  :href="'malito:' + contacts.email">
                    <address>{{contacts.email}}</address>

                </a></p>
        </section>
        <section class="section__requisite">
            <h4 class="requisite__name"><a href="#" class="requisite__fileDownload" target="_blank" download>Lorem</a>
            </h4>
            <div class="requisites__info">
                <p class="requisites__info__text text" v-for="(req, index) in section__requisite" :key="index">
                    <b>{{req.name}}:&nbsp;</b><span>{{req.text}}</span>
                    </p>
        
            </div>
        </section>
        <section class="section__map">
            <div class="mapPlusForm__map">....future map</div>
        </section>
        <button class="openForm" v-if="!isOpen" @click="isOpen=true">Есть вопрос?</button>
        <section class="section__form" v-if="isOpen">
            <span class="closeForm" @click="isOpen=false"></span>
            <form class="contact__form">
                <div class="in__text">
                    <input type="text" autocomplete="off" tabindex="6" name="" id="" placeholder=" " required>
                    <label>Ваша почта/Номер лицевого счета</label>
                </div>
                <div class="in__textArea">
                    <textarea autocomplete="off" tabindex="7" placeholder=" " required></textarea>
                    <label>Ваш вопрос</label>
                </div>
                <input class="send__submit mapPlusForm__form__submit" type="submit" tabindex="8" value="Отправить">
            </form>
        </section>
    </main>
</template>

<style lang="scss">
    @import 'src/assets/style/template/contact.scss';
</style>

<script>
    import {
        mapGetters
    } from 'vuex';

    export default {
        data() {
            return {
                isOpen: false,
                requisite: null,
                contact: null
            }
        },
        methods: {
            isOpend() {
                isOpen
            }
        },
        computed: {
            ...mapGetters(['CONTACT']),
            section__requisite(){
                this.requisite = this.CONTACT.find(item=>item.section__requisite).section__requisite;
                return this.requisite
            },
            section__contact(){
                this.contact = this.CONTACT.find(item=>item.section__contact).section__contact;
                return this.contact
            }
        },
    }
</script>