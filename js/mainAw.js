// mainAw.js
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

if (document.getElementById('userAw')) {
    document.getElementById('userAw').textContent = kiwiUser.name;
    document.getElementById('pointAw').textContent = `Puntos: ${kiwiUser.pts}`;
    document.getElementById('puestAw').textContent = `Puesto: #${kiwiUser.order}`;
} else {
    alert("Usuario o contraseña incorrectos.");
    document.getElementById('userAw').textContent = "Usuario no encontrado";
    document.getElementById('pointAw').textContent = "Puntos: -";
    document.getElementById('puestAw').textContent = "Puesto: ##";
}
