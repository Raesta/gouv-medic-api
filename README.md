gouv-medic-api
======

[![NPM](https://nodei.co/npm/gouv-medic-api.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/gouv-medic-api/)

[![npm version](https://badge.fury.io/js/gouv-medic-api.svg)](https://badge.fury.io/js/gouv-medic-api)

A Node wrapper for the [medic api](https://api.gouv.fr/api/medicapi.html).
---

### Installation
```javascript
$ npm install gouv-medic-api
```
or
```javascript
$ npm install git://github.com/Raesta/gouv-medic-api.git
```

### Example
```javascript
var MedicAPI = require('gouv-medic-api');

var Medic = new MedicAPI();

console.log(Medic.apiUrl);

Medic.getByName('doliprane', function(err, results) {
  console.log(err, results);
});
```
