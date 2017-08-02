<template>
    <div class="NavbarT">
        <div class="container">
            <div class="row clearfix">
                <div class="col-md-12 col-xs-6" >
                    <b-navbar  toggleable toggle-breakpoint="sm" type="inverse" variant="success">

                        <b-nav-toggle target="nav_collapse"></b-nav-toggle>

                        <b-link class="navbar-brand" to="#">
                            <span>BootstrapVue</span>
                        </b-link>

                        <b-collapse is-nav id="nav_collapse">
                            <b-nav is-nav-bar>
                                <b-nav-item>Support</b-nav-item>
                                <b-nav-item>Docs</b-nav-item>
                                <b-nav-item>Contact Us</b-nav-item>
                            </b-nav>

                            <b-nav is-nav-bar class="ml-auto">
                                <b-nav-item-dropdown text="lang" right>
                                    <b-dropdown-item>En</b-dropdown-item>
                                    <b-dropdown-item>CHI</b-dropdown-item>
                                    <b-dropdown-item>USA</b-dropdown-item>
                                </b-nav-item-dropdown>


                                <b-nav-item-dropdown text="User">
                                    <b-dropdown-item>Profile</b-dropdown-item>
                                    <b-dropdown-item>Signout</b-dropdown-item>
                                </b-nav-item-dropdown>
                            </b-nav>
                        </b-collapse>

                    </b-navbar>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

</script>
<style>

</style>