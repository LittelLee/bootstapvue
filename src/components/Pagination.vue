<template>
    <div class="Pagination">
        <div class="container">
            <div class="row clearfix mt-3">
                <div class="col-md-12 col-sm-12">
                    <b-pagination first-text="第一页" last-text="最后一页" v-model="currentpage" size="md" :total-rows="100" :per-page="10"></b-pagination>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                currentpage:1
            }
        }
    }
</script>
<style>

</style>