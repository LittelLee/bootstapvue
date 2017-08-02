<template>
    <div class="ProgressT">
        <b-progress :value="counter" :precision="1" show-progress animated></b-progress>
        <b-btn  class="mt-4" @click="clicked">Click me</b-btn>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                counter:1
            }
        },
            methods:{
                clicked() {

                        var num = 1;
                        var _this = this;
                       var timer = setInterval(function () {
                            num++;
                            _this.counter = num;
                            console.log(num);
                            if (num >= 100) {
                                clearInterval(timer);
                            }
                        }, 200);

                }
            }

    }
</script>
<style>

</style>