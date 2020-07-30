const request = require('request-promise-native');

const fetchMyIP = function() {
  return request("https://api.ipify.org?format=json");
};

const fetchCoordsByIP = function(body) {
  const ip = JSON.parse(body).ip;
  return request(`https://ipvigilante.com/${ip}`);
}

const fetchISSFlyOverTimes = function(body) {
  const {latitude, longitude} = JSON.parse(body).data;
  return request(`http://api.open-notify.org/iss-pass.json?lat=${latitude}&lon=${longitude}`);
}

const nextISSTimesForMyLocation = function() {
return fetchMyIP()
  .then(fetchCoordsByIP)
  .then(fetchISSFlyOverTimes)
  .then( (data) => {
    const { response } = JSON.parse(data);
    return response;
  });
};


const printPassTimes = function(passTimes) {
  for (let time of passTimes) {
    let datetime = new Date(0);
    datetime.setUTCSeconds(time.risetime);
    console.log(`Next pass at ${datetime.toString()} for ${time.duration} seconds!`)
  }
};

module.exports = {
  nextISSTimesForMyLocation,
  printPassTimes
}