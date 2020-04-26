const express = require('express');
const routes = express.Router();

const addFamilyInfo = require('./addFamilyInfo');
const familyInfo = require('./familyInfo');
const familyHealthInfo = require('./familyHealthInfo');
const familyMembers = require('./familyMembers');
const owners = require('./owners');
const propertyInfo = require('./propertyInfo');
const socialGovernmentPrograms = require('./socialGovernmentPrograms');


routes.use('/addfamilyinfo', addFamilyInfo);
routes.use('/familyinfo', familyInfo);
routes.use('/familyHealthInfo', familyHealthInfo);
routes.use('/familyMembers', familyMembers);
routes.use('/propertyInfo', propertyInfo);
routes.use('/socialGovernmentPrograms', socialGovernmentPrograms);


routes.use('/owners', owners);


module.exports = routes;