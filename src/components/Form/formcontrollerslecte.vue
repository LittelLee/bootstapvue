<template>
    <div class="formcontrolllerselect">
        <div class="contariner">
            <div class="col-md-6 col-sm-6">
                <b-form-select v-model="selected" :options="Items"></b-form-select>
                <br/>
                <div class="mt-3">
                    <strong>{{selected}}</strong>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                selected:null,
                Items:{
                    null:'Please choose something',
                    a:'Bookone',
                    b:'Booktwo',
                    c:'Bookthree',
                    e:{text:'Bookfour',value:'Four'}
                }
            }
        }
    }
</script>
<style>

</style>