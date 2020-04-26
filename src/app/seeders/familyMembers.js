const faker = require('faker');
faker.locale = 'pt_BR';

module.exports = {
  generate() {
    return {
      owner_id: '1',
      name: faker.name.findName(),
      age: faker.random.number() % 128,
      scholarity: faker.name.firstName(),
      occupacy: faker.name.jobType(),
      earning: faker.random.number(),
      relationship: faker.name.suffix(),
    }
  }
}
