const Owner = require('../models/Owner');
const faker = require('faker');

faker.locale = 'pt_BR';

async function createOwners(){
    let owners = [];

    while( owners.length < 10){
        owners.push({
            name: faker.name.firstName(), 
            mother_name: faker.name.firstNameFemale(), 
            father_name: faker.name.firstNameMale(), 
            rg: faker.random.number(99999999), 
            rg_expedition: faker.lorem.words(4), 
            cpf: faker.random.number(99999999), 
            birth: faker.date.past(), 
            nationality: faker.lorem.words(4), 
            marital_status: faker.lorem.words(4), 
            marital_property_systems: faker.lorem.words(4), 
            ocupacy_situation: faker.lorem.words(4), 
            job: faker.name.jobTitle(), 
            literate: true, 
            company_job: faker.company.companyName(), 
            clt: true, 
            earning: faker.random.number(999999), 
            address: faker.address.streetName(), 
            square: faker.address.streetName(), 
            lot: faker.address.streetName(), 
            landmark: faker.address.streetName(), 
            district: faker.address.streetName(), 
            city: faker.address.city, 
            cell_phone_number: faker.phone.phoneNumber(), 
            phone_number: faker.phone.phoneNumber()
        });
    }

    const ownersPromise = owners.map( owner => Owner.create(owner));

    await Promise.all(ownersPromise);
} 

createOwners();