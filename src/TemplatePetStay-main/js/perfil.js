let usersArray;

function getUserIdFromUrl() {
     const urlParams = new URLSearchParams(window.location.search);
     return urlParams.get('id');
}

const userId = getUserIdFromUrl();
console.log(userId);
$(document).ready(function () {
     $.ajax({
          type: 'GET',
          url: 'http://localhost:3000/users',
          cache: false,
          success: function (users) {
               usersArray = users;
               localStorage.setItem('users', JSON.stringify(users));

               usersArray.forEach((user) => {
                    if (user.id == userId) {

                         appendCuidadorPerfil(user);
                    }
               });
          },
          error: function (error) {
               console.error('Error fetching data:', error);
          }
     });

     function appendCuidadorPerfil(user) {
          const perfilDiv = $('<div>').addClass('hoster');

          perfilDiv.append(`
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
                 </div>
             </div>
         `);
          if (user.rating && user.rating.length > 0) {
               const commentsDiv = $('<div>').addClass('comments');

               user.rating.forEach((comment) => {
                    commentsDiv.append(`
                  <div class="comment">
                      <p>${comment.text}</p>
                  </div>
              `);
               });

               $('#commentsContainer').html(commentsDiv);
          }

          $('#hosterInfo').append(perfilDiv);
     }

     document.getElementById('commentForm').addEventListener('submit', (event) => {
          event.preventDefault();
          nota = document.getElementById('notaField').value;
          commentText = document.getElementById('commentInput').value;
          //console.log(commentText, nota);
          const userToUpdate = usersArray.find((user) => user.id == userId);
          if (userToUpdate) {
               //console.log('if');
               let avaliacao = {
                    "nota": parseInt(nota),
                    "text": commentText
               };
               console.log(avaliacao);
               userToUpdate.rating.push(avaliacao);
               console.log('userToUpdate.rating:', userToUpdate.rating);

               let totalNota = 0;
               userToUpdate.rating.forEach((rate) => {
                    totalNota += rate.nota;
               });

               userToUpdate.nota = userToUpdate.rating.length !== 0 ? totalNota / userToUpdate.rating.length : parseInt(nota);


               $.ajax({
                    type: 'PUT',
                    url: `http://localhost:3000/users/${userId}`,
                    contentType: 'application/json',
                    data: JSON.stringify(userToUpdate),
                    success: function (response) {

                         console.log('rating added:', response);

                         $.get('http://localhost:3000/users', function (users) {
                              localStorage.setItem('users', JSON.stringify(users));
                              console.log('Data fetched and stored in localStorage:', users);
                         })
                              .fail(function (error) {
                                   console.error('Error fetching updated data:', error);
                              });
                    },
                    error: function (error) {
                         console.error('Error updating user on the server:', error);
                    }
               });
          }
     });

     function appendComments(comment) {
          const commentDiv = $('<div>').addClass('hoster');
          commentDiv.append(`
               <div>
                    <p>${comment}</p>
               </div>
          `)
     }
});
