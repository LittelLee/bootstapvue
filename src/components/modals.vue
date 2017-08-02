<template>
    <div class="Modals">
        <div class="cotainer">
            <div class="row clearfix">
                <div class="col-md-6 col-sm-6">
                    <b-btn v-b-modal.modal1>Launch demo modal</b-btn>

                    <div class="mt-3 mb-3">
                        <ul>
                            <li v-for="n in names">{{n}}</li>
                        </ul>
                    </div>

                    <b-modal no-close-on-backdrop id="modal1" title="Submmit your name" @ok="handin" @show="clearName">
                        <form @submit.stop.prevent="handin">
                            <b-form-input type="text" placeholder="Enter Your name" v-model="name"></b-form-input>
                        </form>
                    </b-modal>
                </div>
            </div>



            <!--Use v-model realize modal show or hidden -->
            <div class="row clearfix">
                <div class="col-md-6 col-sm-6">
                    <b-btn @click="modalshow=!modalshow">Open Modal</b-btn>

                    <b-modal title="Head" no-close-backdrop v-model="modalshow">
                        <h3>This is a body content</h3>
                    </b-modal>
                </div>
            </div>

            <!-- use emit   show::modal+id or hidden::modal+id   ok-title 是管理ok键的名称，close-title是管理关闭键的名称 -->
            <div class="row clearfix mt-5">
                <div class="col-md-6 col-sm-6">
                    <b-btn @click="showModal" ref="btnShow">Open modal use emit</b-btn>

                    <b-modal id="modal2" no-close-backdrop title="Use emit control show or hidden" >
                        This is a body
                        <b-btn @click="hiddenModal">Close</b-btn>
                    </b-modal>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                name:'',
                names:[],
                modalshow:false
            }
        },
        methods:{
            clearName() {
                this.name = '';
            },
            handin(e) {
                if(!this.name){
                    alert('Please your name');
                    return e.cancel();
                }

                this.name.push(this.name);
                this.name='';
            },
            showModal() {
                this.$root.$emit("show::modal","modal2");
            },
            hiddenModal() {
                this.$root.$emit("hide::modal","modal2");
                this.$refs.btnShow.$el.focus();
            }
        }
    }
</script>
<style>

</style>