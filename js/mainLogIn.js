let getInfoBut = document.getElementById("getInfo");

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
            "name": "Chia",
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
            "name": "Lautaro",
            "pass": "Latr",
            "pts": "174,17",
            "order": "10"
        },
        {
            "name": "FranBa",
            "pass": "aEma",
            "pts": "112,92",
            "order": "11"
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
        getInfo();
    });
}
