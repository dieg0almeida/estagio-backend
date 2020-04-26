const faker = require('faker');
faker.locale = "pt_BR";
FamilyInfo = require('../models/FamilyInfo');
//module.exports = {
    
 //seed(req, res) {
async function createfamilyinfo(){ 
    let familiesinfo = []; 
 

    while (familiesinfo.length < 10){
        familiesinfo.push({
            owner_id: faker.random.number(10),
            origin_city: faker.address.city(),
            state: faker.address.stateAbbr(),
            city_residence_time: faker.random.number(),
            home_residence_time: faker.random.number()
        });
        const familyinfoPromise = familiesinfo.map(familiesinfo => FamilyInfo.create(familiesinfo));

        await Promise.all(familyinfoPromise);
    }
    
}
createfamilyinfo();

 
/*     
   for (let i = 0; i < 10; i++){
     const FamilyInfo = {
            owner_id: "1",
            origin_city: faker.address.city(),
            state: faker.address.stateAbbr(),
            city_residence_time: faker.random.number(),
            home_residence_time: faker.random.number()
          }

        Familiesinfo.push(FamilyInfo);
    
    for (Family of Familiesinfo) {
           Family = FamilyModel;
           Family.create(Family);
        }

 
     res.send('Dados enviados');
    }
    */
//}