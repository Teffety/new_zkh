<template>
    <main id="sendInfo">
<article v-if="isSend" >
    <p>{{message}}</p>
</article>

        <section class='section__sendFormInfo'>
            <form action="" id="section__sendFormInfo" @submit.prevent="onSubmit">
                <legend>Ф.И.О отправитиля</legend>
                <div class=clientInfo>

                    <div class="divForInput">
                        <input type="text" tabindex="6" placeholder=" " v-model="firstName" autocomplete="off" required>
                        <label>Ваша фамилия<em>*</em></label>

                    </div>
                    <div class="divForInput">
                        <input type="text" tabindex="7" placeholder=" " v-model="secondName" autocomplete="off" required>
                        <label>Ваше Имя<em>*</em></label>

                    </div>
                    <div class="divForInput">
                        <input type="text" tabindex="8" placeholder=" " v-model="surName" autocomplete="off" required>
                        <label>Ваше Отчество<em>*</em></label>

                    </div>
                    <div class="divForInput">
                        <input type="tel" tabindex="9" placeholder=" " v-model="phone" autocomplete="off">
                        <label>Ваш телефон</label>

                    </div>
                    <div class="divForInput">
                        <input type="text" tabindex="10" placeholder=" " v-model="street" autocomplete="off" required>
                        <label>Ваша улица и номер дома<em>*</em></label>

                    </div>
                    <div class="divForInput">

                        <input type="text" tabindex="11" placeholder=" " v-model="home" autocomplete="off" required>
                        <label>Ваш номер квартиры<em>*</em<em>*</em></label>
                    </div>
                </div>
                <legend>Холодная вода</legend>
                <div class="clientData">

                    <div class="divForInput">

                        <input type="text" tabindex="12" placeholder=" " v-model="numberOne" autocomplete="off" required>
                        <label>Номер вашего счетчика<em>*</em></label>

                    </div>
                    <div class="divForInput">

                        <input type="text" tabindex="13" placeholder=" " v-model="numberTwo" autocomplete="off">
                        <label>Перд. показания</label>

                    </div>
                    <div class="divForInput">
                        
                        <input type="text" tabindex="14" placeholder=" " v-model="numberThree" autocomplete="off" required>
                        <label>Тек. показания<em>*</em></label>

                    </div>
                </div>
                <div class="clientSend">
                    <input  type="submit" class="send__submit sumbit__sendFormInfo" tabindex="15" value="Отправить">
                </div>

            </form>
        </section>
        <section class="section__postScriptumInfo">
            <p class="text">Нажимая " Отправить " вы автоматически даете согласие на обработку персональных данных,
                которыми являются имя, фамилия, место проживание, контактный телефон.</p>
        </section>

    </main>
</template>

<style lang="scss">
    @import 'src/assets/style/template/sends.scss';
</style>

<script>
    export default {
        data(){
            return{
                firstName:null,
                secondName:null,
                surName:null,
                phone:null,
                street:null,
                home:null,
                numberOne:null,
                numberTwo:null,
                numberThree:null,
                message:null,
                isSend:false
            }
        },
        methods: {
            
            onSubmit(){
             
                console.log( this.firstName+ " <br>" + this.secondName+ " <br>" + this.surName+ " <br>" + this.phone+ " <br>" + this.street+ " <br>" + this.home + " <br>"+ this.numberOne + " <br>"+ this.numberTwo+ " <br>" + this.numberThree);
                this.message = 'Succsess'
                this.isSend = true;
            }
        }
    }
</script>