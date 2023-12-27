import { Pokemon, PokemonLists } from "@/types";
import getPokemon from "../libs/getPokemon";
import Link from "next/link";

export default async function Pokemon() {
  const data: PokemonLists = await getPokemon();
  const results: Pokemon[] = data.results;
  return (
    <div className="flex min-w-full flex-col items-center justify-center gap-8 p-8">
      <h1 className="text-center text-5xl font-black capitalize text-blue-400">
        <span>Pokemon Finder</span>
      </h1>

      <div className="mx-auto grid grid-cols-2 gap-4 px-2 py-8 md:grid-cols-3 lg:grid-cols-4">
        {results.map((pokemon) => (
          <Link
            className="rounded-md border-2 border-white bg-blue-400 px-4 py-2 text-center font-medium uppercase text-slate-200"
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
