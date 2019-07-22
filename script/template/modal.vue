<template>
        <div>
            <div class="modal__window" @click="close()" v-if="active">
                <div class="modal">
                <div class="close" @click="close()">Закрыть</div>
                     <section class="modal-header">
                <slot name="header"></slot>
            </section>
            <section class="modal-body">
                <slot name="body"></slot>
            </section>
            <section class="modal-footer">
                <slot name="footer"></slot>
             </section>
                </div>
            </div>
            <a class="news__readMore" href="#" @click.prevent="open()">{{ textInfo }}</a>

        </div>
    </template>
    <script>
    export default {
        data:function(){
            return{
                active:false
            }
        },
        props: ['textInfo'],
            methods: {
                open: function() {
                    this.active = true
                },
                close: function() {
                    this.active = false
                },
                onCancel: function() {
                    this.close();
                },
                onConfirm: function() {
                    this.close();
                }
            }
    }
    </script>