<template>
  <div class="container">
    <div class="row">
      <div class="d-flex">    
        <form class="shadow m-3 p-5 w-75" @submit.prevent="salvarSolicitacoes">
          <label class="p-1 pt-3">Juros Parcela</label>
          <input requerid type="text" id="item.id_cliente_banco" class="form-control" v-model="solicitacao.juros_parcela">

          <label class="p-1 pt-3">Valor do Juros Parcelado</label>
          <input requerid type="text" id="item.id_cliente_banco" class="form-control" v-model="solicitacao.valor_juros_parcelado">

          <label class="p-1 pt-3">Comissão</label>
          <input requerid type="text" id="item.juros_parcela" class="form-control" v-model="solicitacao.comissao">

          <label class="p-1 pt-3">Valor da Comissão</label>
          <input requerid type="text" id="item.valor_juros_parcelado" class="form-control" v-model="solicitacao.valor_comissao">

          <label class="p-1 pt-3">Valor da Parcela</label>
          <input requerid type="text" id="cliente_banco.cliente" class="form-control" v-model="solicitacao.valor_parcela">

          <label class="p-1 pt-3">Numero Cartão</label>
          <input requerid type="text" id="item.valor_comissao" class="form-control" v-model="solicitacao.numero_cartao">

          <label class="p-1 pt-3">Valor Desejado</label>
          <input requerid type="text" id="item.valor_comissao" class="form-control" v-model="solicitacao.valor_desejado">

          <label class="p-1 pt-3">Total Emprestimo</label>
          <input requerid type="text" id="item.valor_comissao" class="form-control" v-model="solicitacao.total_emprestimo">
          
          <div class="d-flex justify-content-center">
            <button class="btn btn-dark mt-3" >Cadastrar</button>     
          </div>  
 
          <Message  :msg='msg' v-show="msg"/>
        </form>
      </div>
    </div>  
  </div>
</template>

<script>
import Message from "./Message.vue";

 export default {
    data() {
        return {
            users: "",

            msg: "",

            solicitacao: {
                  juros_parcela: '',
                  valor_juros_parcelado: '',
                  comissao: '',
                  valor_comissao: '',
                  valor_parcela: '',
                  numero_cartao: '',
                  valor_desejado: '',
                  total_emprestimo: '',
                }
            }
     
            
        },
    
    methods: {
        
        async salvarSolicitacoes() {
            
            {
                // POST request using fetch with async/await
                const requestOptions = {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(this.solicitacao)
                };
                const response = await fetch("https://api-emprestimos.herokuapp.com/api/Solicitacoes/", requestOptions);
                const data = await response.json();
                console.log(response.status);
                 
                if (response.status == 201) {
       
                    this.msg = ('Solicitação de '+this.solicitacao.valor_desejado+' realizada com sucesso com Sucesso')
                    this.solicitacao.juros_parcela = "";
                    this.solicitacao.valor_juros_parcelado = "";
                    this.solicitacao.comissao = "";
                    this.solicitacao.valor_comissao = "";
                    this.solicitacao.valor_parcela = "";
                    this.solicitacao.numero_cartao = "";
                    this.solicitacao.valor_desejado = "";
                    this.solicitacao.total_emprestimo = "";
                    setTimeout(() => {                                                    
                                  this.msg = ''                              
                                }, 1500);
                   
                }
                else {
                    console.log(data)
                    this.solicitacao = data;
                    setTimeout(() => {                                                    
                                this.solicitacao.juros_parcela = "";
                                this.solicitacao.valor_juros_parcelado = "";
                                this.solicitacao.comissao = "";
                                this.solicitacao.valor_comissao = "";
                                this.solicitacao.valor_parcela = "";
                                this.solicitacao.numero_cartao = "";
                                this.solicitacao.valor_desejado = "";
                                this.solicitacao.total_emprestimo = "";                                               
                                }, 1500); 
                    console.log("não");
                };
                 
                            
        
            }
            
        },  
      
    },
    components: { Message }
}
   


</script>



<style scoped>
label{
  color: black;
}


</style>
