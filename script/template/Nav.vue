<template>
    <header>
        <nav>
            <div class="nav__logo">
                <router-link class="logo_link" to="/"> <img src="/assets/img/zkx.svg" /></router-link>
            </div>

            <div class="burger">
                <a href="" class="burger__btn" :class="[isOpen ? ' active' : 'defualt'] "
                    @click.prevent="clickBurger()">
                    <transition name='fade' mode="out-in">
                        <span class="burger__btn__span"></span>
                    </transition>
                </a>
            </div>
            <transition>
                <ul class="nav__ul" :class="[isOpen ? ' active' : '']" @click="isOpen = false">
                    <li v-for='(value, item,index) in link' class="nav__ul__links" v-bind:key="index">
                        <transition name="used">
                            <router-link class="nav_link" :to="item">{{ value }}</router-link>
                        </transition>

                    </li>
                </ul>
            </transition>
        </nav>
    </header>
</template>
<script>
    export default {
        data() {
            return {
                link: {
                    '/': 'Новости',
                    '/contact': 'Контакты',
                    '/about': 'О нас',
                    '/coruption': 'Противодействие корупции',
                    '/sends': 'Подача счетчиков'
                },
                isOpen: false,

            }
        },
        methods: {
            clickBurger() {
                this.isOpen = !this.isOpen;

            },
       
        }

    }
</script>
<style lang="scss" scoped>
    .used-enter-active,
    .used-leave-active {
        color: red;

    }

    .used-enter,
    .used-leave-to {
        color: green;
    }
</style>