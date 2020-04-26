const faker = require('faker');
const FamilyMember = require('../models/FamilyMembers');

faker.locale = 'pt_BR';

async function createFamilyMembers() {
    let familyMembers = [];

    while (familyMembers.length < 10) {
        familyMembers.push({
            owner_id: '1',
            name: faker.name.findName(),
            age: faker.random.number() % 128,
            scholarity: faker.name.firstName(),
            occupacy: faker.name.jobType(),
            earning: faker.random.number(),
            relationship: faker.name.suffix(),
        });
    }

    const familyMembersPromise = familyMembers.map(familyMember => FamilyMember.create(familyMember));

    await Promise.all(familyMembersPromise);
}

createFamilyMembers();
