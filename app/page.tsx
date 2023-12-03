import { Pokemon } from "@/types/PokeTypes";

async function getPokemon() {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=40`);

  if (!res.ok) {
    throw new Error("failed to get Pokemon data");
  }
  return res.json();
}
export default async function Home() {
  const data: Pokemon = await getPokemon();
  console.log(data);
  return (
    <div className="">
      <h3>{data.name}</h3>
    </div>
  );
}
