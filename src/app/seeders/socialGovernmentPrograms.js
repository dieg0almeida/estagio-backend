const faker = require('faker');
const SocialGovernmentPrograms = require('../models/SocialGovernmentPrograms');

faker.locale = 'pt_BR';

async function createSocialGovernmentPrograms() {
  let socialGovernmentPrograms = [];

  while (socialGovernmentPrograms.length < 10) {
    socialGovernmentPrograms.push({
      owner_id: '1',
      name: faker.name.jobArea(),
      earn: faker.random.number(),
    });
  }

  const socialGovernmentProgramsPromise = socialGovernmentPrograms.map(socialGovernmentProgram => SocialGovernmentPrograms.create(socialGovernmentProgram));
  
  await Promise.all(socialGovernmentProgramsPromise);
}

createSocialGovernmentPrograms();
