let kiwiUser;
if (sessionStorage.getItem('activeUser')){
    kiwiUser=JSON.stringify(sessionStorage.getItem('activeUser'));
}else{
    window.location.href = "pages/kiwiLogIn.html";
}

// Manejo del botón de redirección al inicio
if (document.getElementById("kiwiSiteBut")) {
    document.getElementById("kiwiSiteBut").addEventListener('click', () => {
        location.href = ""; // Redirigir a la página principal (ruta vacía)
    });
}

// Manejo del botón de redirección hacia atrás
if (document.getElementById("kiwiSiteBack")) {
    document.getElementById("kiwiSiteBack").addEventListener('click', () => {
        location.href = "../index.html"; // Redirigir hacia atrás a la página de inicio
    });
}

// Manejo del botón de redirección a KiwiAwards
if (document.getElementById("kiwiAwardsBut")) {
    document.getElementById("kiwiAwardsBut").addEventListener('click', () => {
        location.href = "pages/kiwiAwards.html"; // Redirigir a la página KiwiNews
    });
}

// Manejo del botón de redirección a KiwiNews
if (document.getElementById("kiwiNewsBut")) {
    document.getElementById("kiwiNewsBut").addEventListener('click', () => {
        location.href = "pages/kiwiNews.html"; // Redirigir a la página KiwiNews
    });
}

if (document.getElementById("kiwiProfileBut")) {
    document.getElementById("kiwiProfileBut").addEventListener('click', () => {
        location.href = "pages/kiwiProfile.html"; // Redirigir a la página KiwiNews
    });
}

// Manejo de la navegación entre articleNews y articleNew
if (document.querySelectorAll(".new")) {
    document.querySelectorAll(".new").forEach(element => {
        element.addEventListener('click', () => {
            document.getElementById("articleNews").style.display = "none"; // Ocultar articleNews
            document.getElementById("articleNew").style.display = "flex"; // Mostrar articleNew
        });
    });
}

// Manejo del botón de retroceso en KiwiNews
if (document.getElementById("newsBack")) {
    document.getElementById("newsBack").addEventListener('click', () => {
        document.getElementById("articleNews").style.display = "flex"; // Mostrar articleNews
        document.getElementById("articleNew").style.display = "none"; // Ocultar articleNew
    });
}

// Cargar datos desde newsData.json al cargar la página

document.addEventListener("DOMContentLoaded", () => {
    fetch('../json/newsData.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Verificar si data.articles es un array
            if (!Array.isArray(data.articles)) {
                throw new Error('Articles data is not an array');
            }
            displayData(data.articles); // Llamar a la función para mostrar los datos
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
});

// Función para mostrar datos en articleNews
function displayData(articles) {
    if(document.getElementById("articleNews")){
        const articleNews = document.getElementById("articleNews");
        articleNews.innerHTML = '';

        for (let i = 0; i < articles.length; i++) {
            const article = articles[i];
            const aside = document.createElement('aside');
            aside.classList.add('new');
            aside.id = `aside-${i}`; // Asignar ID único a cada aside
            aside.textContent = article.name; // Usar el nombre del artículo como contenido del aside

            // Agregar evento click a cada aside
            aside.addEventListener('click', () => {
                document.getElementById("articleNews").style.display = "none";
                document.getElementById("articleNew").style.display = "flex";
                document.getElementById("titleNewContent").textContent = article.name;
                document.getElementById("titleNewContent").style.textTransform = "uppercase";
                document.getElementById("pNewContent").textContent = article.p;
                document.getElementById("imgNewContent").src = article.img;
                document.getElementById("updateDate").textContent = article.date;
            });

            articleNews.appendChild(aside);
        }
    }
}
