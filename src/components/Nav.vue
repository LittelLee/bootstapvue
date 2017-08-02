<template>
    <div class="navT">
        <div class="container">
            <div class="row clearfix">
                <div class="col-md-6 col-sm-6">
                    <b-nav>
                        <b-nav-item active><a href="#">first</a></b-nav-item>
                        <b-nav-item><a href="#">second</a></b-nav-item>
                        <b-nav-item><a href="#">third</a></b-nav-item>
                        <b-nav-item disabled>fourth</b-nav-item>
                    </b-nav>


                    <div class="mt-5">
                        <b-nav pills>
                            <b-nav-item active>first</b-nav-item>
                            <b-nav-item>second</b-nav-item>
                            <b-nav-item>third</b-nav-item>
                            <b-nav-item>fourth</b-nav-item>
                        </b-nav>
                    </div>

                    <div class="mt-5">
                        <b-nav tabs>
                            <b-nav-item active>first</b-nav-item>
                            <b-nav-item>second</b-nav-item>
                            <b-nav-item>third</b-nav-item>
                            <b-nav-item-dropdown text="Menu">
                                <b-dropdown-item>123</b-dropdown-item>
                                <b-dropdown-item>456</b-dropdown-item>
                                <b-dropdown-item>789</b-dropdown-item>
                            </b-nav-item-dropdown>
                        </b-nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

</script>
<style>

</style>