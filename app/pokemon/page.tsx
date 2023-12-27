import { Pokemon, PokemonLists } from "@/types";
import getPokemon from "../libs/getPokemon";
import Link from "next/link";

export default async function Pokemon() {
  const data: PokemonLists = await getPokemon();
  const results: Pokemon[] = data.results;
  return (
    <div className="flex min-w-full flex-col items-center justify-center gap-8 p-8">
      <h1 className="text-center text-5xl font-black uppercase text-blue-400">
        {/* 米田 と ポケモン */}Pokemon´ Viewer
      </h1>

      <div className="mx-auto grid grid-cols-4 gap-4 px-20 py-8">
        {results.map((pokemon) => (
          <Link
            className="rounded-md border-2 border-white bg-blue-400 px-8 py-3 text-center font-medium uppercase"
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
