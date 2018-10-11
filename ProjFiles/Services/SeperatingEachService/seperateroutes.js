var express = require('express');
//var movieCtrl = require('./onthegoinfo');
var serviceProvideCtrl = require('./serviceproviders');
var addressServiceCtrl = require('./addressService');
//var addressServiceCtrl = require('../addressService.js');

var router = express.Router();

// router.route('/movie').get(movieCtrl.getMovie);
// router.route('/movie').post(movieCtrl.postMovie);
// router.route('/movies').get(movieCtrl.getMovies);

router.route('/GetLocationsByUserLocation').post(serviceProvideCtrl.GetLocationsByUserLocation);
router.route('/GetAllServiceProviders').get(serviceProvideCtrl.GetAllServiceProviders);

//,,,
//,,,
//
router.route('/GetAllStates').get(addressServiceCtrl.GetAllStates);
router.route('/GetDistrictsByStateName').post(addressServiceCtrl.GetDistrictsByStateName);router.route('/GetLocationsByUserLocation').post(serviceProvideCtrl.GetLocationsByUserLocation);
router.route('/GetMandalsByDistrict').post(addressServiceCtrl.GetMandalsByDistrict);
router.route('/GetVillagesByDistrict').post(addressServiceCtrl.GetVillagesByDistrict);
router.route('/GetVillagesByMandal').post(addressServiceCtrl.GetVillagesByMandal);
router.route('/GetLocationsByUserLocation').post(addressServiceCtrl.GetLocationsByUserLocation);
router.route('/AddServiceLocations').post(addressServiceCtrl.AddServiceLocations);
router.route('/UserBasicLocationsData').get(addressServiceCtrl.UserBasicLocationsData);

module.exports = router;