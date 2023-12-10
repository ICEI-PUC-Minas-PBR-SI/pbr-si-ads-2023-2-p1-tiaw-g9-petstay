$(document).ready(function () {
     let usersArray;
 
     function getUserIdFromUrl() {
         const urlParams = new URLSearchParams(window.location.search);
         return urlParams.get('id');
     }
 
     const userId = getUserIdFromUrl();
 
     console.log(userId);
 
     $.ajax({
         type: 'GET',
         url: 'https://apiusers--briannicolasdc.repl.co/users',
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
 
         const commentsContainer = $('#commentsContainer');
 
         if (user.rating && user.rating.length > 0) {
             user.rating.forEach((comment) => {
                 const commentDiv = $('<div>').addClass('comment');
                 commentDiv.append(`<p>${comment.text}</p>`);
                 commentsContainer.append(commentDiv);
             });
         }
 
         $('#hosterInfo').append(perfilDiv);
     }
 
     document.getElementById('commentForm').addEventListener('submit', (event) => {
         event.preventDefault();
         const nota = document.getElementById('notaField').value;
         const commentText = document.getElementById('commentInput').value;
 
         const userToUpdate = usersArray.find((user) => user.id == userId);
 
         if (userToUpdate) {
             const avaliacao = {
                 nota: parseInt(nota),
                 text: commentText
             };
 
             userToUpdate.rating.push(avaliacao);
 
             let totalNota = 0;
 
             userToUpdate.rating.forEach((rate) => {
                 totalNota += rate.nota;
             });
 
             userToUpdate.nota =
                 userToUpdate.rating.length !== 0 ? totalNota / userToUpdate.rating.length : parseInt(nota);
 
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
                     }).fail(function (error) {
                         console.error('Error fetching updated data:', error);
                     });
                 },
                 error: function (error) {
                     console.error('Error updating user on the server:', error);
                 }
             });
 
             // Clear input fields
             document.getElementById('notaField').value = '';
             document.getElementById('commentInput').value = '';
 
             // Update comments in real-time
             const commentDiv = $('<div>').addClass('comment');
             commentDiv.append(`<p>${commentText}</p>`);
             $('#commentsContainer').append(commentDiv);
         }
     });
 });
 