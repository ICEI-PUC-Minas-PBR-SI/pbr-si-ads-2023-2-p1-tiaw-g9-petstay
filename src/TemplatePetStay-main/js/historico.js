$(document).ready(() => {
     let usersArray;
     let tokenString = localStorage.getItem("token");
     let token = JSON.parse(tokenString);

     $.ajax({
          type: 'GET',
          url: 'http://localhost:3000/users',
          cache: false,
          success: function (users) {
               usersArray = users;
               localStorage.setItem('users', JSON.stringify(users));
               //let reserva = JSON.parse(localStorage.getItem('reserva'));
               usersArray.forEach((user) => {
                    
                         if (user.id == token.userId) {
                              renderHistoricalReservations(user.reservas);
                         }
               });
          },
          error: function (error) {
               console.error('Error fetching data:', error);
          }
     });

     let historico;
    

     //loopar reservas 
     function renderHistoricalReservations(reservas) {
          const historicoReservasContainer = $('#historicoReservas');
  
          for (const reserva of reservas) {
              const dataAtual = new Date();
              const dataSaida = new Date(reserva.dataSaida);
  
              if (dataAtual > dataSaida) {
                  const historicoDiv = $('<div>').addClass('container historicoReservasItem');
                  historicoDiv.append(`
                      <div style="margin-top: 10px;">
                          <h4>Reservas Antigas</h4>
                      </div>
                      <div class="hostingManage">
                          <p>${reserva.dataEntrada} a ${reserva.dataSaida}</p>
                          
                      </div>
                  `);
  
                  historicoReservasContainer.append(historicoDiv);
              }
          }
      }
     
});

