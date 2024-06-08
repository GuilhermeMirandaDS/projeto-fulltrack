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
    <form style="align-items: center; justify-content: center; padding-right: 30em; padding-left: 30em;">
                <div class="mb-3" style=" align-items: center; justify-content: center;">
                    <h1 style="padding: 24px; font-weight: 700; color: white; text-align: center;">Cadastre um novo pedido para a <a style="color: rgb(240, 36, 36); font-size: 32px;">Gabriela!</a></h1>
                    <label for="exampleInputEmail1" class="form-label" style="color: white">Título</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style="background-color: white;">
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label" style="color: white">Endereço</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" style="background-color: white; ">
                </div>
                <div class="form-group col-md-100" style="padding-bottom: 10px;">
                <label for="inputState" style="color: white; width: 100%">Selecione um horário de data</label>
                <select id="inputState" class="form-control">
                    <option selected>Selecione um horário</option>
                    <option>11h00</option>
                    <option>12h00</option>
                    <option>13h00</option>
                    <option>14h00</option>
                    <option>16h30</option>
                    <option>17h00</option>

                </select>
                </div>
                <div class="mb-3">
                    <input type="date" name="date" id="date" style="width: 100%;">
                </div>

                <router-link class="btn btn-primary" style="background-color:rgb(240, 36, 36); border: none; font-weight: 600; width: 100%;" to="/home">Registrar pedido</router-link>
                
            </form>
            </main>
            </template>
