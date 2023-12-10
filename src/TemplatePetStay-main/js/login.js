// import jwt from 'jsonwebtoken';
//import { renderHeader} from './customHeader.js';
let usersArray;

$(document).ready(() => {

     $.ajax({
          type: 'GET',
          url: 'https://apiusers--briannicolasdc.repl.co/users',
          cache: false,
          success: function (users) {
               usersArray = users;
               localStorage.setItem('users', JSON.stringify(users));
          },
          error: function (error) {
               console.error('Error fetching data:', error);
          }
     });

     let tokenString = localStorage.getItem("token");
     let token = JSON.parse(tokenString);
     if (token) {
          $("#loginform").hide();
          $("#loginTitle").hide();
     }

     document.getElementById("login").addEventListener("submit", (event) => {
          //event.preventDefault();
          email = document.getElementById("emailLogin").value;
          senha = document.getElementById("senhaLogin").value;
          const userToLogIn = usersArray.find((user) => user.email == email);
          if (userToLogIn) {
               if (userToLogIn.senha == senha) {
                    const token = generateToken(userToLogIn);
                    localStorage.setItem('token', token);
                    window.location.reload(true);
                    console.log(token, userToLogIn.tipoUser);
                    //remover form login 
                    if (userToLogIn.tipoUser == "cuidador") {
                         $("#loginform").hide();
                         $("#loginTitle").hide();
                         window.location.href = "historicoReservas.html";
                    } else if (userToLogIn.tipoUser == "donoAnimal") {
                         $("#loginform").hide();
                         $("#loginTitle").hide();

                    }
                    $(document).trigger('login');
               } else {
                    alert(" Senha invalida!");
               }
          } else {
               alert("Email invalido!");
          }


     });

     document.getElementById("reservaForm").addEventListener("submit", (event) => {
          event.preventDefault();
          let endereco = document.getElementById("endereco").value;
          let dataInico = document.getElementById("data-entrada").value;
          let dataFinal = document.getElementById("data-saida").value;
          let tokenString = localStorage.getItem("token");
          let token = JSON.parse(tokenString);
          const user = usersArray.find(user => user.id == token.userId);
          const infoReserva = {
               endereco: endereco,
               dataEntrada: dataInico,
               dataSaida: dataFinal,
               tipoAnimal: token.tipoAnimal,
               id: user.reservas.length+1
          }
          console.log(infoReserva);
          localStorage.setItem('reserva', JSON.stringify(infoReserva));
          window.location.href = "listaHosters.html";
     })
})


function generateToken(user) {

     const tokenData = {
          userId: user.id,
          tipoUser: user.tipoUser,
          tipoAnimal: user.tipoAnimal

     };

     const token = JSON.stringify(tokenData);

     return token;
}

// const randomString = () => {
//      const length = 64;
//      const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
//      let result = '';
//      for (let i = 0; i < length; i++) {
//           const randomIndex = Math.floor(Math.random() * charset.length);
//           result += charset[randomIndex];
//      }
//      return result;
// };