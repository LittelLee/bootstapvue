<template>
    <div class="Carouse">
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
</template>
<script>

</script>
<style>

</style>