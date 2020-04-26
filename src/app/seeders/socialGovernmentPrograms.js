const faker = require('faker');
faker.locale = 'pt_BR';

module.exports = {
  generate() {
    return {
      owner_id: '1',
      name: faker.name.jobArea(),
      earn: faker.random.number(),
    }
  }
}
