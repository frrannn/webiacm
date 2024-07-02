import { error } from "console";

const axios = require('axios');
const url = ''; //chequear si esta bien

export async function postReq(body:string) {
  try{
    const response = await axios.post("https://fastapi-example-endl.onrender.com/upload-image", body).then((res:unknown) => {
      return response.data;
    })
  } catch(error:unknown){
    console.log(error)
    return 'error';
  }
}

  // Declaración de CancerMamaData (sustituye los datos según corresponda)
const CancerMamaData = {
  patientId: 123,
  testDate: new Date(),
  // Otros datos relevantes para la espirometría
};

 
  