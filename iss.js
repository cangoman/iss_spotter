const request = require('request');

/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
const fetchMyIP = function(callback) {
  const query = 'https://api.ipify.org?format=json';
  request(query, (error, response, body) => {
    //report errors
    if (error) {
      callback(error, null);
      return;
    }
    //check for 200 status code. if code is not 200, report it.
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    const ip =  JSON.parse(body).ip;
    callback(null, ip);
  });
};


const fetchCoordsByIP = function(ip, callback) {
  const error = "";
  const query = 'https://ipvigilante.com/' + ip;
  request(query, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
  
    //check for 200 status code. if code is not 200, report it.
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching coordinates for IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    const { latitude, longitude } = JSON.parse(body).data;
    callback(null, { latitude, longitude});

  });
};


module.exports = {
  fetchMyIP,
  fetchCoordsByIP
};