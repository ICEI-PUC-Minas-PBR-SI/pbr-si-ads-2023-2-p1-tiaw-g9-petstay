const requestDB = window.indexedDB.open("database", 3);

requestDB.onerror = (event) => console.error('error on db');

requestDB.onsuccess = (event) => {
    const db = event.target.result;
    console.log("db created");

    document.getElementById("cadaster").addEventListener("submit", async (event) => {
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

        if (tipoUser.value == "cuidador") {
            ave = document.getElementById("aveCuidador");
            cachorro = document.getElementById("cachorroCuidador");
            gato = document.getElementById("gatoCuidador");
        }

        if (ave.checked) {
            animais.push(ave.value);
        }
        if (cachorro.checked) {
            animais.push(cachorro.value);
        }
        if (gato.checked) {
            animais.push(gato.value);
}

        

        let newUser;
        if (senha == confirmaSenha) {
            if (tipoUser.value == 'donoAnimal') {
                newUser = {
                    nome: nome,
                    email: email,
                    telefone: phone,
                    dataNascimento: birth,
                    endereco: endrc,
                    senha: senha,
                    tipoAnimal: animais
                }

                let donoObjStore = db.transaction(["donoAnimal"], "readwrite").objectStore("donoAnimal");
                let addCuidadorReq = donoObjStore.add(newUser);

                addCuidadorReq.onsuccess = () => console.log("dono do animal adicionado");
            } else if (tipoUser.value == 'cuidador') {
                newUser = {
                    nome: nome,
                    email: email,
                    telefone: phone,
                    dataNascimento: birth,
                    endereco: endrc,
                    senha: senha,
                    tipoAnimalAceito: animais
                }

                let transaction = db.transaction(["cuidador"], "readwrite");
                let objStore = transaction.objectStore("cuidador");
                let addCuidadorReq = objStore.add(newUser);
                addCuidadorReq.onsuccess = () => console.log("cuidador adicionado");
            }
        }
    });
};

requestDB.onupgradeneeded = (event) => {
    const db = event.target.result;
    db.onerror = (event) => console.error('error on load db');

    if (!db.objectStoreNames.contains('donoAnimal')) {
        const donoAnimalStore = db.createObjectStore('donoAnimal', { keyPath: "id", autoIncrement: true });
        donoAnimalStore.createIndex('nomeId', 'nome', { unique: false });
        donoAnimalStore.createIndex('emailId', 'email', { unique: true });
        donoAnimalStore.createIndex('telID', 'telefone', { unique: true });
        donoAnimalStore.createIndex('birthID', 'dataNascimento', { unique: false });
        donoAnimalStore.createIndex('enderecoID', 'endereco', { unique: true });
        donoAnimalStore.createIndex('passID', 'senha', { unique: false });
        donoAnimalStore.createIndex('petsId', 'tipoAnimal', { unique: false, multiEntry: true });
    }

    if (!db.objectStoreNames.contains('cuidador')) {
        const cuidadorStore = db.createObjectStore('cuidador', { keyPath: 'id', autoIncrement: true });
        cuidadorStore.createIndex('nomeId', 'nome', { unique: false });
        cuidadorStore.createIndex('emailId', 'email', { unique: true });
        cuidadorStore.createIndex('telID', 'telefone', { unique: true });
        cuidadorStore.createIndex('birthID', 'dataNascimento', { unique: false });
        cuidadorStore.createIndex('enderecoID', 'endereco', { unique: true });
        cuidadorStore.createIndex('passID', 'senha', { unique: false });
        cuidadorStore.createIndex('acceptedPetsId', 'tipoAnimalAceito', { unique: false, multiEntry: true });
        cuidadorStore.createIndex('notaId', 'nota', { unique: false });
        cuidadorStore.createIndex("comments", "comments", { unique: false });
    }
};


