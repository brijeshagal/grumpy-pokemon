export async function getPokemons(){
    const res = await axios.get('https://api.pokemontcg.io/v2/cards');
    console.log(res);
}