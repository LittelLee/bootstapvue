<template>
    <div class="container">
        <div class="row clearfix">
            <div class="col-md-6 col-sm-6">
                <b-form-file v-model="file1"></b-form-file>
                <br/>Select file : {{file1&&file1.name}}
                <div class="mt-3">
                <b-form-file  v-model="file2" choose-label="Attachment2"></b-form-file>
                <br/>Selectde file : {{file2&&file2.name}}
                </div>

                <div class="mt-3">
                    <b-form-file multiple v-model="file3"></b-form-file>
                    <br/>
                    Selected file : {{file3&&file3.name}}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                file1:null,file2:null,file3:[]
            }
        }
    }
</script>
<style>

</style>