    
<template style="">
  <main style="margin-bottom: 280px; background-color:#181818;">
  <link rel="stylesheet" type="text/css" href="/src/home.css" media="screen" />
  <nav class="navbar navbar-expand-lg bg-body-" style="justify-content: center; align-items: center; background-color: rgba(37,37,37); border: rgba(37,37,37); color: white">
    <div class="container-fluid" style="justify-content: center; align-items: center; background-color: rgba(37,37,37)">
      <img src="/logo.png" style="width: 90px; margin: 16px;">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent" style="background-color: rgba(37,37,37);">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/home" style="color: white;">Página Inicial</a>
        </li>
        <li class="nav-item">
          
          <router-link class="nav-link" to="/about" style="color: gray;">Histórico de Pedidos</router-link>
        </li>
      </ul>
      <router-link type="button" class="btn btn-outline-light" to="/cadastro">Adicionar Novo Pedido</router-link>
      <div style="display: flex; padding: 10px;align-items: center; justify-content: space-between; flex-direction: row;">
        <img src="/dog.jpg" style="width: 48px; border-radius: 48px; margin: 10px;">
      </div>
      <router-link class="nav-link" to="/">Sair</router-link>
    </div>
  </div>
  </nav>

  
  <h1 style="margin-left:56px; margin-top: 24px; margin-bottom: -24px; font-weight: 900; color: white; font-size: 2em;">Bem vindo(a), <a style="font-size: 1em; color: rgb(240, 36, 36)">Gabriela!</a></h1>
  <p style="margin-left:56px; margin-top: 28px; margin-bottom: -24px; font-weight: 500; color: gray ">Confira as novidades da sua conta!</p>

  <div class="row" style="padding: 50px;">
  <div v-for="(user, index) in usuario" :key="index">
    <div class="col-sm-3 mb-3 mb-sm-0">
      <div class="card" style="border-radius: 24px; border: none;">
        <div class="card-body" style="height: 100px; border: none; box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.137); background-color: rgba(37,37,37); border-radius: 8px; color: white;">
          <h5 class="card-title" style="color: grey; font-size: 16px; color: white">Meta de entregas</h5>
          <div class="icones" style="display: flex; flex-direction: row; align-items: center; justify-content: space-between; margin-top: 20px;">
            <p class="card-text" style="color:  rgb(240, 36, 36); font-size: 28px; font-weight: bold;">{{ user.Meta }}</p>
            <img src="/src/icons/monitoring_24dp_FILL0_wght300_GRAD0_opsz24.png" style="width: 32px; background-color: rgb(255, 36, 36, 0.130); border-radius: 4px;border: solid   rgb(255, 36, 36, 0.00); ">
          </div>
        </div>
      </div>
    </div>


    <div class="col-sm-3">
      <div class="card" style="border-radius: 24px; border: none;">
        <div class="card-body" style="height: 100px; border: none; box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.137); background-color: rgba(37,37,37); border-radius: 8px; color: white;">
          <h5 class="card-title" style="color: white; font-size: 16px;">Entregas realizadas</h5>
          <div class="icones" style="display: flex; flex-direction: row; align-items: center; justify-content: space-between;">
            <p class="card-text" style="color:  rgb(240, 36, 36); font-size: 28px; font-weight: bold;">{{ user.Entregas }}</p>
            <img src="/src/icons/inventory_2_24dp_FILL0_wght300_GRAD0_opsz24.png" style="width: 32px; background-color: rgb(255, 36, 36, 0.130); border-radius: 4px; border: solid   rgb(255, 36, 36, 0.00); ">
          </div>
        
        </div>
      </div>
    </div>
    <div class="col-sm-3">
      <div class="card" style="border-radius: 24px; border: none;">
        <div class="card-body" style="height: 100px; border: none; box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.137); background-color: rgba(37,37,37); border-radius: 8px; color: white;">
          <h5 class="card-title" style="color: white; font-size: 16px;">Avaliações</h5>
          <div class="icones" style="display: flex; flex-direction: row; align-items: center; justify-content: space-between;">
            <p class="card-text" style="color:  rgb(240, 36, 36); font-size: 28px; font-weight: bold;">546</p>
            <img src="/src/icons/verified_24dp_FILL0_wght300_GRAD0_opsz24.png" style="width: 32px;  background-color: rgb(255, 36, 36, 0.130); border-radius: 4px; border: solid   rgb(255, 36, 36, 0.00); ">
          </div>
        
        </div>
      </div>
    </div>
    <div class="col-sm-3">
      <div class="card" style="border-radius: 24px; border: none;">
        <div class="card-body" style="height: 100px; border: none; box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.137); background-color: rgba(37,37,37); border-radius: 8px; color: white;">
          <h5 class="card-title" style="color: white; font-size: 16px;">Multas recebidas</h5>
          <div class="icones" style="display: flex; flex-direction: row; align-items: center; justify-content: space-between;">
            <p class="card-text" style="color:  rgb(240, 36, 36); font-size: 28px; font-weight: bold;">{{ user.Multas }}</p>
            <img src="/src/icons/thumb_down_24dp_FILL0_wght300_GRAD0_opsz24 (1).png" style="width: 32px;  background-color: rgb(255, 36, 36, 0.130); border-radius: 4px; border: solid   rgb(255, 36, 36, 0.00); ">
          </div>
        
        </div>
      </div>
    </div>
    </div>
  </div>

    
  <h1 style="text-align: left;  font-weight: 900;  margin-left: 50px; color: white">
    Seus Dados
  </h1>
  <p style="text-align: left; font-weight: 500; color: gray ;margin-left: 50px">Confira os seus dados pessoais e progressos</p>
  <div style="margin-left: 50px;">
  <div class="donut-chart-block block" style=""> 
    <h2 class="titular" style="font-weight: 800">SOBRE AS SUAS ENTREGAS</h2>
    <div class="donut-chart">
    <div id="porcion1" class="recorte"><div class="quesito ios" data-rel="21"></div></div>
    <div id="porcion2" class="recorte"><div class="quesito mac" data-rel="39"></div></div>
    <div id="porcion3" class="recorte"><div class="quesito win" data-rel="31"></div></div>
    <div id="porcionFin" class="recorte"><div class="quesito linux" data-rel="9"></div></div>
    </div>
    <ul class="os-percentages horizontal-list">
    <li>
    <p class="ios os scnd-font-color" style="font-size: 12px">Canceladas</p>
    <p class="os-percentage">21<sup>%</sup></p>
    </li>
    <li>
    <p class="mac os scnd-font-color" style="font-size: 12px">Leves</p>
    <p class="os-percentage">39<sup>%</sup></p>
    </li>
    <li>
    <p class="linux os scnd-font-color" style="font-size: 12px">Pesadas</p>
    <p class="os-percentage">9<sup>%</sup></p>
    </li>
    <li>
    <p class="win os scnd-font-color" style="font-size: 12px">Concluídas</p>
    <p class="os-percentage">31<sup>%</sup></p>
    </li>
    </ul>
    </div>
    <div class="line-block block" style="">
      <div class="line-chart" style="background-color: rgba(0, 0, 0, 0.137); color: black;">
        <div class='grafico' style="color: white;">
       <ul class='eje-y'>
         <li data-ejeY='30'></li>
         <li data-ejeY='20'></li>
         <li data-ejeY='10'></li>
         <li data-ejeY='0'></li>
       </ul>
       <ul class='eje-x'>
         <li>Abr</li>
         <li>Mai</li>
         <li>Jun</li>
       </ul>
         <span data-valor='25'>
           <span data-valor='8'>
             <span data-valor='13'>
               <span data-valor='5'>   
                 <span data-valor='23'>   
                 <span data-valor='12'>
                     <span data-valor='15'>
                     </span></span></span></span></span></span></span>
       </div>

     </div>
                    <ul class="time-lenght horizontal-list">
                        <li><a class="time-lenght-btn" href="#14">Semana</a></li>
                        <li><a class="time-lenght-btn" href="#15">Mês</a></li>
                        <li><a class="time-lenght-btn" href="#16">Ano</a></li>
                    </ul>
                    <ul class="month-data clear">
                        <li>
                            <p>ABR<span class="scnd-font-color"> 2024</span></p>
                            <p><span class="entypo-plus increment"> </span>21<sup>%</sup></p>
                        </li>
                        <li>
                            <p>MAI<span class="scnd-font-color"> 2024</span></p>
                            <p><span class="entypo-plus increment"> </span>48<sup>%</sup></p>
                        </li>
                        <li>
                            <p>JUN<span class="scnd-font-color"> 2024</span></p>
                            <p><span class="entypo-plus increment"> </span>35<sup>%</sup></p>
                        </li>
                    </ul>
                </div>
              </div>
            <h1 style="font-weight: 900; margin-bottom: -8px">Confira seu histórico de pedidos</h1>
            <div class="tabela" style="display: flex;  padding: 0px;">
              <table class="table table-dark table-hover" style="padding: 0px; margin-top:24px ; margin-right: 0px; width: 95%; color: white; ">
                <thead style="padding: 0px; background-color: rgba(15,15,15);">
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Título</th>
                    <th scope="col">Endereço</th>
                    <th scope="col">Horário</th>
                    <th scope="col">Data</th>
                  </tr>
    </thead>
    <tbody >
      <tr v-for="(pedido, index) in pedidos" :key="index" >
        <td>{{ pedido.id }}</td>
        <td>{{ pedido.titulo }}</td>
        <td>{{ pedido.endereco }}</td>
        <td>{{ pedido.horario }}</td>
        <td>{{ pedido.data }}</td>
      </tr>

      </tbody>
    </table>
  </div>
  
 
      
</main>
</template>

<style>
  .horizontal-chart-container {
    width: 100%;
    padding: 20px;
    background-color: #181818;
    border-radius: 8px;
    box-shadow: #181818;
  }
  .horizontal-chart {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .horizontal-chart .bar {
    height: 30px;
    line-height: 30px;
    color: white;
    text-align: right;
    padding-right: 10px;
    border-radius: 5px;
  }

</style>

<script>
import PedidoDataService from "../services/PedidoDataService";


export default {
  name: "list-pedidos",
  data() {
    return{
      pedidos: []
    };
  },
  methods: {
    retrivePedido() {
      PedidoDataService.getAll()
      .then(response => {
        this.pedidos = response.data;
        console.log(this.pedidos);
      })
      .catch(e => {
        console.log(e)
      });
    }
  },

  name: "funcionario",
  data() {
    return{
      usuario: []
    };
  },
  methods: {
    retriveUsuario() {
      UsuarioDataService.getAll()
      .then(response => {
        this.usuario = response.data;
        console.log(this.usuario);
      })
      .catch(e => {
        console.log(e)
      });
    }
  },
  mounted() {
    this.retrivePedido();
    this.retriveUsuario();
  }
}


</script>