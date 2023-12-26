import { PokemonLists } from "@/types";
import React from "react";

export default async function getPokeName(name: string) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

  if (!res.ok) {
    throw new Error(`failed to fetcth pokemon data`);
  }

  return res.json();
}
