<template>
    <div class="formController">
        <div class="container">
            <div class="row clearfix">
                <div class="col-md-6 col-sm-6">
                    <b-form-checkbox v-model="state_1" value="selected" unchecked-value="no_accepted">
                        I will choose something
                    </b-form-checkbox>

                    <div><strong>{{state_1}}</strong></div>
                </div>
            </div>

            <!--Form-fieldset-->
            <div class="row clearfix">
                <div class="col-m-6 col-sm-6">
                    <b-form-fieldset :state="state" :description="desc" :label="label" :feedback="feedback" >
                        <b-form-checkbox v-model="selected" value="orange" >Orange</b-form-checkbox>
                        <b-form-checkbox v-model="selected" value="apple">Apple</b-form-checkbox>
                        <b-form-checkbox v-model="selected" value="pineapple">Pineapple</b-form-checkbox>
                        <b-form-checkbox v-model="selected" value="grape">Grape</b-form-checkbox>
                    </b-form-fieldset>
                    <hr/>
                    <div class="mt-2">
                        Selected:<strong>{{selected}}</strong>
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
                selected:[],
                label:'Choose Your Favorite foult',
                desc:'Select at most <b>2</b> flavours',
                state_1:''
            }
        },
        computed:{
            feedback() {
                if(this.selected.length>2)
                {
                    return "Don't be greedy!";
                }
                else if(this.selected.length===1){
                    return "Select one more.....";
                }
                return '';
            },
            state() {
                if(this.selected.length>2){
                    return 'danger';
                }else if(this.selected.length===1){
                    return 'warning'
                }else if(this.selected.length === 2)
                {
                    return 'success'
                }
                return '';
            }
        }
    }
</script>
<style>

</style>