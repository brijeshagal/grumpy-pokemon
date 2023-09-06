import pokemon from "pokemontcgsdk";

export async function getPokemon(id) {
  id = id || "base-14";
  try {
    const res = await pokemon.card.find(id);
    console.log(res);
  } catch (e) {
    console.log(e);
  }
}
export async function getXPokemon(x, ctr) {
  ctr = ctr || 250;
  x = x || "pikachu";
  try {
    console.log(x);
    const res = await pokemon.card.where({
      q: `name:pikachu set.name:Base id:base1*`,
    });
    console.log(res);
  } catch (e) {
    console.log(e);
  }
}

export async function getAllXPokemon(x) {
  x = x || "pikachu";
  try {
    console.log(x);
    const res = await pokemon.card.all({
      q: `name:${x} set.name:Base id:base1*`,
    });
    console.log(res);
  } catch (e) {
    console.log(e);
  }
}
