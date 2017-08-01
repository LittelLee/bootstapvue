<template>
    <div class="collapase">
        <div class="container">
            <div class="row clearfix mb-2">
                <div class="col-sm-6 col-md-6">
                    <p>
                        <b-btn variant="primary" v-b-toggle.collapse1 >Collapse1</b-btn>
                    </p>
                    <b-collapse id="collapse1">
                        <b-card>
                            This is a Collapse1
                            <b-btn variant="primary" v-b-toggle.collapse2 >Collapse2</b-btn>
                            <b-collapse id="collapse2" class="mt-2">
                                <b-card size="sm">
                                    This is a collapase2
                                </b-card>
                            </b-collapse>
                        </b-card>
                    </b-collapse>
                </div>
            </div>
            <div class="row clearfix mb-2">
                <div class="col-sm-6 col-md-6">
                    <b-button-group vertical>
                        <p><b-btn variant="secondary" v-b-toggle.collapse3>Collapse1</b-btn></p>
                        <b-collapse id="collapse3" class="mb-2">
                            <b-card>This is a simple example</b-card>
                        </b-collapse>
                       <p> <b-btn variant="secondary" v-b-toggle.collapse4>Collapse2</b-btn></p>
                        <b-collapse id="collapse4">
                            <b-card header="This is header" title="This body title" sub-title="This is c" show-footer>
                                <small slot="footer" class="text-muted">This is a footer</small>
                            </b-card>
                        </b-collapse>
                    </b-button-group>
                </div>

            </div>

            <!--If you use Accordion（手风琴样式） ,must be only one visible in collapse-group-->
            <div class="row clearfix">
                <div class="col-sm-6 col-md-6">
                    <b-btn block variant="primary" v-b-toggle.collapse5>Accodion1</b-btn>
                        <b-collapse id="collapse5" visible accordion="my-accordion">
                           <b-card>
                               This is first one
                           </b-card>
                        </b-collapse>
                    <b-btn block class="mt-2" variant="primary" v-b-toggle.collapse6 >Accodrion2</b-btn>
                    <b-collapse id="collapse6"  accordion="my-accordion" >
                        <b-card>
                            this is second one
                        </b-card>
                    </b-collapse>
                    <b-btn block class="mt-1" variant="primary" v-b-toggle.collapse7>Accordion3</b-btn>
                    <b-collapse id="collapse7"  accordion="my-accordion">
                        <b-card>
                            This is third one
                        </b-card>
                    </b-collapse>
                </div>
            </div>

            <!--Use v-model with b-collapse 没效果-->
            <div class="row clearfix">
                <div class="col-sm-6 col-md-6">
                    <b-btn class="mt-1" variant="primary"  @click="showinfo=!showinfo">collapse8</b-btn>
                        <b-collapse v-model="showinfo" id="collapse8">
                            <b-card>
                                This is Something
                            </b-card>
                        </b-collapse>

                </div>
            </div>

            <!-- Even you can collapse mutiple components with a single v-b-toggle-->
            <div class="row clearfix mt-2">
                <div class="col-md-6 col-sm-6">
                    <b-btn variant="primary" v-b-toggle.collapse9.collapse10>You can option two collapse</b-btn>
                    <b-collapse id="collapse9">
                        <b-card>
                            This is collapse9
                        </b-card>
                    </b-collapse>
                    <b-collapse id="collapse10">
                        <b-card>
                            This is collapse10
                        </b-card>
                    </b-collapse>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                showinfo:true
            }
        }
    }

</script>
<style>

</style>