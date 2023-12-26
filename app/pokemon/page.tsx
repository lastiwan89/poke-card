import { Pokemon, PokemonLists } from "@/types";
import getPokemon from "../libs/getPokemon";
import Link from "next/link";

export default async function Pokemon() {
  const data: PokemonLists = await getPokemon();
  const results: Pokemon[] = data.results;
  return (
    <div className="min-w-full flex flex-col justify-center items-center gap-8 p-8">
      <h1 className="text-5xl uppercase font-black text-blue-400 text-center">
        {/* 米田 と ポケモン */}Pokemon´ Viewer
      </h1>

      <div className="grid grid-cols-4 mx-auto gap-4 py-8 px-20">
        {results.map((pokemon) => (
          <Link
            className="text-center px-8 py-3 uppercase font-medium bg-blue-400 border-2 border-white rounded-md"
            href={`/pokemon/${pokemon.name}`}
            key={pokemon.name}
          >
            {pokemon.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
