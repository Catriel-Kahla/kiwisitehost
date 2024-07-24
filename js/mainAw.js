// mainAw.js

const data = {
    "person": [
        {
            "name": "Caminob5",
            "pass": "5Cnb",
            "pts": "324,17",
            "order": "1"
        },
        {
            "name": "Ame",
            "pass": "Roma",
            "pts": "288,75",
            "order": "2"
        },
        {
            "name": "China",
            "pass": "naCh",
            "pts": "282,08",
            "order": "3"
        },
        {
            "name": "Jeanu3000",
            "pass": "Jnu3",
            "pts": "254,58",
            "order": "4"
        },
        {
            "name": "Chiara vasques",
            "pass": "vasC",
            "pts": "247,08",
            "order": "5"
        },
        {
            "name": "Nana",
            "pass": "NaNa",
            "pts": "237,92",
            "order": "6"
        },
        {
            "name": "Dale don dale",
            "pass": "DdDd",
            "pts": "219,58",
            "order": "7"
        },
        {
            "name": "Pixel",
            "pass": "xPix",
            "pts": "208,33",
            "order": "8"
        },
        {
            "name": "Poncha07",
            "pass": "P7ch",
            "pts": "199,58",
            "order": "9"
        },
        {
            "name": "FranBa",
            "pass": "aEma",
            "pts": "112,92",
            "order": "10"
        },
        {
            "name": "Lautaro",
            "pass": "Latr",
            "pts": "-",
            "order": "No ha participado anteriormente!"
        },
        {
            "name": "Agus",
            "pass": "sUga",
            "pts": "-",
            "order": "No ha participado anteriormente!"
        },
        {
            "name": "Mil",
            "pass": "1Mil",
            "pts": "-",
            "order": "No ha participado anteriormente!"
        }
    ]
};

const usuario = prompt("Nombre de usuario:");
const contra = prompt("Contraseña:");

const user = data.person.find(person => person.name === usuario && person.pass === contra);

if (user) {
    document.getElementById('userAw').textContent = user.name;
    document.getElementById('pointAw').textContent = `Puntos: ${user.pts}`;
    document.getElementById('puestAw').textContent = `Puesto: #${user.order}`;
} else {
    alert("Usuario o contraseña incorrectos.");
    document.getElementById('userAw').textContent = "Usuario no encontrado";
    document.getElementById('pointAw').textContent = "Puntos: -";
    document.getElementById('puestAw').textContent = "Puesto: ##";
}
