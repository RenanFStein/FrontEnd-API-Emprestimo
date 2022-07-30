<template>
  <div class="container">
    <div class="row w-100"> 
      <div class="col-3 m-4  mb-2 p-5 shadow" v-for="item in parcela" :key="item"> 

           
           <p>Tabela: {{ item.tabela.nome_tabela }} </p>
           <p>Parcelas: {{ item.parcela }} </p>
           <p>Juros da Parcela: {{ item.juros_parcela }} </p>
           <p>Valor Total: {{ item.valor_total }} </p>
           <p>Comissão: {{ item.comissao }} </p>         

      </div>
        
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      parcela:''
    }
  },
  async created () {
    const response = await fetch("https://api-emprestimos.herokuapp.com/api/Parcelas/")
    this.parcela = await response.json()
    console.log (this.parcela)
  },
}


</script>



<style scoped>

</style>
