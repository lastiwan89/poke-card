export default async function getPokemon() {
  const res = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=52&offset=0"
  );

  if (!res.ok) {
    throw new Error("failed to get first result");
  }

  return res.json();
}
