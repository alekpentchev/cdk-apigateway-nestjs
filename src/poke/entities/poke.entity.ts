import {
  NamedAPIResource,
  PokemonAbility,
  PokemonHeldItem,
  PokemonMove,
  PokemonSprites,
  PokemonStat,
  PokemonType,
  VersionGameIndex,
} from 'pokenode-ts';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Poke {
  /** The identifier for this resource */
  @PrimaryGeneratedColumn()
  id: number;
  /** The name for this resource */
  @Column()
  name: string;
  /** The base experience gained for defeating this Pokémon */
  @Column()
  base_experience: number;
  /** The height of this Pokémon in decimetres */
  @Column()
  height: number;
  /** Set for exactly one Pokémon used as the default for each species */
  @Column()
  is_default: boolean;
  /** Order for sorting. Almost national order, except families are grouped together */
  @Column()
  order: number;
  /** The weight of this Pokémon in hectograms */
  @Column()
  weight: number;
  /** A list of abilities this Pokémon could potentially have */
  @Column()
  abilities: PokemonAbility[];
  /** A list of forms this Pokémon can take on */
  @Column()
  forms: NamedAPIResource[];
  /** A list of game indices relevent to Pokémon item by generation */
  @Column()
  game_indices: VersionGameIndex[];
  /** A list of items this Pokémon may be holding when encountered */
  @Column()
  held_items: PokemonHeldItem[];
  /** A link to a list of location areas, as well as encounter details pertaining to specific versions */
  @Column()
  location_area_encounters: string;
  /** A list of moves along with learn methods and level details pertaining to specific version groups */
  @Column()
  moves: PokemonMove[];
  /** A set of sprites used to depict this Pokémon in the game.
   * A visual representation of the various sprites can be found at [PokeAPI/sprites](https://github.com/PokeAPI/sprites#sprites)
   */
  @Column()
  sprites: PokemonSprites;
  /** The species this Pokémon belongs to */
  @Column()
  species: NamedAPIResource;
  /** A list of base stat values for this Pokémon */
  @Column()
  stats: PokemonStat[];
  /** A list of details showing types this Pokémon has */
  @Column()
  types: PokemonType[];
}
