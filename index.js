var request = require('request');
var apiUrl = 'https://medicaments.api.gouv.fr/api/';

function Medic() {
  this.apiUrl = apiUrl;
  this.request = req;
}

function req(method, apiUrl, data, callback) {
  var options = {};
  options.method = method;
  options.url = apiUrl;
  options.headers = { 'Content-Type': 'application/json' };
  request(options, function (error, response, body) {
    if (error) return callback(null, JSON.parse(error));
    switch (response.statusCode) {
      case 200:
        return callback(null, JSON.parse(body));
        break;
      case 400:
        return callback(JSON.parse(body));
        break;
      case 404:
        return callback(JSON.parse(body));
        break;
      case 500:
        return callback(JSON.parse(body));
        break;
    }
  });
}

Medic.prototype.getByCis = function(cis, callback) {
  if (!cis) return callback('MISSING_PARAMETERS');
  var url = apiUrl + 'medicaments/' + cis;
  req('GET', url, null, function(error, result) {
    if (error) return callback(error);
    else return callback(null, result);
  });
}

Medic.prototype.getByName = function(name, callback) {
  if (!name) return callback('MISSING_PARAMETERS');
  var url = apiUrl + 'medicaments/?nom=' + name;
  req('GET', url, null, function(error, result) {
    if (error) return callback(error);
    else return callback(null, result);
  });
}

module.exports = Medic;
