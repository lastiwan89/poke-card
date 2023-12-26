export type Pokemon = {
  name: string;
  url: string;
};

export type PokemonLists = {
  results: Pokemon[];
};

export type PokemonType = { name: string };

export type PokemonDetail = {
  id: string;
  types: { type: { name: string } }[];
  name: string;
  height: number;
  weight: number;
  abilities: { ability: { name: string } }[];
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
  sprites: {
    other: {
      dream_world: { front_default: string };
    };
  };
};
