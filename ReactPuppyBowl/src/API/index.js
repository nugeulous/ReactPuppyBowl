export default async function GetPuppies() {
    try {
        const res = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-PT-SF/players");
        const playerOBjectsArray = await res.json();
        return playerOBjectsArray.data.players;
    } catch (err) {
        console.error(err);
    }
}

