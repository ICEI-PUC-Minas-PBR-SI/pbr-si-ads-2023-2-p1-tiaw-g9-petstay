let usersArray;

$(document).ready(function () {
  $.ajax({
    type: 'GET',
    url: 'https://apiusers--briannicolasdc.repl.co/users',
    cache: false,
    success: function (users) {
      usersArray = users;
      localStorage.setItem('users', JSON.stringify(users));
      let reserva = JSON.parse(localStorage.getItem('reserva'));
      usersArray.forEach((user) => {
        if (user.tipoUser == 'cuidador') {
          if (verificarDisponibilidade(user.reservas, reserva)) {
            appendCuidadorDiv(user);
          }
        }
      });
    },
    error: function (error) {
      console.error('Error fetching data:', error);
    }
  });

  function appendCuidadorDiv(user) {
    const userDiv = $('<div>').addClass('hoster');

    userDiv.append(`
      <div>
        <img src="./images/client1.jpg" alt="" class="userImg">
      </div>
      <div class="hosterInfo">
        <div>
          <p>${user.nome}</p>
          <p>${user.endrc}</p>
          <p>Cuidador de ${user.tipoAnimal}(s)</p>
        </div>
        <div style="margin-left: 10vh;">
          <p>Nota: ${user.nota}/5</p>
          <p><a href="http://wa.me">Entrar em contato</a></p>
          <p><a href="perfilHoster.html?id=${user.id}" class="verPerfilBtn" data-user-id="${user.id}">Ver perfil</a></p>
 
        </div>
        <div>
          <button class="agendarBtn" id="agendarbtn">Agendar</button>
        </div>
      </div>
    `);

    $('#hosterInfo').append(userDiv);
    userDiv.find('.agendarBtn').click(() => {
      selectedCuidador = user;
    });
  }

  $(document).on('click', '.agendarBtn', () => {
    if (selectedCuidador) {
      const reserva = JSON.parse(localStorage.getItem('reserva'));
      selectedCuidador.reservas.push(reserva);

      const cuidadorIndex = usersArray.findIndex(user => user.id == selectedCuidador.id);
      if (cuidadorIndex !== -1) {
        usersArray[cuidadorIndex] = selectedCuidador;
        $.ajax({
          type: 'PUT',
          url: `https://apiusers--briannicolasdc.repl.co/users/${selectedCuidador.id}`,
          data: JSON.stringify(selectedCuidador),
          contentType: 'application/json',
          success: function () {
            console.log('Cuidador updated successfully on the server');
          },
          error: function (error) {
            console.error('Error updating cuidador on the server:', error);
          }
        });
      }

      let tokenString = localStorage.getItem("token");
      let token = JSON.parse(tokenString);
      usersArray.forEach((user) => {
        if (user.id == token.userId) {
          user.reservas.push(reserva);
          $.ajax({
            type: 'PUT',
            url: `https://apiusers--briannicolasdc.repl.co/users/${user.id}`,
            data: JSON.stringify(user),
            contentType: 'application/json',
            success: function () {
              console.log('User who initiated reservation updated successfully on the server');
            },
            error: function (error) {
              console.error('Error updating user who initiated reservation on the server:', error);
            }
          });
        }
      });

      localStorage.setItem('users', JSON.stringify(usersArray));
      console.log('Reservation added successfully');
      window.location.href = "../TemplatePetStay-main/manageReservas.html";
    } else {
      console.error('No cuidador selected');
    }

    localStorage.removeItem('reserva');
  });

});

function verificarDisponibilidade(reservas, novaReserva) {
  for (const reserva of reservas) {

    const dataEntradaReserva = new Date(reserva.dataEntrada);
    const dataSaidaReserva = new Date(reserva.dataSaida);
    const dataEntradaNovaReserva = new Date(novaReserva.dataEntrada);
    const dataSaidaNovaReserva = new Date(novaReserva.dataSaida);


    if (
      (dataEntradaNovaReserva >= dataEntradaReserva && dataEntradaNovaReserva < dataSaidaReserva) ||
      (dataSaidaNovaReserva > dataEntradaReserva && dataSaidaNovaReserva <= dataSaidaReserva) ||
      (dataEntradaNovaReserva <= dataEntradaReserva && dataSaidaNovaReserva >= dataSaidaReserva)
    ) {

      return false;
    }
  }
  return true;
}
