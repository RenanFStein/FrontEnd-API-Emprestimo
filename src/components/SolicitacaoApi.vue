<template>
  <div class="container">
    <div class="row  w-100"> 
        <div class="col-3 ms-5 mb-2 p-4 shadow" v-for="item in solicitacao" :key="item"> 
              <p>Cliente: {{item.id_cliente_banco}}</p>
              <p>Juros Parcela: {{item.juros_parcela}}</p>
              <p>Valor Juros Parcela: {{item.valor_juros_parcelado}}</p>
              <p>Comissão: {{item.comissao}}</p>
              <p>Valor Comissão: {{item.valor_comissao}}</p>
              <p>Valor da Parcela: {{item.valor_parcela}}</p>
              <p>Valor Desejado: {{item.valor_desejado}}</p>
              <p>Total Emprestimo: {{item.total_emprestimo}}</p>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      solicitacao:''
    }
  },
  async created () {
    const response = await fetch("https://api-emprestimos.herokuapp.com/api/Solicitacoes/")
    this.solicitacao = await response.json()
    console.log (this.solicitacao)
  },
}


</script>



<style scoped>

</style>
