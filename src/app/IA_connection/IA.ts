import { error } from "console";

const axios = require('axios');
const url = 'http://localhost:3000/'; //chequear si esta bien

axios.get('https://fastapi-example-endl.onrender.com/', {  
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response:unknown) {
    console.log(response);
  })
  .catch(function (error:unknown) {
    console.log(error);
  });

  // Declaración de CancerMamaData (sustituye los datos según corresponda)
const CancerMamaData = {
  patientId: 123,
  testDate: new Date(),
  // Otros datos relevantes para la espirometría
};

try {
  const obstruction = async() => await axios.post("direccion del server", CancerMamaData)
      .then((res:any) => {
          if (res.data || res.data.result == undefined) {
              throw new Error("Respuesta de servidor incorrecta para obstrucción");
          }
          return res.data.number
      })
      .catch((err: unknown) => {
          throw new Error("Error al analizar la obstrucción: " + err);
      });


  // Usar los resultados de obstruction y restriction aquí
  console.log("Obstrucción:", obstruction);

} catch (error) {
  console.error("Se produjo un error durante la solicitud:", error);
  // Manejar el error de manera apropiada, por ejemplo, enviarlo a un servicio de logs
}

 
  