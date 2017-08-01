<template>
    <div class="formcontrollerFieldset">
        <div class="container">
            <div class="row clearfix">
                <!--label description feedback state label-align label-size label-cols-->
                <div class="col-sm-6 col-md-6">
                    <b-form-fieldset
                            label="This is header"
                            description="Let us konw your name"
                            :feedback="feedback"
                            :state="state"
                            :label-col="3"
                    >
                        <b-form-input v-model="name" :state="state"></b-form-input>
                    </b-form-fieldset>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                name:''
            }
        },
        computed:{
            feedback() {
                return this.name.length ? '':'Please input your name';

            },
            state() {
                return this.name.length ? 'success':'warning';
            }
        }
    }
</script>
<style>

</style>