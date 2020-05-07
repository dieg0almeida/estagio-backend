const express = require('express');
const routes = express.Router();

const addFamilyInfo = require('./addFamilyInfo');
const familyInfo = require('./familyInfo');
const familyHealthInfo = require('./familyHealthInfo');
const familyMembers = require('./familyMembers');
const owners = require('./owners');
const propertyInfo = require('./propertyInfo');
const socialGovernmentPrograms = require('./socialGovernmentPrograms');
const user = require('./user');
const session = require('./session');

routes.use('/addfamilyinfo', addFamilyInfo);
routes.use('/familyinfo', familyInfo);
routes.use('/familyHealthInfo', familyHealthInfo);
routes.use('/familyMembers', familyMembers);
routes.use('/propertyInfo', propertyInfo);
routes.use('/socialGovernmentPrograms', socialGovernmentPrograms);
routes.use('/admin', user);
routes.use('/', session);

/* === SESSION --- */








routes.use('/owners', owners);


module.exports = routes;