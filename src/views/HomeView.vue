<template>
<div>
  <div class="row ms-5">
      <div class="col-md-4">
        <FormularioBanco />
      </div>
      <div class="col-md-4">
        <FormularioParcela />
      </div>
       <div class="col-md-4">
        <FormularioSolicitacao />
      </div>
  </div>
    
</div>
</template>

<script>

import FormularioBanco from '../components/FormularioBanco.vue';
import FormularioParcela from '../components/FormularioParcela.vue';
import FormularioSolicitacao from '../components/FormularioSolicitacao.vue';



export default {
    data(){

    },
    components: {
    FormularioBanco,
    FormularioParcela,
    FormularioSolicitacao
}
}
</script>

<style scoped>

</style>
