const cards = document.querySelectorAll(".card");

const audios = document.querySelectorAll(".audioMoto");

cards.forEach((card,index) => {

    card.addEventListener("click", () => {

        audios.forEach(audio => {

            audio.pause();

            audio.currentTime = 0;

        });

        if(audios[index]){

            audios[index].play();

        }

        card.style.transform = "scale(1.05)";

        setTimeout(() => {

            card.style.transform = "scale(1)";

        }, 200);

    });

});

function recomendarMoto(){

    let uso = document.getElementById("uso").value;

    let cilindraje = document.getElementById("cilindraje").value;

    let marca = document.getElementById("marca").value;

    let resultado = document.getElementById("resultado");

    if(uso == "" || cilindraje == "" || marca == ""){

        resultado.innerHTML = "⚠ Completa todas las opciones";

        return;

    }

    let recomendacion = "";

    if(uso == "ciudad"){
        recomendacion = "🏍 Recomendamos la Pulsar NS200.";
    }

    if(uso == "viajes"){
        recomendacion = "🌍 Recomendamos la Yamaha MT-09.";
    }

    if(uso == "velocidad"){
        recomendacion = "🔥 Recomendamos la BMW S1000RR.";
    }

    if(uso == "trabajo"){
        recomendacion = "💼 Recomendamos la Honda CB125F.";
    }

    if(uso == "adventure"){
        recomendacion = "🏔 Recomendamos la Kawasaki Adventure.";
    }

    resultado.innerHTML = `

        <h2>Resultado personalizado</h2>

        <br>

        <p><strong>Uso:</strong> ${uso}</p>

        <p><strong>Cilindraje:</strong> ${cilindraje}cc</p>

        <p><strong>Marca:</strong> ${marca}</p>

        <br>

        <h3>${recomendacion}</h3>

    `;

}