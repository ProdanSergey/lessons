const faker = window.Faker;
const uuid = window.uuid.v4;

const capitalize = (w) => w[0].toUpperCase() + w.slice(1);

const Artist = () => {
	return {
		id: uuid(),
		firstName: faker.Name.firstName(),
		lastName: faker.Name.lastName(),
		rating: `${faker.Helpers.randomNumber(10)}.${faker.Helpers.randomNumber(
			9
		)}`,
	};
};

const Album = () => {
	return {
		id: uuid(),
		title: faker.Lorem.words(2).map(capitalize).join(" "),
		url: `https://${faker.Internet.domainName()}/${faker.Internet.domainWord()}`,
		genre: faker.Lorem.words(1).map(capitalize).toString(),
	};
};

const Track = () => {
	return {
		id: uuid(),
		title: faker.Lorem.words(3).map(capitalize).join(" "),
		duration: `${faker.Helpers.randomNumber(6)}.${faker.Helpers.randomNumber(
			9
		)}`,
	};
};

const Comment = () => {
	return {
		id: uuid(),
		text: faker.Lorem.paragraphs(3),
		author: faker.Name.findName(),
	};
};
