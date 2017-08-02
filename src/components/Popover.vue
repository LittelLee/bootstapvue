<template>
    <div class="Popover">
        <!--Simple-->
        <h4 class="mt-sm-4 ms-sm-4 text-muted">Placement</h4>
        <div class="row">
            <div class="col-md-3 text-center" v-for="placement in ['top','left','right','bottom']">
                <b-popover :placement="placement" content="Heya">
                    <b-btn variant="primary">{{placement}}</b-btn>
                </b-popover>
            </div>
        </div>


        <!--Trigger-->
        <h4 class="mt-sm-4 ms-sm-4 text-muted">Trigger</h4>
        <div class="row">
            <div class="col-md-3 text-center" v-for="trigger in triggers">
                <b-popover :triggers="trigger"  content="trigger warning">
                    <b-btn variant="primary">{{trigger}}</b-btn>
                </b-popover>

            </div>
        </div>

        <!--Delay-->

        <!--first one slepp 1s-->
        <h4 class="mt-sm-4 ms-sm-4 text-muted">Delay</h4>
        <div class="row">
            <div class="col-md-3 text-center">
                <b-popover :delay="1000" :triggers="['click','hover']" content="sleep 1000ms">
                    <b-btn variant="primary">1000</b-btn>
                </b-popover>
            </div>


            <div class="col-md-3 text-muted text-center">
                <b-popover :delay="{show:1000,hide:0}" content="this is will disapper right away" :trigger="['click','focus']">
                    <b-btn variant="primary">1000ms on show and 0s hide</b-btn>
                </b-popover>
            </div>

            <div class="col-md-3 text-muted text-center">
                <b-popover :delay="{show:0,hide:1000}" :trigger="['hover','click']" content="show 1s and hide 1">
                    <b-btn variant="primary">hide on 1000</b-btn>
                </b-popover>
            </div>
        </div>



    </div>
</template>
<script>
    export default {
        data() {
            return {
                triggers:['hover','click','focus']
            }

        }
    }
</script>
<style>

</style>