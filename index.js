const { nextISSTimesForMyLocation } = require('./iss');


// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work! , error");
//     return;
//   }

//   console.log('It worked! Returned IP:', ip);
// });

// fetchCoordsByIP('104.163.151.70', (error, coords) => {
//   if (error) {
//     console.log(error);
//     return;
//   }
//   console.log(coords);
// });


// fetchISSFlyOverTimes( { latitude: '45.52470' , longitude: '-73.59530' }, (error, times) => {
//   if (error) {
//     console.log(error);
//     return;
//   }
//   console.log(times);
// });

nextISSTimesForMyLocation( (error, passTimes) => {
  if (error)
    return console.log("It didn't work! , error");
  printPassTimes(passTimes);
});


const printPassTimes = function(passTimes) {
  for (let time of passTimes) {
    let datetime = new Date(0);
    datetime.setUTCSeconds(time.risetime);
    console.log(`Next pass at ${datetime.toString()} for ${time.duration} seconds!`)
  }
}




