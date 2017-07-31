<template>
    <div class="content">
       <div class="container">
           <div class="row clearfix">
               <div class="col-sm-6 col-md-6">
                   <b-button-group>
                       <b-btn>btn-1</b-btn>
                       <b-btn>btn-2</b-btn>
                       <b-btn>btn-3</b-btn>
                       <b-dropdown text="Menu" right>
                           <b-dropdown-item>First</b-dropdown-item>
                           <b-dropdown-item>Second</b-dropdown-item>
                           <b-dropdown-divider></b-dropdown-divider>
                           <b-dropdown-item>Third</b-dropdown-item>
                       </b-dropdown>
                   </b-button-group>
               </div>
           </div>

           <div class="row clearfix">
               <div class="col-sm-6 col-md-6">
                   <b-button-toolbar key-nav aria-label="Toolbar with button group">
                        <b-button-group class="mx-1">
                            <b-btn>&laquo;</b-btn>
                            <b-btn>&lsaquo;</b-btn>
                        </b-button-group>
                       <b-button-group class="mx-1">
                           <b-btn>First</b-btn>
                           <b-btn>Second</b-btn>
                           <b-btn>Third</b-btn>
                       </b-button-group>
                       <b-button-group class="mx-1">
                           <b-btn>&rsaquo;</b-btn>
                           <b-btn>&raquo;</b-btn>
                       </b-button-group>
                   </b-button-toolbar>
               </div>
           </div>
           <div class="row clearfix">
               <div class="col-md-12 col-sm-12">
                   <b-button-toolbar>
                       <b-button-group class="mx-1">
                           <b-btn>New</b-btn>
                           <b-btn>New</b-btn>
                       </b-button-group>
                       <b-input-group size="md" class="w-25 mx-1" left="$" right=".00">
                           <b-form-input value="123" class="text-right"></b-form-input>
                       </b-input-group >
                       <b-input-group size="md" class="w-25 mx-1" left="Size" right=".00">
                           <b-form-select value="Medium" :options="['Large','Medium','Small']"></b-form-select>
                       </b-input-group>
                       <b-button-group size="sm" class="mx-1">
                           <b-btn>Edit</b-btn>
                           <b-btn>Save</b-btn>
                       </b-button-group>
                   </b-button-toolbar>
               </div>
           </div>
           <div class="row clearfix">
               <div class="col-sm-12 col-md-12">
                   <b-button-group size="sm" class="mx-1">
                       <b-btn>New</b-btn>
                       <b-btn>Edit</b-btn>
                       <b-btn>Undo</b-btn>
                   </b-button-group>
                   <b-dropdown size="sm" text="Menu" splid class="mx-1">
                       <b-dropdown-item>Fisrt</b-dropdown-item>
                       <b-dropdown-item>Second</b-dropdown-item>
                       <b-dropdown-item>Third</b-dropdown-item>
                   </b-dropdown>
                   <b-button-group size="sm" class="mx-1">
                       <b-btn>Save</b-btn>
                       <b-btn>Cancel</b-btn>
                   </b-button-group>
               </div>
           </div>
           <div class="row clearfix">
               <div class="col-md-12 col-sm-12">
                    <!--Simple-->
                   <b-card class="mb-2" variant="success">Simple Card</b-card>

                   <!--Standard-->
                   <b-card header="Card header Text" class="mb-2" title="Card title"
                           sub-title="card subtitle">
                       <small slot="footer" class="text-muted">
                           Last updated 3 min ago
                       </small>
                   </b-card>

                   <!--With Image-->

                   <b-card img="http://placeskull.com/200/200/ABABAB/-1/0" title="Skull are nice" class="mb-2">This is my option</b-card>

                   <!--Overlay imgae-->
                   <b-card overlay img="http://placeskull.com/200/200/E8117F/-1/0" class="mb-2">Overlay Card are cute</b-card>
               </div>
           </div>
       </div>
    </div>
</template>
<script></script>
<style></style>