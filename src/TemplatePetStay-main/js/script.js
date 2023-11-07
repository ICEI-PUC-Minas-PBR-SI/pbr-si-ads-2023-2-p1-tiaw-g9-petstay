const requestDB = window.indexedDB.open("database", 3, ); //nome, versao e upgradeCallback

  requestDB.onerror = (event) => console.error('error on db');  

  requestDB.onupgradeneeded = (event) => {
    const db = event.target.result

    if(!db.objectStoreNames.contains('donoAnimal')){
      const donoAnimalStore = db.createObjectStore('donoAnimal', { keyPath: "id", autoIncrement: true });
      donoAnimalStore.createIndex('nomeId', 'nome', {unique: false});
      donoAnimalStore.createIndex('emailId', 'email', {unique: true});
      donoAnimalStore.createIndex('telID', 'telefone', {unique: true});
      donoAnimalStore.createIndex('birthID', 'dataNascimento', {unique});
      donoAnimalStore.createIndex('enderecoID', 'endereco', {unique: true});
      donoAnimalStore.createIndex('passID', 'senha', {unique: false});
      donoAnimalStore.createIndex('petsId', 'tipoAnimal', {unique: false, multiEntry: true});
      
    }
    if(!db.objectStoreNames.contains('cuidador')){
      const cuidadorStore = db.createObjectStore('cuidador', {keyPath: 'id', autoIncrement: true});
      cuidadorStore.createIndex('nomeId', 'nome', {unique: false});
      cuidadorStore.createIndex('emailId', 'email', {unique: true});
      cuidadorStore.createIndex('telID', 'telefone', {unique: true});
      cuidadorStore.createIndex('birthID', 'dataNascimento', {unique});
      cuidadorStore.createIndex('enderecoID', 'endereco', {unique: true});
      cuidadorStore.createIndex('passID', 'senha', {unique: false});
      cuidadorStore.createIndex('acceptedPetsId', 'tipoAnimalAceito', {unique: false, multiEntry: true});
      cuidadorStore.createIndex('notaId', 'nota', {unique: false});
      cuidadorStore.createIndex("comments", "comments", { unique: false });
    }
    console.log('tables created');
  }

  requestDB.onsuccess = (event) => {
    console.log("db created");
    try {
      const db = event.target.result;
      fillDB(db);
    } catch (error) {
      console.error(error);
    }
    
};

function fillDB(db) {
  document.getElementById("cadaster").addEventListener("submit", (event) => {
    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let birth = document.getElementById("birth").value;
    let endrc = document.getElementById("endrc").value;
    let senha = document.getElementById("password").value;
    let confirmaSenha = document.getElementById("confirmPassword").value;
    let tipoUser = document.querySelector('input[name="renderOption"]:checked');
    let animais = [];

    let ave = document.getElementById("ave");
    let cachorro = document.getElementById("cachorro");
    let gato = document.getElementById("gato");

    if(ave.checked){
      animais.push(ave.value);
    }
    if(cachorro.checked){
      animais.push(cachorro.value);
    }
    if(gato.checked){
      animais.push(gato.value);
    }
    //let animais = document.getElementById().value;
    let newUser;
    if(senha == confirmaSenha){
      if(tipoUser.value == 'cuidador'){
        newUser = {
          nome: nome,
          email: email,
          phone: phone,
          birth: birth,
          endrc: endrc,
          senha: senha,
          tipoAnimal: animais
        }

        let transaction = db.transaction(["donoAnimal"], "readonly");
        let objStore = transaction.objectStore("donoAnimal");
        let addCuidadorReq = objStore.add(newUser);

        addCuidadorReq.onsuccess = () => console.log("cuidador adicionado");
      }else if(tipoUser.value == 'donoDoPet'){
        newUser = {
          nome: nome,
          email: email,
          phone: phone,
          birth: birth,
          endrc: endrc,
          senha: senha,
          tipoAnimalAceito: animais
          
        }
        let transaction = db.transaction(["cuidador"], "readonly");
        let objStore = transaction.objectStore("cuidador");
        let addCuidadorReq = objStore.add(newUser);
        addCuidadorReq.onsuccess = () => console.log("cuidador adicionado");
      }
    }
    
  })
}

  


  