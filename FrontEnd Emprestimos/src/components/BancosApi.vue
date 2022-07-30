<template>
  <div class="container d-flex ">
    <div class="row w-100"> 
      <div class="col-3 ms-5 mb-2 p-4 shadow" v-for="item in bancos" :key="item"> 
          <p>Banco: {{ item.nome_banco }}  </p>
          <p>Tipo da Conta: {{ item.tipo_conta }}</p>  
          <p>Nome Cliente: {{ item.cliente_banco.cliente }} </p>
          <p>Telefone: {{ item.cliente_banco.telefone_cliente }}</p>
          <p>CPF: {{ item.cliente_banco.cpf_cliente }}  </p>            
      </div>
          
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      bancos:''
    }
  },
  async created () {
    const response = await fetch("https://api-emprestimos.herokuapp.com/api/BancoCliente/")
    this.bancos = await response.json()
    console.log (this.bancos)
  },
}


</script>



<style scoped>



</style>
