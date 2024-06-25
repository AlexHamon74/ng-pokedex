export interface PokemonInterface {
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