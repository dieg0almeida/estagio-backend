const faker = require('faker');
const Property = require('../models/PropertyInfo');
faker.locale = "pt_BR";
const option = { min: 1, max: 2000, precision: 1 };

async function createProperty() {
    let property = [];

    while (property.length < 10) {
        property.push({
            owner_id: "1",
            construction: faker.random.word(),
            finish: faker.commerce.productMaterial(),
            drinking_water: faker.company.companyName(),
            sewage: faker.company.companyName(),
            electric_power: faker.company.companyName(),
            trash_destiny: faker.address.streetName(),
            property_type: faker.random.words(),
            lot_condition: faker.random.word(),
            lot_occupacy_number: faker.random.number(option),
            has_another_property: faker.random.boolean(),
            has_iptu: faker.random.boolean(),
            iptu_holder: faker.commerce.price(),
            property_documentation: faker.random.words()
        });
    }

    const propertyPromise = property.map(property => Property.create(property));

    await Promise.all(propertyPromise);
}

createProperty();
