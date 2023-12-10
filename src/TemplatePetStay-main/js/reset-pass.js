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
  document.getElementById("resetSenha").addEventListener("submit", async (event) => {
    event.preventDefault();
    email = document.getElementById("emailResetPass").value;
    novaSenha = document.getElementById("novaSenha").value;
    confirma = document.getElementById("confirmaNovaSenha").value;
    const userToUpdate = usersArray.find((user) => user.email === email);

    if (userToUpdate) {
      if (novaSenha === confirma) {
        userToUpdate.senha = novaSenha;
        $.ajax({
          type: 'PUT',
          url: `http://localhost:3000/users/${userToUpdate.id}`,
          contentType: 'application/json',
          data: JSON.stringify({ senha: novaSenha, ...userToUpdate }),
          success: function (response) {
            console.log('Password updated on the server:', response);

            $.get('http://localhost:3000/users', function (users) {
              localStorage.setItem('users', JSON.stringify(users));
              console.log('Data fetched and stored in localStorage:', users);
            })
              .fail(function (error) {
                console.error('Error fetching updated data:', error);
              });
          },
          error: function (error) {
            console.error('Error updating password on the server:', error);
          }
        });

      } else {
        console.error('As senhas são diferentes.');
      }
    } else {
      console.error('User not found with the specified email.');
    }
  });

});