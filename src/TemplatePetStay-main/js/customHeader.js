$(document).ready(function () {

  renderHeader();
  document.getElementById('logout').addEventListener('click', () => {
    localStorage.removeItem('token');
    location.reload();
  });
});

$(document).on('login', () => {
  renderHeader();
  console.log('local storage mudou');
});



function renderHeader() {
  let tokenString = localStorage.getItem("token");
  let token = JSON.parse(tokenString);
  let header = $('#header-main');
  if (token) {
    header.html(` <nav class="navbar navbar-expand-lg custom_nav-container">
          <a class="navbar-brand" href="index.html">
            <img src="images/logo.png" alt="" />
            <span> PetStay </span>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class=""> </span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="index.html#reservaForm"> Agendar </a>
              </li>
              
            <li class="nav-item">
              <a class="nav-link" href="manageReservas.html"> Reservas </a>
            </li>
         
              <li class="nav-item">
                <a class="nav-link pr-lg-0" href="historicoReservas.html">
                  Historico</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link pr-lg-0"><button id="logout" >SAIR</button></a>
              </li>
            </ul>
          </div>
        </nav>`);
  } else {
    header.html(` <nav class="navbar navbar-expand-lg custom_nav-container">
          <a class="navbar-brand" href="index.html">
            <img src="images/logo.png" alt="" />
            <span> PetStay </span>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class=""> </span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="index.html"> Página Inicial </a>
              </li>
              
            <li class="nav-item">
              <a class="nav-link" href="index.html"> Login </a>
            </li>
         
              <li class="nav-item">
                <a class="nav-link pr-lg-0" href="register.html">
                  Cadastre-se</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" href="about.html"> O que fazemos? </a>
              </li>
            </ul>
          </div>
        </nav>`);
  }
}

