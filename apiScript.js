  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js"
  import { getFirestore, addDoc, collection, doc, getDocs, query} from "https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js";
 
  const firebaseConfig = {
    apiKey: "AIzaSyDNghduZDS8Yyf9t5kc63CA4mtNVnRwRao",
    authDomain: "proyectotienda-1eb8b.firebaseapp.com",
    projectId: "proyectotienda-1eb8b",
    storageBucket: "proyectotienda-1eb8b.appspot.com",
    messagingSenderId: "331576361250",
    appId: "1:331576361250:web:4a30a1b56ebfc1ee1be57b"
  };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const dataFire= getFirestore(app)

  
  let ropa = await query(collection(dataFire, "ropa"))
  let ropaData = await getDocs(ropa)

  

  let arrStyle=[]


document.getElementById("urban").addEventListener("click", ()=>{
  let arrRopa=[]
    ropaData.forEach((doc) => {
      arrRopa.push(doc.data())  
    })
    let ropaFiltrada= arrRopa.filter((element)=>{
      return element.style == "Urban"
    })
    return arrStyle.push(ropaFiltrada)
})


document.getElementById("casual").addEventListener("click", ()=>{
  let arrRopa=[]
    ropaData.forEach((doc) => {
      arrRopa.push(doc.data())  
    })
    let ropaFiltrada= arrRopa.filter((element)=>{
      return element.style == "Casual"
    })
    return arrStyle.push(ropaFiltrada)
})

document.getElementById("punk").addEventListener("click", ()=>{
  let arrRopa=[]
    ropaData.forEach((doc) => {
      arrRopa.push(doc.data())  
    })
    let ropaFiltrada= arrRopa.filter((element)=>{
      return element.style == "Punk"
    })
    return arrStyle.push(ropaFiltrada)
})

document.getElementById("clasico").addEventListener("click", ()=>{
  let arrRopa=[]
    ropaData.forEach((doc) => {
      arrRopa.push(doc.data())  
    })
    let ropaFiltrada= arrRopa.filter((element)=>{
      return element.style == "Clasico"
    })
    return arrStyle.push(ropaFiltrada)
})



let arrBusqueda=[]
document.getElementById("rojo").addEventListener("click", ()=>{
    console.log(arrStyle)
    let ropaFiltrada= arrStyle[0].filter((element)=>{
      return element.color == "Rojo"
    })
    
    return arrBusqueda.push(ropaFiltrada)
})

document.getElementById("amarillo").addEventListener("click", ()=>{
  console.log(arrStyle)
  let ropaFiltrada= arrStyle[0].filter((element)=>{
    return element.color == "Amarillo"
  })
  
  return arrBusqueda.push(ropaFiltrada)
})

document.getElementById("morado").addEventListener("click", ()=>{
  console.log(arrStyle)
  let ropaFiltrada= arrStyle[0].filter((element)=>{
    return element.color == "Morado"
  })
  
  return arrBusqueda.push(ropaFiltrada)
})

document.getElementById("verde").addEventListener("click", ()=>{
  console.log(arrStyle)
  let ropaFiltrada= arrStyle[0].filter((element)=>{
    return element.color == "Verde"
  })
  
  return arrBusqueda.push(ropaFiltrada)
})

document.getElementById("azul").addEventListener("click", ()=>{
  console.log(arrStyle)
  let ropaFiltrada= arrStyle[0].filter((element)=>{
    return element.color == "Azul"
  })
  
  return arrBusqueda.push(ropaFiltrada)
})

