import { Pipe, PipeTransform } from '@angular/core';
import { PokemonInterface } from '../../entities';

@Pipe({
  name: 'filterByType',
  standalone: true
})
export class FilterByTypePipe implements PipeTransform {

  transform(pokemons: PokemonInterface[], selectedType: string): PokemonInterface[] {
    if (!pokemons || !selectedType || selectedType === 'all') {
      return pokemons;
    }

    return pokemons.filter(pokemon => 
      pokemon.types.some(type => type.name === selectedType)
    );
  }

}
