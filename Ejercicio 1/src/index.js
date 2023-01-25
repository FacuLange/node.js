const express = require('express')
const app = express()


console.log("Puerto del server 3000")


/// Ejercicio 3
///Hacer un EndPoint(.Post) "/Saludo" donde reciba un nombre por parametro, como sea mas comodo. Debe devolver
///"Hola, como estas", concatenado al nombre enviado por parametro.
app.post('/saludo', (req, res) =>  {
    console.log(req.query.name)
    res.send(`Hola ${req.query.name} como estas`)
})

app.listen(3000);




//EJERCICIO 2:
//Hacer un EndPoint(.Get) /User que devuelva un "Json" de usuarios.

app.get('/user', (req, res) => {
    res.json({
        status:1,
        "Single": [
            {
          "Name": "Facundo",
          "Lastname": "Lange",
          "Age": "20",
          "City": "Buenos Aires",
          },
          {
          "Name": "Milagros",
          "Lastname": "Lange",
          "Age": "21",
          "City": "Buenos Aires"
          },
          {
            "Name": "Tomas",
            "Lastname": "Turchiaro",
            "Age": "7",
            "City": "Buenos Aires",
          },
          {
            "Name": "Gabriela",
            "Lastname": "Villalva",
            "Age": "43",
            "City": "Buenos Aires",
          },
          {
          "Name": "Oscar",
          "Lastname": "Turchiaro",
          "Age": "32",
          "City": "Buenos Aires",
          },
          {
          "Name": "Soledad",
          "Lastname": "Villalva",
          "Age": "39",
          "City": "Buenos Aires",
          },
          {
          "Name": "Mauro",
          "Lastname": "Panella",
          "Age": "39",
          "City": "Buenos Aires",
          },
          {
          "Name": "Mara",
          "Lastname": "Manias",
          "Age": "16",
          "City": "BuenosAires",
          },
          {
          "Name": "Sofia",
          "Lastname": "Panella",
          "Age": "7",
          "City": "Buenos Aires",
          },
          {
          "Name": "Clowi",
          "Lastname": "Panella",
          "Age": "7",
          "City": "Buenos Aires",
  }]
    })
}       
      )


 








//EJERCICIO 1
//Hacer un (.Get) "/Mi_Familia" debe devolver un HTML, donde en el body esté la lista familiar mas cercana.
//Usando <h1>(Nombre)<h1>, <h2>(Apellido)<h2>, <h3>Parentesco<h3>

app.get("/Mi_Familia", (req, res) => {
    return res.sendFile("./index.html" , 
    {root: __dirname}); 
    
})

console.log("Terminado")
