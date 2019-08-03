<template>
    <header>
        <nav>
           <!-- <div class="nav__logo">
                <router-link class="logo_link" to="/"> <img src="/assets/img/zkx.svg" /></router-link>
            </div>
-->
            <div class="burger">
                <a href="" class="burger__btn" :class="[isOpen ? ' active' : 'defualt'] "
                    @click.prevent="clickBurger()" >
                    <transition name='fade' mode="out-in">
                        <span class="burger__btn__span"></span>
                    </transition>
                </a>
            </div>
            <transition>
                <ul class="nav__ul" :class="[isOpen ? ' active' : '']" @click="isOpen = !isOpen">
                    <li v-for='(value, item,index) in link' class="nav__ul__links" v-bind:key="index">
                        <transition>
                            <router-link class="nav_link" :tabindex="index" :to="item">{{ value }}
                            <span></span>
                            </router-link>
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
                    '/coruption': 'коррупция',
                    '/sends': 'Счетчики'
                },
                isOpen: false
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