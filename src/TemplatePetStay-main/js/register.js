// let usersArray = localStorage.getItem('users') ?
//   JSON.parse(localStorage.getItem('users')) : [];
document.addEventListener("DOMContentLoaded", function () {
     let usersArray;
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

     document.getElementById("cadaster").addEventListener("submit", async (event) => {
          event.preventDefault();
          let nome = document.getElementById("nome").value;
          let email = document.getElementById("email").value;
          let phone = document.getElementById("phone").value;
          let birth = document.getElementById("birth").value;
          let endrc = document.getElementById("endrc").value;
          let senha = document.getElementById("password").value;
          let confirmaSenha = document.getElementById("confirmPassword").value;
          let tipoUser = document.querySelector('input[name="renderOption"]:checked').value;
          let animais = [];

          let ave = document.getElementById("ave");
          let cachorro = document.getElementById("cachorro");
          let gato = document.getElementById("gato");

          if (tipoUser == "cuidador") {
               ave = document.getElementById("aveCuidador");
               cachorro = document.getElementById("cachorroCuidador");
               gato = document.getElementById("gatoCuidador");
          }

          if (ave.checked) {
               animais.push("ave");
          }
          if (cachorro.checked) {
               animais.push("cachorro");
          }
          if (gato.checked) {
               animais.push("gato");
          }

          let newUser;
          if (senha == confirmaSenha) {
               newUser = {
                    id: usersArray.length + 1,
                    tipoUser: tipoUser,
                    nome: nome,
                    email: email,
                    phone: phone,
                    birth: birth,
                    endrc: endrc,
                    senha: senha,
                    tipoAnimal: animais,
                    nota: 0,
                    reservas: [],
                    rating: []
               }

          }
          //usersArray.push(newUser);
          $.ajax({
               type: 'POST',
               url: 'http://localhost:3000/users',
               contentType: 'application/json',
               data: JSON.stringify(newUser),
               success: function (addedUser) {
                    console.log('New user added on the server:', addedUser);

                    $.get('http://localhost:3000/users', function (users) {
                         localStorage.setItem('users', JSON.stringify(users));
                         console.log('Data fetched and stored in localStorage:', users);
                    })
                         .fail(function (error) {
                              console.error('Error fetching updated data:', error);
                         });
               },
               error: function (error) {
                    console.error('Error adding new user to the server:', error);
               }
          });
     });
});