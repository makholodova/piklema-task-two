"use strict";
const url = 'https://petstore3.swagger.io/api/v3/pet/findByTags?tags=tag2';
async function fetchPets(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            console.error(`Ошибка сети: ${response.status}`);
            return [];
        }
        return await response.json();
    }
    catch (error) {
        console.error('Ошибка загрузки данных:', error);
        return [];
    }
}
async function main() {
    const pets = await fetchPets(url);
    console.log('Полученные данные:', pets);
}
main();