document.getElementById("search").addEventListener("click", ()=>{
  let tresRandom=[]
  for (let i = 0; i<3; i++){
      tresRandom.push(arrBusqueda[0].splice(Math.floor(Math.random()* (arrBusqueda[0].length - 1)) ,1))
  }
  // document.body.removeChild("root")

// document.getElementById("root").removeChild("styles")
// document.getElementById("root").removeChild("colors")
// document.getElementById("root").removeChild("searchButton")
console.log(tresRandom)
document.getElementById("root").innerHTML=null
document.getElementById("root").innerHTML= `<div id="resultados"></div>`
for(let i=0;i<tresRandom.length;i++){
  const [{type,color,style}] = tresRandom[i]
  document.getElementById("resultados").innerHTML+= `
  <div id="resultado${i+1}">
  <h1>${type}</h1>
  <p>${color}</p>
  <p>${style}</p>
  </div>`

}})








  // const get3Random=()=>{
  //   let arrRopa=[]
  //   ropaData.forEach((doc) => {
  //     arrRopa.push(doc.data())  
  //   })
  //   console.log(arrRopa)
  //   let ropaFiltrada= arrRopa.filter((element)=>{
  //     return element.style == "Clásico"
  //   })
  //   console.log(ropaFiltrada)
  //   let ropaRandom=[]
  //   for (let i = 0; i<3; i++){
  //     ropaRandom.push(ropaFiltrada.splice(Math.floor(Math.random()* (ropaFiltrada.length - 1)) ,1))
      
  //   }
  //   console.log(ropaRandom)
  // }
  // get3Random()
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // await addDoc(collection(dataFire, "ropa"),{
  //   type: "Zapatos",
  //   color: "Rojo",
  //   style: "Urban",
  // });

  //  await addDoc(collection(dataFire, "ropa"),{
  //   type: "Zapatos",
  //   color: "Verde",
  //   style: "Urban",
  // });
  // await addDoc(collection(dataFire, "ropa"),{
  //     type: "Zapatos",
  //     color: "Amarillo",
  //     style: "Urban",
  //   });
  //   await addDoc(collection(dataFire, "ropa"),{
  //       type: "Zapatos",
  //       color: "Azul",
  //       style: "Urban",
  //     });
  //   await addDoc(collection(dataFire, "ropa"),{
  //   type: "Zapatos",
  //   color: "Morado",
  //   style: "Urban",
  // });

  // await addDoc(collection(dataFire, "ropa"),{
  //   type: "Zapatos",
  //   color: "Rojo",
  //   style: "Clásico",
  // });

  //  await addDoc(collection(dataFire, "ropa"),{
  //   type: "Zapatos",
  //   color: "Verde",
  //   style: "Clásico",
  // });
  // await addDoc(collection(dataFire, "ropa"),{
  //     type: "Zapatos",
  //     color: "Amarillo",
  //     style: "Clásico",
  //   });
  //   await addDoc(collection(dataFire, "ropa"),{
  //       type: "Zapatos",
  //       color: "Azul",
  //       style: "Clásico",
  //     });
  //   await addDoc(collection(dataFire, "ropa"),{
  //   type: "Zapatos",
  //   color: "Morado",
  //   style: "Clásico",
  // });



  // await addDoc(collection(dataFire, "ropa"),{
  //   type: "Zapatos",
  //   color: "Rojo",
  //   style: "Punk",
  // });

  //  await addDoc(collection(dataFire, "ropa"),{
  //   type: "Zapatos",
  //   color: "Verde",
  //   style: "Punk",
  // });
  // await addDoc(collection(dataFire, "ropa"),{
  //     type: "Zapatos",
  //     color: "Amarillo",
  //     style: "Punk",
  //   });
  //   await addDoc(collection(dataFire, "ropa"),{
  //       type: "Zapatos",
  //       color: "Azul",
  //       style: "Punk",
  //     });
  //   await addDoc(collection(dataFire, "ropa"),{
  //   type: "Zapatos",
  //   color: "Morado",
  //   style: "Punk",
  // });


  // await addDoc(collection(dataFire, "ropa"),{
  //   type: "Zapatos",
  //   color: "Rojo",
  //   style: "Casual",
  // });

  //  await addDoc(collection(dataFire, "ropa"),{
  //   type: "Zapatos",
  //   color: "Verde",
  //   style: "Casual",
  // });
  // await addDoc(collection(dataFire, "ropa"),{
  //     type: "Zapatos",
  //     color: "Amarillo",
  //     style: "Casual",
  //   });
  //   await addDoc(collection(dataFire, "ropa"),{
  //       type: "Zapatos",
  //       color: "Azul",
  //       style: "Casual",
  //     });
  //   await addDoc(collection(dataFire, "ropa"),{
  //   type: "Zapatos",
  //   color: "Morado",
  //   style: "Casual",
  // });

