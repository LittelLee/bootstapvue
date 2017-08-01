<template>
    <div class="Carouse">
        <div class="container">
            <div class="row clearfix">
                <div class="col-md-12 col-sm-12">
                    <h1 class="text-center">This Verision is not standly</h1>
                </div>
            </div>
            <div class="row clearfix">
                <div class="col-sm-10 col-md-10">
                    <b-carousel controls indicators :interval="3000" background="#ABABAB" height="300px">
                        <b-carousel-slide height="300px" caption="first slide" text="Nulla vitae elit libero" img="http://placeskull.com/600/300/ABABAB/-1/0">
                        </b-carousel-slide>

                        <!--Slides with custom text-->
                        <b-carousel-slide height="300px" img="http://placeskull.com/600/300/1C90F3/-1/0">
                            This is my words for you : Hello World
                        </b-carousel-slide>

                        <!--Slides with image-->
                        <b-carousel-slide height="300px" img="http://placeskull.com/600/300/f44336/-1/0"></b-carousel-slide>
                    </b-carousel>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

</script>
<style>

</style>