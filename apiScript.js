// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js';
import {
    getFirestore,
    addDoc,
    collection,
    doc,
    getDocs,
    query,
} from 'https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js';

const firebaseConfig = {
    apiKey: 'AIzaSyDNghduZDS8Yyf9t5kc63CA4mtNVnRwRao',
    authDomain: 'proyectotienda-1eb8b.firebaseapp.com',
    projectId: 'proyectotienda-1eb8b',
    storageBucket: 'proyectotienda-1eb8b.appspot.com',
    messagingSenderId: '331576361250',
    appId: '1:331576361250:web:4a30a1b56ebfc1ee1be57b',
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const dataFire = getFirestore(app);

let ropa = await query(collection(dataFire, 'ropa'));
let ropaData = await getDocs(ropa);

// Selection Style

let arrStyle = [];
document.getElementById('urban').addEventListener('click', () => {
    let arrRopa = [];
    ropaData.forEach(doc => {
        arrRopa.push(doc.data());
    });
    let ropaFiltrada = arrRopa.filter(element => {
        return element.style == 'Urban';
    });
    return (arrStyle = ropaFiltrada);
});

document.getElementById('casual').addEventListener('click', () => {
    let arrRopa = [];
    ropaData.forEach(doc => {
        arrRopa.push(doc.data());
    });
    let ropaFiltrada = arrRopa.filter(element => {
        return element.style == 'Casual';
    });
    return (arrStyle = ropaFiltrada);
});

document.getElementById('punk').addEventListener('click', () => {
    let arrRopa = [];
    ropaData.forEach(doc => {
        arrRopa.push(doc.data());
    });
    let ropaFiltrada = arrRopa.filter(element => {
        return element.style == 'Punk';
    });
    return (arrStyle = ropaFiltrada);
});

document.getElementById('clasico').addEventListener('click', () => {
    let arrRopa = [];
    ropaData.forEach(doc => {
        arrRopa.push(doc.data());
    });
    let ropaFiltrada = arrRopa.filter(element => {
        return element.style == 'Clásico';
    });
    return (arrStyle = ropaFiltrada);
});

//Selección de Color

let arrBusqueda = [];
document.getElementById('rojo').addEventListener('click', () => {
    if (arrStyle[0] == undefined) {
        return window.alert('Debes elegir un estilo primero');
    }
    let ropaFiltrada = arrStyle.filter(element => {
        return element.color == 'Rojo';
    });
    return (arrBusqueda = ropaFiltrada);
});

document.getElementById('amarillo').addEventListener('click', () => {
    if (arrStyle[0] == undefined) {
        return window.alert('Debes elegir un estilo primero');
    }
    let ropaFiltrada = arrStyle.filter(element => {
        return element.color == 'Amarillo';
    });
    return (arrBusqueda = ropaFiltrada);
});

document.getElementById('morado').addEventListener('click', () => {
    if (arrStyle[0] == undefined) {
        return window.alert('Debes elegir un estilo primero');
    }
    let ropaFiltrada = arrStyle.filter(element => {
        return element.color == 'Morado';
    });
    return (arrBusqueda = ropaFiltrada);
});

document.getElementById('verde').addEventListener('click', () => {
    if (arrStyle[0] == undefined) {
        return window.alert('Debes elegir un estilo primero');
    }
    let ropaFiltrada = arrStyle.filter(element => {
        return element.color == 'Verde';
    });
    return (arrBusqueda = ropaFiltrada);
});

document.getElementById('azul').addEventListener('click', () => {
    if (arrStyle[0] == undefined) {
        return window.alert('Debe elegir un estilo primero');
    }
    let ropaFiltrada = arrStyle.filter(element => {
        return element.color == 'Azul';
    });
    return (arrBusqueda = ropaFiltrada);
});

//Busqueda de prendas style+color

document.getElementById('search').addEventListener('click', () => {
    if (arrStyle[0] == undefined) {
        return alert('Debes elegir un color para la búsqueda detallada');
    }
    let tresRandom = [];
    for (let i = 0; i < 3; i++) {
        tresRandom.push(
            arrBusqueda.splice(
                Math.floor(Math.random() * (arrBusqueda[0].length - 1)),
                1
            )
        );
    }
    document.getElementById('root').innerHTML = null;
    document.getElementById('root').innerHTML = `<div id="resultados"></div>`;
    for (let i = 0; i < tresRandom.length; i++) {
        const [{ type, color, style }] = tresRandom[i];
        document.getElementById('resultados').innerHTML += `
    <div id="resultado${i + 1}">
    <h1>${type}</h1>
    <p>${color}</p>
    <p>${style}</p>
    </div>`;
    }
    document.getElementById('root').innerHTML += `
    <div id="buyOptions">
    <button type="button" id="buy">Comprar
    </button>
    <a id="newSearch" href="./form.html">Nueva Búsqueda
    </a>
    </div>`;
    document.getElementById('buy').addEventListener('click', () => {
        document.getElementById('root').innerHTML = null;
        document.getElementById('root').innerHTML = `
        <div>
        <h2>Compra realizada con exito.</h2>
        <p>Muchas gracias por comprar con nosotros, su pedido llegará en los próximos 10 días laborales</p>
        </div>
        <div>
        <a id="newSearch" href="./form.html">Nueva Búsqueda
        </a>
        </div>`;
    });
});

document.getElementById('randomColor').addEventListener('click', () => {
    if (arrStyle[0] == undefined) {
        return window.alert('Debes elegir un estilo primero');
    }
    let arrRopa = [];
    for (let i = 0; i < 3; i++) {
        arrRopa.push(
            arrStyle.splice(
                Math.floor(Math.random() * (arrStyle.length - 1)),
                1
            )
        );
    }
    document.getElementById('root').innerHTML = null;
    document.getElementById('root').innerHTML = `<div id="resultados"></div>`;
    for (let i = 0; i < arrRopa.length; i++) {
        const [{ type, color, style }] = arrRopa[i];
        document.getElementById('resultados').innerHTML += `
      <div id="resultado${i + 1}">
      <h1>${type}</h1>
      <p>${color}</p>
      <p>${style}</p>
      </div>`;
    }
    document.getElementById('root').innerHTML += `
    <div id="buyOptions">
    <button type="button" id="buy">Comprar
    </button>
    <a id="newSearch" href="./form.html">Nueva Búsqueda
    </a>
    </div>`;
    document.getElementById('buy').addEventListener('click', () => {
        document.getElementById('root').innerHTML = null;
        document.getElementById('root').innerHTML = `
    <div>
    <h2>Compra realizada con exito.</h2>
    <p>Muchas gracias por comprar con nosotros, su pedido llegará en los próximos 10 días laborales</p>
    </div>
    <div>
    <a id="newSearch" href="./form.html">Nueva Búsqueda
    </a>
    </div>`;
    });
});
