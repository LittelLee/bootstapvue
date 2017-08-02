<template>
  <div id="app">
    <!--<ContentText></ContentText>-->
    <!--<loop-image></loop-image>-->
    <!--<CollapaseT></CollapaseT>-->
      <!--<jumbotron></jumbotron>-->
      <!--<Listgroup></Listgroup>-->
      <!--<Modals></Modals>-->
      <!--<navT></navT>-->
      <!--<NavbarT></NavbarT>-->
    <!--<Pagination></Pagination>-->
    <!--<Popover></Popover>-->
    <ProgressT></ProgressT>
      <!--<DorpdownT></DorpdownT>-->
      <!--<form-controller></form-controller>-->
      <!--<form-controllerfiedlset></form-controllerfiedlset>-->
      <!--<formcontrollerfile></formcontrollerfile>-->
      <!--<formcontrollerradio></formcontrollerradio>-->
      <!--<formcontrollerselect></formcontrollerselect>-->
      <!--<formcontrollerinputgroup></formcontrollerinputgroup>-->
  </div>
</template>

<script>
  import Content from './components/Content.vue';
  import loopImage from './components/Carouse.vue';
  import Collaspe from './components/collapse.vue';
  import Dropdown from './components/Dropdown.vue';
  import Jumbotron from './components/Jumbotron.vue';
  import ListGroup from './components/listgroup.vue';
  import Modals from './components/modals.vue';
  import NavT from './components/Nav.vue';
  import NavbarT from './components/Navbar.vue';
  import Pagination from './components/Pagination.vue';
  import Popover from './components/Popover.vue';
  import Progress from './components/Progress.vue';
  import FormController from './components/Form/formcontrollerCheckbox.vue';
  import fieldset from './components/Form/formcontrollerFiedlset.vue';
  import formcontrollerfile  from './components/Form/formcontrollerFile.vue';
  import formcontrollerradio from './components/Form/formcontrollerRadio.vue';
  import formcontrollerselect from './components/Form/formcontrollerslecte.vue';
  import formcontrollerinputgroup from './components/Form/formcontrollerinputgroup.vue';

  export default {
    name: 'app',
    data () {
      return {
      }
    },
    components:{
        ContentText:Content,
        loopImage:loopImage,
        CollapaseT:Collaspe,
        DorpdownT:Dropdown,
        Jumbotron:Jumbotron,
        Listgroup:ListGroup,
        Modals:Modals,
        NavT:NavT,
        NavbarT:NavbarT,
        Pagination:Pagination,
        Popover:Popover,
        ProgressT:Progress,
        formController:FormController,
        formControllerfiedlset:fieldset,
        formcontrollerfile:formcontrollerfile,
        formcontrollerradio:formcontrollerradio,
        formcontrollerselect:formcontrollerselect,
        formcontrollerinputgroup:formcontrollerinputgroup

    }
  }
</script>

<style>
</style>
