import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonTypeColor',
  standalone: true
})
export class PokemonTypeColorPipe implements PipeTransform {

  transform(value: string): string {
    return this.getColorClass(value);
  }

  getColorClass(type: string): string {
    let colorClass: string;

    switch (type) {
      case 'Feu':
        colorClass = 'ombre-feu';
        break;
      case 'Eau':
        colorClass = 'ombre-eau';
        break;
      case 'Plante':
        colorClass = 'ombre-plante';
        break;
      case 'Insecte':
        colorClass = 'ombre-insecte';
        break;
      case 'Normal':
        colorClass = 'ombre-normal';
        break;
      case 'Roche':
        colorClass = 'ombre-roche';
        break;
      case 'Spectre':
        colorClass = 'ombre-spectre';
        break;
      case 'Dragon':
        colorClass = 'ombre-dragon';
        break;
      case 'Glace':
        colorClass = 'ombre-glace';
        break;
      case 'Sol':
        colorClass = 'ombre-sol';
        break;
      case 'Électrik':
        colorClass = 'ombre-electrique';
        break;
      case 'Vol':
        colorClass = 'ombre-vol';
        break;
      case 'Poison':
        colorClass = 'ombre-poison';
        break;
      case 'Fée':
        colorClass = 'ombre-fee';
        break;
      case 'Psy':
        colorClass = 'ombre-psy';
        break;
      case 'Electrik':
        colorClass = 'ombre-électrique';
        break;
      case 'Combat':
        colorClass = 'ombre-combat';
        break;
      default:
        colorClass = 'grey';
        break;
    }

    return colorClass;
  }

}
