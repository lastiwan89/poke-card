import getPokeName from "@/app/libs/getPokeName";
import { PokemonDetail } from "@/types";
import Image from "next/image";
import Link from "next/link";

const colors = {
  grass: "bg-green-500",
  fire: "bg-red-500",
  poison: "bg-purple-500",
  flying: "bg-sky-500",
  water: "bg-blue-500",
  bug: "bg-lime-500",
  normal: "bg-amber-500",
  electric: "bg-yellow-400",
  ground: "bg-yellow-700",
  fairy: "bg-red-300",
  ghost: "bg-purple-700",
  psychic: "bg-red-400",
  steel: "bg-gray-300",
  dark: "bg-gray-500",
  fighting: "bg-red-700",
  ice: "bg-sky-300",
  rock: "bg-orange-800",
  dragon: "bg-blue-700",
};

export default async function PokemonName({
  params: { name },
}: {
  params: { name: string };
}) {
  const data: PokemonDetail = await getPokeName(name);
  const ability = data.abilities;
  const type = data.types;
  const colorType = type[0].type.name;

  if (colorType === "grass") {
    colors.grass;
  }
  if (colorType === "fire") {
    colors.fire;
  }
  if (colorType === "poison") {
    colors.poison;
  }
  if (colorType === "flying") {
    colors.flying;
  }
  if (colorType === "water") {
    colors.water;
  }
  if (colorType === "bug") {
    colors.bug;
  }
  if (colorType === "normal") {
    colors.normal;
  }
  if (colorType === "electric") {
    colors.electric;
  }
  if (colorType === "ground") {
    colors.ground;
  }
  if (colorType === "fairy") {
    colors.fairy;
  }
  if (colorType === "ghost") {
    colors.ghost;
  }
  if (colorType === "psychic") {
    colors.psychic;
  }
  if (colorType === "steel") {
    colors.steel;
  }
  if (colorType === "dark") {
    colors.dark;
  }
  if (colorType === "fighting") {
    colors.fighting;
  }
  if (colorType === "ice") {
    colors.ice;
  }
  if (colorType === "rock") {
    colors.rock;
  }
  if (colorType === "dragon") {
    colors.dragon;
  }

  return (
    <div className="min-w-full flex flex-col justify-center items-center gap-8 p-20">
      <h1 className="text-5xl font-black text-blue-400">Pokemon Card</h1>
      <div
        className={`${colors[colorType]} flex flex-col rounded-xl p-8 min-w-[400px]`}
      >
        <Image
          className="mx-auto"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`}
          width={200}
          height={200}
          alt={`${data.name} images`}
        />
        <div className="flex flex-col gap-2 mb-2">
          <p className="font-semibold text-2xl">#{data.id}</p>
          <p className="text-4xl font-bold capitalize text-white">
            {data.name}
          </p>
        </div>
        <div className="flex gap-4">
          {ability.map((item, index) => (
            <p className="text-xl" key={index}>
              {item.ability.name}
            </p>
          ))}
        </div>
      </div>
      <Link
        className="uppercase px-4 py-2 rounded-lg bg-blue-400 hover:opacity-70"
        href="/pokemon"
      >
        pokemon list
      </Link>
    </div>
  );
}

// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png
