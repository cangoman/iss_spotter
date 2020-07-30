const { fetchMyIP, fetchCoordsByIP } = require('./iss');


// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work! , error");
//     return;
//   }

//   console.log('It worked! Returned IP:', ip);
// });

fetchCoordsByIP('104.163.151.70', (error, coords) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log(coords);
});