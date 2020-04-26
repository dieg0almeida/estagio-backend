const faker = require('faker');
faker.locale = "pt_BR";
AddFamilyInfo = require('../models/AddFamilyInfo');

async function createaddfamilyinfo(){ 
    let addfamiliesinfo = []; 
 

    while (addfamiliesinfo.length < 10){
        addfamiliesinfo.push({
            
            owner_id: faker.random.number(),
            has_knowledge_community_members : faker.random.boolean(),
            has_associate_community_meeting : faker.random.boolean(),
            work_community_priorities  : faker.random.words(),
            has_socail_government_programs: faker.random.boolean()
        
        });
        const addfamilyinfoPromise = addfamiliesinfo.map(addfamiliesinfo => AddFamilyInfo.create(addfamiliesinfo));

        await Promise.all(addfamilyinfoPromise);
    }
    
}
createaddfamilyinfo();

