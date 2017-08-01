<template>
    <div class="DropDown">
        <div class="container">
            <div class="row clearfix">
                <div class="col-md-6 col-sm-6">
                    <b-dropdown text="Meun">
                        <b-dropdown-heading>This is heading</b-dropdown-heading>
                        <b-dropdown-item>Fisrt</b-dropdown-item>
                        <b-dropdown-item>Second</b-dropdown-item>
                        <b-dropdown-item>Third</b-dropdown-item>
                        <b-dropdown-divider></b-dropdown-divider>
                        <b-dropdowmn-item>fourth</b-dropdowmn-item>
                        <b-dropdown-item disabled>This is some else something</b-dropdown-item>
                    </b-dropdown>
                </div>
            </div>
            <!--User split , you can set variant:success,alert.danger,warning..... -->
            <div class="row clearfix mt-5">
                <div class="col-md-6 col-sm-6">
                    <b-dropdown text="This is a button" variant="success" split>
                        <b-dropdown-item>aaa</b-dropdown-item>
                        <b-dropdown-item>bbb</b-dropdown-item>
                        <b-dropdown-item>ccc</b-dropdown-item>
                    </b-dropdown>
                </div>
            </div>

            <!--dropup-->
            <div class="row clearfix mt-5">
                <div class="col-sm-6 col-md-6">
                    <b-dropdown dropup text="dropup">
                        <b-dropdown-item>aaa</b-dropdown-item>
                        <b-dropdown-item>bbb</b-dropdown-item>
                        <b-dropdown-item>ccc</b-dropdown-item>
                    </b-dropdown>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

</script>
<style>

</style>