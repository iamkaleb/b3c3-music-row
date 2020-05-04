const jumpStopRecords = [];
const chattenRecords = [];
const polarRecords = [];

const createFunkArtist = (name, age) => {
    return {
        artistName: name,
        artistAge: age,
        genre: "funk"
    }
}

const createRapArtist = (name, age) => {
    return {
        artistName: name,
        artistAge: age,
        genre: "rap"
    }
}

const createCountryArtist = (name, age) => {
    return {
        artistName: name,
        artistAge: age,
        genre: "country"
    }
}

const createBluegrassArtist = (name, age) => {
    return {
        artistName: name,
        artistAge: age,
        genre: "bluegrass"
    }
}

const createPopArtist = (name, age) => {
    return {
        artistName: name,
        artistAge: age,
        genre: "pop"
    }
}

const bruce = createCountryArtist("Bruce Atikins", 23)
const jensen = createPopArtist("Jenses Brown", 20)
const dre = createFunkArtist("Dre Funkz", 25);
const dusta = createRapArtist("Dusta Grimes", 21);
const bart = createBluegrassArtist("Bartholomew Danielson", 23);
const avilee = createCountryArtist("Avilee Kinkaid", 22);
const austin = createPopArtist("Austin Kinkaid", 22);
const loyonce = createRapArtist("Loyonce Branis", 27);

chattenRecords.push(bruce)
polarRecords.push(jensen)
jumpStopRecords.push(dre)
jumpStopRecords.push(dusta)
chattenRecords.push(bart)
chattenRecords.push(avilee)
polarRecords.push(austin)
jumpStopRecords.push(loyonce)


console.log(chattenRecords)
console.log(polarRecords)
console.log(jumpStopRecords)