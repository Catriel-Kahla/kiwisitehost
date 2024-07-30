let getInfoBut = document.getElementById("getInfo");

let kiwiUser;
if (sessionStorage.getItem('activeUser')){
    kiwiUser=JSON.parse(sessionStorage.getItem('activeUser'));
    console.log(kiwiUser);
}else{
    window.location.href = "kiwiLogIn.html";
}

if (document.getElementById("kiwiSiteBack")) {
    document.getElementById("kiwiSiteBack").addEventListener('click', () => {
        location.href = "../index.html"; // Redirigir hacia atrás a la página de inicio
    });
}

function getInfo(){
    let userBox = document.getElementById("userBox").value;
    let passBox = document.getElementById("passBox").value;

    let unlockedKiwi = false;
    let testKiwi = false;
    let user;
    if(user = data.person.find(person => person.name === userBox && person.pass === passBox)){
        unlockedKiwi=true;
        user = data.person.find(person => person.name === userBox && person.pass === passBox);
        sessionStorage.setItem('activeUser', JSON.stringify(user));
        window.location.href = "../index.html";
    }else{
        alert("Datos incorrectos o vacíos");
    }
    
}

if (getInfoBut) {
    getInfoBut.addEventListener('click', () => {
        alert("No funciona en este momento");
    });
}