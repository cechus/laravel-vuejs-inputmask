<template>
    <div>
        <input class="form-control" v-model="date" placeholder="dd/mm/yyyy" ref="date"  @keypress.enter="log()"/>
        <input class="form-control" v-model="currency" placeholder="102,423.57" ref="currency"  @keypress.enter="log()"/>
    </div>
</template>
<script>
import { dateInputMask, moneyInputMask, parseMoney }  from "../helper.js";
    export default {
        data(){
            return{
                date:null,
                currency:null,
            }
        },
        mounted() {
            Inputmask(dateInputMask()).mask(document.querySelectorAll('input')[0]);
            Inputmask(moneyInputMask()).mask(this.$refs.currency);
        },
        methods:{
            log(){
                console.log(this.date);
                console.log(parseMoney(this.currency));
            }
        }
    }
</script>
