<template>
  <main style="align-items: center; justify-content: center;">
    <link rel="stylesheet" type="text/css" href="/src/home.css" media="screen" />
    <nav class="navbar navbar-expand-lg bg-body-" style="justify-content: center; align-items: center; background-color: rgba(37,37,37); border: rgba(37,37,37); color: white">
    <div class="container-fluid" style="justify-content: center; align-items: center; background-color: rgba(37,37,37)">
      <img src="/logo.png" style="width: 90px; margin: 16px;">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent" style="background-color: rgba(37,37,37);">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
      
    <div style="display: flex; padding: 10px;align-items: center; justify-content: space-between; flex-direction: row;">
        <img src="/dog.jpg" style="width: 48px; border-radius: 48px; margin: 10px;">
    </div>
    <router-link class="nav-link" to="/">Sair</router-link>
    </div>
    </div>
    </nav>
    <form @submit.prevent="savePedido">
      <div class="formulario" style="display:flex; flex-direction: column; justify-content: center; gap: 20px; margin-left: 38%; width: 500px;">
        <h1 style="padding: 24px; font-weight: 700; color: white; text-align: center;">Cadastre um novo pedido para <a style="color: rgb(240, 36, 36); font-size: 32px;">Gabriela!</a></h1>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style="background-color: white;" placeholder="Título">
        
        <input type="text" class="form-control" placeholder="Endereço">
        
        <input type="text" class="form-control" placeholder="Horário">

        <input type="text" class="form-control" placeholder="Data">
        <router-link to="/home"><button type="submit" style="background-color:rgb(240, 36, 36); border: none; font-weight: 600; width: 100%;" class="btn btn-primary" >Registrar pedido</button></router-link>
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
      var data = {
        titulo: this.pedido.titulo,
        endereco: this.pedido.endereco,
        horario: this.pedido.horario,
        data: this.pedido.data
      };

      PedidoDataService.create(data)
        .then(response => {
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
}
</script>