interface IPetDb {
	id: number,
	name: string,
	status: string
	category?: { id: number, name: string },
	photoUrls?: string[],
	tags?: { id: number, name: string }[],
}

const url = 'https://petstore3.swagger.io/api/v3/pet/findByTags?tags=tag2';

async function fetchPets(url: string): Promise<IPetDb[]> {
	try {
		const response = await fetch(url);
		if (!response.ok) {
			console.error(`Ошибка сети: ${response.status}`);
			return [];
		}
		return await response.json();
	} catch (error) {
		console.error('Ошибка загрузки данных:', error);
		return [];
	}
}

async function main(): Promise<void> {
	const pets: IPetDb[] = await fetchPets(url);
	console.log('Полученные данные:', pets);
}

main();