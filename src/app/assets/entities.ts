export interface PokemonInterface {
  status: number;
  pokedex_id: number;
  name: {
    fr: string;
  };

  sprites: {
    regular: string;
    shiny : string;
  };

  weight:string;
  height:string;

  stats: {
    atk: number;
    def:number;
    hp:number;
    spe_atk:number;
    spe_def:number;
    vit:number;
  };

  types:[{
    name:string;
    image:string;
  }];
}

export interface TypeInterface{
  id: number;
  name: {
    fr: string;
  }
  sprites: string;
}