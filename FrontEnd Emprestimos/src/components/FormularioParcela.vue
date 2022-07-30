<template>
  <div class="container">
    <div class="row">
      <div class="d-flex">    
        <form class="shadow m-3 p-5 w-75" @submit.prevent="salvarParcela">
          <label class="p-1 pt-3">Tabela</label>
          <input requerid type="text" id="item.id_cliente_banco" class="form-control" v-model="parcela.tabela.nome_tabela">

          <label class="p-1 pt-3">Parcela</label>
          <input requerid type="text" id="item.id_cliente_banco" class="form-control" v-model="parcela.parcela">

          <label class="p-1 pt-3">Juros Parcela</label>
          <input requerid type="text" id="item.juros_parcela" class="form-control" v-model="parcela.juros_parcela">

          <label class="p-1 pt-3">Valor Juros Parcela</label>
          <input requerid type="text" id="item.valor_juros_parcelado" class="form-control" v-model="parcela.valor_parcela">

          <label class="p-1 pt-3">Valor Total</label>
          <input requerid type="text" id="cliente_banco.cliente" class="form-control" v-model="parcela.valor_total">

          <label class="p-1 pt-3">Comissão</label>
          <input requerid type="text" id="item.valor_comissao" class="form-control" v-model="parcela.comissao">

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

            parcela: {
                  parcela: '',
                  juros_parcela: '',
                  valor_parcela: '',
                  valor_total: '',
                  comissao: '',
                  tabela: {
                          nome_tabela: ""
                          }
                }
            }
     
            
        },
    
    methods: {
        
        async salvarParcela() {
            
            {
                // POST request using fetch with async/await
                const requestOptions = {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(this.parcela)
                };
                const response = await fetch("https://api-emprestimos.herokuapp.com/api/Parcelas/", requestOptions);
                const data = await response.json();
                console.log(response.status);
                 
                if (response.status == 201) {
       
                    this.msg = ('Parcela '+this.parcela.parcela+' Cadastrado com Sucesso')
                    this.parcela.parcela = "";
                    this.parcela.juros_parcela = "";
                    this.parcela.valor_parcela = "";
                    this.parcela.valor_total = "";
                    this.parcela.comissao = "";
                    this.parcela.tabela.nome_tabela = "";
                    setTimeout(() => {                                                    
                                  this.msg = ''                              
                                }, 1500);
                   
                }
                else {
                    this.parcela = data;
                    setTimeout(() => {                                                    
                                this.parcela.parcela = "";
                                this.parcela.juros_parcela = "";
                                this.parcela.valor_parcela = "";
                                this.parcela.valor_total = "";
                                this.parcela.comissao = "";
                                this.parcela.tabela.nome_tabela = "";                                                
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
