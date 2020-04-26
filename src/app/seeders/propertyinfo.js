const faker = require('faker');
faker.locale = "pt_BR";

module.exports = {
    generate() {
        const property = {
            owner_id: "1",
            construction: faker.random.word(),
            finish: faker.name.firstName(),
            drinking_water: faker.name.firstName(),
            sewage: faker.name.firstName(),
            electric_power: faker.name.firstName(),
            trash_destiny: faker.random.words(),
            property_type: faker.random.words(),
            lot_condition: faker.random.word(),
            lot_occupacy_number: faker.random.number(),
            has_another_property: faker.random.boolean(),
            has_iptu: faker.random.boolean(),
            iptu_holder: faker.commerce.price(),
            property_documentation: faker.random.words()
        }
        return property;
    }
}
