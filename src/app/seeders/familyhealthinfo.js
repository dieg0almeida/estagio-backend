const faker = require('faker');
const FamilyHealthInfo = require('../models/FamilyHealthInfo');
faker.locale = "pt_BR";

const option = { min: 1, max: 15, precision: 1 };

async function createhealthinfo() {
    let healthinfo = [];

    while (healthinfo.length < 10) {
        healthinfo.push({

            owner_id: "1",
            family_members_count: faker.random.number(option),
            sickness: faker.name.findName(),
            has_death_in_last_two_years: faker.random.boolean(),
            deaths_two_years_cause: faker.name.firstName(),
            has_disabled_people_members: faker.random.boolean(),
            deficiencies: faker.random.words(),
            has_old_people: faker.random.boolean(),
            old_people_count: faker.random.number(option),
            health_add_info: faker.random.words()
        });
    }

    const healthinfoPromise = healthinfo.map(healthinfo => FamilyHealthInfo.create(healthinfo));

    await Promise.all(healthinfoPromise);
}

createhealthinfo();
