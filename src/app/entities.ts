export interface PokemonInterface {
    pokedex_id: number;
    name: {
      fr: string;
    };
    sprites: {
      regular: string;
    };
    types: Array<{
      image: string;
    }>;
  }