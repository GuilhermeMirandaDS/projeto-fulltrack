<template>
  <main style="">
      <link rel="stylesheet" type="text/css" href="/src/home.css" media="screen" />
    
      <div class="funcionarios" style="display: flex; flex-wrap: wrap; justify-content: center;">
          <h1 style="text-align: center; padding-top: 24px; font-weight: 800; font-size: 2em; width: 100%;">Painel de Funcionários</h1>
          <div v-for="(usuario, index) in usuarios" :key="index" class="card" style="width: 18rem; margin: 24px; border: none; border-color: rgba(37,37,37); box-shadow: none; border-radius: 16px;">
              <div class="card-body" style="background-color:rgba(37,37,37); border: none; border-color: rgba(37,37,37); box-shadow: none; border-radius: 8px;">
                  <div class="user">
                      <h1 class="card-text" style="color: rgb(240, 36, 36); font-weight: 700; padding-top: 8px; padding-bottom: 8px;">{{usuario.nome}}</h1>
                      <p class="card-text" style="color: greenyellow; font-weight: 800;">Metas: {{usuario.meta}}</p>
                      <p class="card-text" style="color: rgb(240, 36, 36); font-weight: 800;">Multas: {{usuario.multas}}</p>
                      <p class="card-text" style="color: white; font-weight: 800;">Entregas realizadas: {{usuario.entregas}}</p>
                      <a href="/home" class="btn btn-primary" style="width: 100% ; background-color: rgb(240, 36, 36); border: none; margin-top: 24px;">Ver dados do funcionário</a>
                  </div>
              </div>
          </div>
      </div>
  </main>
</template>


<script>

import UsuarioDataService from "../services/UsuarioDataService";

export default {
  name: "list-usuarios",
  data() {
    return {
      usuarios: [],
    };
  },
  methods: {
    retriveUsuario() {
      UsuarioDataService.getAll()
      .then(response => {
        this.usuarios = response.data;
        console.log(this.usuarios);
      })
      .catch(e => {
        console.log(e);
      });
    },
  },
  mounted() {
    this.retriveUsuario();
  }
};

</script>
<style>
  body{
    
  }
  .user{
    color: white;
    padding: 24px;
  }
</style>
