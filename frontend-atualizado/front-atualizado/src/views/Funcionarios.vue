<template>
    <main style="">
    <link rel="stylesheet" type="text/css" href="/src/home.css" media="screen" />
    <nav class="navbar navbar-expand-lg bg-body-" style="justify-content: center; align-items: center; background-color: rgba(37,37,37); border: rgba(37,37,37); color: white">
    <div class="container-fluid" style="justify-content: center; align-items: center; background-color: rgba(37,37,37)">
      <img src="/logo.png" style="width: 90px; margin: 16px;">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent" style="background-color: rgba(37,37,37);">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">

        <!-- <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Histórico de Pedidos
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> -->
      </ul>
      
    <div style="display: flex; padding: 10px;align-items: center; justify-content: space-between; flex-direction: row;">
        <img src="/dog.jpg" style="width: 48px; border-radius: 48px; margin: 10px;">
    </div>
    <router-link class="nav-link" to="/">Sair</router-link>
</div>
</div>
</nav>
<div class="funcionarios">
    <h1 style="text-align: center; padding-top: 24px; font-weight: 800; font-size: 2em">Painel de Funcionários</h1>
      <div class="card" style="width: 18rem; margin-top: 24px; margin-left: 160px; border: none; border-color: rgba(37,37,37); box-shadow: none; border-radius: 16px;">
      <div class="card-body" style="background-color:rgba(37,37,37); border: none; border-color: rgba(37,37,37); box-shadow: none; border-radius: 8px;">
          <h5 class="card-title" style="color: white;">Gabriela Leal Tavares</h5>
          <p class="card-text" style="color: white">gabrielalealtavares@gmail.com</p>
          <p class="card-text" style="color: white">49553722-19</p>
          <p class="card-text" style="color: white">Rua Avenida das Esmeraldas</p>

          <a href="/home" class="btn btn-primary" style="width: 100% ; background-color: rgb(240, 36, 36); border: none;">Ver dados do funcionário</a>
      </div>
      </div>
  </div>
    </main>
</template>