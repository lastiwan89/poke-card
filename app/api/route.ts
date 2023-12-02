export async function getPokemonType(type: string) {
  const res = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
  if (!res.ok) {
    throw new Error("failed to get Pokemon type data");
  }
  return res.json();
}
