let usersArray;
let token
$(document).ready(() => {
     
     let tokenString = localStorage.getItem("token");
     token = JSON.parse(tokenString);

     $.ajax({
          type: 'GET',
          url: 'https://apiusers--briannicolasdc.repl.co/users',
          cache: false,
          success: function (users) {
               usersArray = users;
               localStorage.setItem('users', JSON.stringify(users));
               //let reserva = JSON.parse(localStorage.getItem('reserva'));
               usersArray.forEach((user) => {
                    
                         if (user.id == token.userId) {
                              renderHistoricalReservations(user.reservas);
                         }
                         // if (user.id == token.userId) {
                         //      renderHistoricalReservations(user.reservas);
                         // }
               });
               
          },
          error: function (error) {
               console.error('Error fetching data:', error);
          }
     });

     
    

     //loopar reservas 
     function renderHistoricalReservations(reservas) {
          const historicoReservasContainer = $('#historicoReservas');
          let nome;
          let id;

          for (const reserva of reservas) {
               usersArray.forEach((user) => {
                    if (user.id != token.userId) {
                         user.reservas.forEach((reserva2) => {
                              if(reserva2.id == reserva.id) {
                                   nome = user.nome;
                                   id = user.id;
                              }
                         })
                    }
               })
              const dataAtual = new Date();
              const dataSaida = new Date(reserva.dataSaida);
              if (dataAtual > dataSaida) {
                  const historicoDiv = $('<div>').addClass('container historicoReservasItem');
                  historicoDiv.append(`
                      
                      <div class="hostingManage">
                          <p>${reserva.dataEntrada} a ${reserva.dataSaida}</p>
                          <p><a href="perfilHoster.html?id=${id}" class="verPerfilBtn" data-user-id="${id}">${nome}</a></p>
                          <p>${reserva.endereco}</p>
                      </div>
                  `);
  
                  historicoReservasContainer.append(historicoDiv);
              }
          }
      }
     
});

