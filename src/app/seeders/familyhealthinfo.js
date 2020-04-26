const faker = require('faker');
faker.locale = "pt_BR";

module.exports = {
    generate() {
        const healthinfo = {
            owner_id: "1",
            family_members_count: faker.random.number(),
            sickness: faker.name.firstName(),
            has_death_in_last_two_years: faker.random.boolean(),
            deaths_two_years_cause: faker.name.firstName(),
            has_disabled_people_members: faker.random.boolean(),
            deficiencies: faker.random.words(),
            has_old_people: faker.random.boolean(),
            old_people_count: faker.random.number(),
            health_add_info: faker.random.words()
        }
        return healthinfo;
    }
}