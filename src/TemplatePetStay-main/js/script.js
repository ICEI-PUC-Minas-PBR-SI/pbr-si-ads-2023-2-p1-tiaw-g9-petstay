let usersArray = localStorage.getItem('users') ?
  JSON.parse(localStorage.getItem('users')) : [];

// document.getElementById("cadaster").addEventListener("submit", async (event) => {
//   event.preventDefault();

//   let nome = document.getElementById("nome").value;
//   let email = document.getElementById("email").value;
//   let phone = document.getElementById("phone").value;
//   let birth = document.getElementById("birth").value;
//   let endrc = document.getElementById("endrc").value;
//   let senha = document.getElementById("password").value;
//   let confirmaSenha = document.getElementById("confirmPassword").value;
//   let tipoUser = document.querySelector('input[name="renderOption"]:checked');
//   let animais = [];

//   let ave = document.getElementById("ave");
//   let cachorro = document.getElementById("cachorro");
//   let gato = document.getElementById("gato");

//   if (tipoUser.value == "cuidador") {
//     ave = document.getElementById("aveCuidador");
//     cachorro = document.getElementById("cachorroCuidador");
//     gato = document.getElementById("gatoCuidador");
//   }

//   if (ave.checked) {
//     animais.push("ave");
//   }
//   if (cachorro.checked) {
//     animais.push("cachorro");
//   }
//   if (gato.checked) {
//     animais.push("gato");
//   }

//   let newUser;
//   if (senha == confirmaSenha) {
//     newUser = {
//       tipoUser: tipoUser.value,
//       nome: nome,
//       email: email,
//       phone: phone,
//       birth: birth,
//       endrc: endrc,
//       senha: senha,
//       tipoAnimal: animais,
//       nota: 0,
//       reservas: [],
//       comments: []
//     }

//   }
//   usersArray.push(newUser);
//   localStorage.setItem("users", JSON.stringify(usersArray));
// });

let logged = false;
document.getElementById("login").addEventListener("submit", (event) => {
  event.preventDefault();
  email = document.getElementById("emailLogin").value;
  senha = document.getElementById("senhaLogin").value;

  usersArray.map((user) => {
    if(user.email == email){
      if(user.senha == senha) {
      logged = true; 
      console.log(logged);
      }else{
        console.log("senha incorreta");
      }
      return logged;
  } else {
    console.log("Usuario nao encontrado");
  } 
  });
});

document.getElementById("resetSenha").addEventListener("submit", (event) => {
  event.preventDefault();
  email = document.getElementById("emailResetPass").value;
  novaSenha = document.getElementById("novaSenha").value;
  confirma = document.getElementById("confirmaNovaSenha").value;
  usersArray.map((user) => {
    if(user.email == email){
      if(novaSenha == confirma)
        user.senha = novaSenha;
    }
  });
});