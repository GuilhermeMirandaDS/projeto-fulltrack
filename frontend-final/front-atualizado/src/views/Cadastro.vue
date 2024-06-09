<template>
  <main style="align-items: center; justify-content: center;">
    <link rel="stylesheet" type="text/css" href="/src/cadastro.css" media="screen" />
    <router-link type="button" class="btn btn-outline-light" to="/home" style="width: 140px; background-color: aliceblue; color: black;">Voltar</router-link>
    <form @submit.prevent="savePedido">
      <div class="formulario">

        <h1 class="titulo">Cadastre um novo pedido para <a class="nome">Gabriela!</a></h1>

        <input type="text" class="form-control" placeholder="Título" id="titulo" v-model="pedido.titulo" required>
        
        <input type="text" class="form-control" placeholder="Endereço" id="endereco" v-model="pedido.endereco" required>
        
        <input type="text" class="form-control" placeholder="Horário" id="horario" v-model="pedido.horario" required>

        <input type="text" class="form-control" placeholder="Data" id="data" v-model="pedido.data" required >

        <button type="submit" class="btn" href="/home">Registrar pedido</button>
        
      </div>     
    </form>

  </main>
</template>

<script>
import PedidoDataService from '../services/PedidoDataService';

export default {
  name: "new-delivery",
  data() {
    return {
      pedido: {
        titulo: "",
        endereco: "",
        horario: "",
        data: ""
      }
    };
  },
  methods: {
    savePedido() {
      console.log("Dados do pedido a serem enviados para a API:", this.pedido);

      var data = {
        Titulo: this.pedido.titulo,
        Endereco: this.pedido.endereco,
        Horario: this.pedido.horario,
        Data: this.pedido.data
      };

      console.log("Dados a serem enviados para a API:", data);

      PedidoDataService.create(data)
        .then(response => {
          console.log("Resposta da API:", response.data);
        })
        .catch(e => {
          console.log("Erro ao enviar dados para a API:", e);
        });
    }
  }
}
</script>

