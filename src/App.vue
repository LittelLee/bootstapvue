<template>
  <div id="app">
    <!--<ContentText></ContentText>-->
    <!--<loop-image></loop-image>-->
    <!--<CollapaseT></CollapaseT>-->
      <!--<DorpdownT></DorpdownT>-->
      <!--<form-controller></form-controller>-->
      <!--<form-controllerfiedlset></form-controllerfiedlset>-->
      <!--<formcontrollerfile></formcontrollerfile>-->
      <!--<formcontrollerradio></formcontrollerradio>-->
      <formcontrollerselect></formcontrollerselect>
  </div>
</template>

<script>
  import Content from './components/Content.vue';
  import loopImage from './components/Carouse.vue';
  import Collaspe from './components/collapse.vue';
  import Dropdown from './components/Dropdown.vue';
  import FormController from './components/Form/formcontrollerCheckbox.vue';
  import fieldset from './components/Form/formcontrollerFiedlset.vue';
  import formcontrollerfile  from './components/Form/formcontrollerFile.vue';
  import formcontrollerradio from './components/Form/formcontrollerRadio.vue';
  import formcontrollerselect from './components/Form/formcontrollerslecte.vue';

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
        formController:FormController,
        formControllerfiedlset:fieldset,
        formcontrollerfile:formcontrollerfile,
        formcontrollerradio:formcontrollerradio,
        formcontrollerselect:formcontrollerselect

    }
  }
</script>

<style>
</style>
