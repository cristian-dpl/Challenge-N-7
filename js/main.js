
    // punto 2
document.addEventListener('DOMContentLoaded', () =>{
    console.log("Contenido del DOM cargado");


    // punto 3
    const text = () =>{
        let area = document.getElementById("origen");
        area.value = "<p>Este contenido <strong>está listo</strong><br>para ser editado y pasarlo abajo.</p>"
    };
    text();


    // punto 4

    const clickText = document.getElementById('origen')
    const entradas = document.getElementsByTagName("input")
    const btn = document.getElementsByTagName("button" )[0]
        
        clickText.addEventListener ("click", (e) => {
            habilitar(entradas,btn)
        })

        const habilitar = (entradas, btn) => {
            for (let i = 0; i < entradas.length; i++) {
                entradas[i].disabled = false
            }
            btn.disabled = false
        
        };


    // punto 5

    const reemplazar = document.getElementById("btn-reemplazar");
    reemplazar.addEventListener('click', (e) =>{
        const origen = document.getElementById('origen');
        const destino = document.getElementById('destino');
        destino.innerText = origen.value;
        origen.value = ""
    })

    const btns = () =>{
       const botones = document.getElementsByClassName('btn-agregar');
        botones[0].addEventListener('click', agregar);
        botones[1].addEventListener('click', agregarcinco);
        botones[2].addEventListener('click', agregardiez);
        botones[3].addEventListener('click', agregarn);
    }
        

    const agregar = () =>{
        const origen = document.getElementById('origen');
        const destino = document.getElementById('destino');
        destino.innerText = origen.value;
    }
    
    const agregarcinco = () =>{
        const origen = document.getElementById('origen');
        const destino = document.getElementById('destino');
        for (let i = 0; i < 5; i++) {
        destino.innerText = destino.innerText + origen.value;
        }
    }

    const agregardiez = () =>{
        const origen = document.getElementById('origen');
        const destino = document.getElementById('destino');
        for (let i = 0; i < 10; i++) {
        destino.innerText = destino.innerText + origen.value;
        }
    }

    const agregarn = () =>{
        const numero = prompt("indique cantidad de veces");
        const origen = document.getElementById('origen');
        const destino = document.getElementById('destino');
        if (parseInt(numero)) {
            for (let i = 0; i < parseInt(numero); i++) {
             destino.innerHTML = destino.innerHTML + origen.value;

            }
        }else
        alert('No es un numero')
    }
    btns();


    // punto 6
    
    const dno = document.getElementById('destino');

    const vaciar = document.getElementsByClassName('btn-vaciar')[0];
    vaciar.addEventListener('click', () => {
        dno.innerText = ""
    });

    const convertirmayusculas = document.getElementsByClassName('btn-convertir-a-mayusculas')[0];
    convertirmayusculas.addEventListener('click', () => {
        dno.innerText = dno.innerText.toUpperCase();
        console.log(dno)
    });

    const convertirminusculas = document.getElementsByTagName('button')[0];
    convertirminusculas.addEventListener('click', () => {
        dno.innerText = dno.innerText.toLowerCase();
    });


    // punto 7

    const listado = document.getElementsByTagName('li');
    for (let i = 0; i < listado.length; i++) {
        const element = listado[i];
        element.innerHTML = `(OK). ${element.innerHTML}`    
    }
});



