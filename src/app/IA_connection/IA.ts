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
  

  