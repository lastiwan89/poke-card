import getPokeName from "@/app/libs/getPokeName";
import { PokemonDetail } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { Progress } from "@/components/ui/progress";

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

  let bgColor;
  if (colorType === "grass") {
    return (bgColor = colors.grass);
  }
  if (colorType === "fire") {
    return (bgColor = colors.fire);
  }
  if (colorType === "poison") {
    return (bgColor = colors.poison);
  }
  if (colorType === "flying") {
    return (bgColor = colors.flying);
  }
  if (colorType === "water") {
    return (bgColor = colors.water);
  }
  if (colorType === "bug") {
    return (bgColor = colors.bug);
  }
  if (colorType === "normal") {
    return (bgColor = colors.normal);
  }
  if (colorType === "electric") {
    return (bgColor = colors.electric);
  }
  if (colorType === "ground") {
    return (bgColor = colors.ground);
  }
  if (colorType === "fairy") {
    return (bgColor = colors.fairy);
  }
  if (colorType === "ghost") {
    return (bgColor = colors.ghost);
  }
  if (colorType === "psychic") {
    return (bgColor = colors.psychic);
  }
  if (colorType === "steel") {
    return (bgColor = colors.steel);
  }
  if (colorType === "dark") {
    return (bgColor = colors.dark);
  }
  if (colorType === "fighting") {
    return (bgColor = colors.fighting);
  }
  if (colorType === "ice") {
    return (bgColor = colors.ice);
  }
  if (colorType === "rock") {
    return (bgColor = colors.rock);
  }
  if (colorType === "dragon") {
    return (bgColor = colors.dragon);
  }

  return (
    <div className="flex min-w-full flex-col items-center justify-center gap-8 px-4 py-8">
      <h1 className="text-4xl font-black text-blue-400">Pokemon Card</h1>
      <div
        className={`${bgColor} flex w-full flex-col rounded-xl p-8 md:w-2/4 lg:w-2/6`}
      >
        <Image
          className="mx-auto"
          src={`${data.sprites.other["official-artwork"].front_shiny}`}
          width={200}
          height={200}
          alt={`${data.name} images`}
        />
        <div className="mb-2 flex flex-col gap-2">
          <p className="text-2xl font-semibold text-slate-900">#{data.id}</p>
          <p className="text-4xl font-bold capitalize text-white">
            {data.name}
          </p>
        </div>
        <div className="flex gap-4">
          {ability.map((item, index) => (
            <p className="text-xl text-slate-300" key={index}>
              {item.ability.name}
            </p>
          ))}
        </div>
        <div>
          {data.stats.map((item) => (
            <div
              className="flex flex-col items-start justify-between"
              key={item.base_stat}
            >
              <p className="mt-2 text-slate-800">{item.stat.name}</p>
              <Progress value={item.base_stat} className="h-4 w-full" />
            </div>
          ))}
        </div>
      </div>
      <Link
        className="rounded-lg bg-blue-400 px-4 py-2 uppercase text-slate-200 hover:opacity-70"
        href="/pokemon"
      >
        pokemon list
      </Link>
    </div>
  );
}
