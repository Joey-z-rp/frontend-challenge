export type StatName = 'hp' | 'attack' | 'defense' | 'speed' | 'special-attack' | 'special-defense';

export interface PokemonStat {
  base_stat: number;
  effort: number;
  stat_name: StatName;
}

export interface PokemonType {
  slot: number;
  type_name: string;
}

export interface PokemonSprite {
  artwork_url: string;
  front_url: string;
  back_url: string;
}

export interface Pokemon {
  id: number;
  order: number;
  name: string;
  height: number;
  genus: string;
  habitat: string;
  color: string;
  flavor_text: string;
  stats: PokemonStat[];
  sprite: PokemonSprite;
  types: PokemonType[];
}
