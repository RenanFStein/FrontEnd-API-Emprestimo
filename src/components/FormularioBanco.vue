<template>
  <div class="container">
    <div class="row">
      <div class=" d-flex">    

        <form class="shadow m-3 p-5 w-75" @submit.prevent="salvarBanco" >
          <label class="p-1 pt-3">Nome do Banco</label>
          <input type="text" id="nome_banco" class="form-control" v-model="banco.nome_banco">

          <label class="p-1 pt-3">Tipo da Conta</label>
          <input type="text" id="tipo_conta" class="form-control" v-model="banco.tipo_conta">

          <label class="p-1 pt-3">Numero da Conta</label>
          <input type="text" id="numero_conta" class="form-control" v-model="banco.numero_conta">

          <label class="p-1 pt-3">Cliente</label>
          <input type="text" id="cliente_banco.cliente" class="form-control" v-model="banco.cliente_banco.cliente">

          <label class="p-1 pt-3">Telefone</label>
          <input type="text" id="cliente_banco.telefone_cliente" class="form-control" v-model="banco.cliente_banco.telefone_cliente">

          <label class="p-1 pt-3">CPF</label>
          <input type="text" id="cliente_banco.cpf_cliente" class="form-control" v-model="banco.cliente_banco.cpf_cliente">   
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
            banco: {
                nome_banco: "",
                tipo_conta: "",
                numero_conta: "",
                cliente_banco: {
                    id: "",
                    cliente: "",
                    telefone_cliente: "",
                    cpf_cliente: ""
                }
            },
            msg: "",
        };
    },
    methods: {
        
        async salvarBanco() {
            
            {
                // POST request using fetch with async/await
                const requestOptions = {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(this.banco)
                };
                const response = await fetch("https://api-emprestimos.herokuapp.com/api/BancoCliente/", requestOptions);
                const data = await response.json();
                console.log(response.status);
                 
                if (response.status == 201) {
       
                    this.msg = ('Banco '+this.banco.nome_banco+' Cadastrado com Sucesso')
                    this.banco.nome_banco = "";
                    this.banco.tipo_conta = "";
                    this.banco.numero_conta = "";
                    this.banco.cliente_banco.id = "";
                    this.banco.cliente_banco.cliente = "";
                    this.banco.cliente_banco.telefone_cliente = "";
                    this.banco.cliente_banco.cpf_cliente = "";
                    setTimeout(() => {                                                    
                                  this.msg = ''                                                              
                                }, 1500);                   
                }
                else {
                    this.banco = data;
                    console.log("não");                 
                        
                    setTimeout(() => {                                                    
                                this.banco.nome_banco = "";
                                this.banco.tipo_conta = "";
                                this.banco.numero_conta = "";
                                this.banco.cliente_banco.id = "";
                                this.banco.cliente_banco.cliente = "";
                                this.banco.cliente_banco.telefone_cliente = "";
                                this.banco.cliente_banco.cpf_cliente = "";                                                              
                                }, 1500); 
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
