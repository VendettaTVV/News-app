const apiUrl = 'https://newsapi.org'

// async funkcia rabotaet s promos/obeschaniami
// promise eto object, kotoryi izmenitsa v budush4em
// U promise est 3 sostoyania: 1.Pending/ogidanii - iznachalmoe sostojanie! 2 fuulfilled/vypolnennyi - esli uda4no proshlo! 3 Rejected/otklonennyi - ecli proizoshla oshibka
// Promis nam nugny, 4tob prilogenie moglo dalche rabotat ne dogidayas otveta
//klu4evoe slovo await ispolzuetsa tolko v asybu func
//async vypolnjaetsa v nezavisimosti ot ostalnogo koda
//await preobragaet oject Promise v otvet ot zaprosa
export async function getEverything(data) {
    const params = new URLSearchParams({
        ...data,
        apiKey: process.env.REACT_APP_API_KEY,

    });
    return await fetch(`${apiUrl}/v2/everything?${params}`);
}