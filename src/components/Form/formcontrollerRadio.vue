<template>
    <div class="formcontrollerradio">
        <div class="container">
            <div class="row clearfix">
                <div class="col-md-6 col-sm-6">
                    <!--Default  options is a Array or Object///if array , every element is a object-->


                    <!--<b-form-radio v-model="selected" :options="Items"></b-form-radio>-->

                    <!--<div class="mt-3">-->
                        <!--<h3>{{selected}}</h3>-->
                    <!--</div>-->




                    <!--Stack  size=>sm-->
                    <b-form-radio v-model="selected" :options="Items" stacked size="sm"></b-form-radio>

                    <div class="mt-3">
                    <h3>{{selected}}</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                selected:'',
                Items:[
                    {
                        text:'Bookone',
                        value:'One',
                        disabled:false //It is defult
                    },
                    {
                        text:'Booktwo',
                        value:'two'
                    },
                    {
                        text:'Bookthree',
                        value:'Three',
                        disabled:true //It is defult
                    }
                ]
            }
        }
    }
</script>
<style>

</style>