$(document).ready(function () {

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
               usersArray.forEach(function (user) {
                    if (user.id == token.userId) {
                         console.log('fodas');
                         reservasValidas(user.reservas);
                    }
               })
          },
          error: function (error) {
               console.error('Error fetching data:', error);
          }
     });





     $('#agendamentos').on('click', '.cancelarHostingBtn', function () {
          const userId = token.userId;
          const reservaIndex = $(this).data('reserva-index');

          
          const userIndex = usersArray.findIndex(user => user.id == userId);

          if (userIndex !== -1) {
               
               if (reservaIndex !== undefined && reservaIndex >= 0 && reservaIndex < usersArray[userIndex].reservas.length) {
               
                    usersArray[userIndex].reservas.splice(reservaIndex, 1);

                    $.ajax({
                         type: 'PUT',
                         url: `http://localhost:3000/users/${userId}`,
                         contentType: 'application/json',
                         data: JSON.stringify(usersArray[userIndex]),
                         success: function () {
                              console.log('Reservation canceled and server updated successfully');
                         },
                         error: function (error) {
                              console.error('Error updating server:', error);
                         }
                    });

                    
                    $(this).closest('.container').remove();
               } else {
                    console.error('Invalid reservation index');
               }
          } else {
               console.error('User not found in usersArray');
          }

          //$(this).closest('.container').remove();
     });

});

function reservasValidas(reservas) {
     const currentDate = new Date();
     const agendamentosContainer = $('#agendamentos');
     console.log("reservas");

     for (const reserva of reservas) {
          const dataSaidaReserva = new Date(reserva.dataSaida);

          if (dataSaidaReserva >= currentDate) {
               const agendamentoDiv = $('<div>').addClass('container').attr('id', 'agendamentos');
               agendamentoDiv.append(`
                 <div style="margin-top: 10px;">
                     <h4>Seus agendamentos</h4>
                 </div>
                 <div class="hostingManage">
                     <p>${reserva.dataEntrada} a ${reserva.dataSaida}</p>
                     <button class="cancelarHostingBtn" id="cancelarHosting" data-reserva-id="${reserva.id}">Cancelar agendamento</button>
                 </div>
             `);

               agendamentosContainer.append(agendamentoDiv);
          }
     }
}
