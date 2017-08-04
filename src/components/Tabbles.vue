<template>
    <div class="TableT">
        <div class="container">
            <!--<div class="row clearfix">-->
                <!--<div class="col-md-6">-->
                    <!--<b-form-fieldset horizontal label="Rows for per Page" :label-cols="6">-->
                        <!--<b-form-select :options="[{text:5,value:5},{text:10,value:10},{text:15,value:15}]" v-model="perpages"></b-form-select>-->
                    <!--</b-form-fieldset>-->
                <!--</div>-->
                <!--<div class="col-md-6">-->
                    <!--<b-form-fieldset horizontal label="Filter">-->
                        <!--<b-form-input placeholder="Type to Search" v-model="searchnum"> </b-form-input>-->
                    <!--</b-form-fieldset>-->
                <!--</div>-->
            <!--</div>-->
            <!--<div class="row clearfix">-->
                <!--<div class="col-md-12">-->
                    <!--<b-pagination v-model="currentpage"></b-pagination>-->
                <!--</div>-->
            <!--</div>-->


            <!--Main table element-->
            <!--<b-table striped hover-->
                     <!--:items:="items"-->
                     <!--:fields="fields"-->
                     <!--:current-page="currentpage"-->
                     <!--:per-page="perpage"-->
                     <!--:filter="filter"-->
            <!--&gt;-->
                <!--<template slot="name" scope="item">-->
                    <!--{{item.value.first}} {{item.value.last}}-->
                <!--</template>-->
                <!--<template slot="isActive" scope="item">-->
                    <!--{{item.value?'yes':'no:('}}-->
                <!--</template>-->
                <!--<template slot="actions" scope="item">-->
                    <!--<b-btn size="sm" @click="details(item.item)">Details</b-btn>-->
                <!--</template>-->
            <!--</b-table>-->

            <b-table striped hover
                    :items="items"
                    :fields="fields"
                    :current-page="currentPage"
                    :per-page="perPage"
                    :filter="filter"
            >
                <template slot="name" scope="item">
                    {{item.value.first}} {{item.value.last}}
                </template>
                <template slot="isActive" scope="item">
                    {{item.value?'Yes :)':'No :('}}
                </template>
                <template slot="actions" scope="item">
                    <b-btn size="sm" @click="details(item.item)">Details</b-btn>
                </template>
            </b-table>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
//                perpages:5,searchnum:null,currentpage:1,
                items:[
                    {
                        isActive: true, age: 40, name: { first: 'Dickerson', last: 'Macdonald' }
                    }, {
                        isActive: false, age: 21, name: { first: 'Larsen', last: 'Shaw' }
                    }, {
                        _rowVariant: 'success',
                        isActive: false, age: 9, name: { first: 'Mitzi', last: 'Navarro' }
                    }, {
                        isActive: false, age: 89, name: { first: 'Geneva', last: 'Wilson' }
                    }, {
                        isActive: true, age: 38, name: { first: 'Jami', last: 'Carney' }
                    }, {
                        isActive: false, age: 27, name: { first: 'Essie', last: 'Dunlap' }
                    }, {
                        isActive: true, age: 40, name: { first: 'Dickerson', last: 'Macdonald' }
                    }, {
                        _cellVariants: { age: 'danger', name: 'success' },
                        isActive: false, age: 21, name: { first: 'Larsen', last: 'Shaw' }
                    }, {
                        isActive: false, age: 26, name: { first: 'Mitzi', last: 'Navarro' }
                    }, {
                        isActive: false, age: 22, name: { first: 'Geneva', last: 'Wilson' }
                    }, {
                        isActive: true, age: 38, name: { first: 'Jami', last: 'Carney' }
                    }, {
                        isActive: false, age: 27, name: { first: 'Essie', last: 'Dunlap' }
                    }
                ],
                fields: {
                    name: {
                        label: 'Person Full name',
                        sortable: true
                    },
                    age: {
                        label: 'Person age',
                        sortable: true
                    },
                    isActive: {
                        label: 'is Active'
                    },
                    actions: {
                        label: 'Actions'
                    }
                },  currentPage: 1,
                perPage: 5,
                filter: null
            }
        },
        methods: {
            details(item) {
                alert(JSON.stringify(item));
            }
        }
    }
</script>
<style>

</style>