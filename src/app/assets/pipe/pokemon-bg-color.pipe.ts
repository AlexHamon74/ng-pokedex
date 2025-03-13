import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonBgColor',
  standalone: true
})
export class PokemonBgColorPipe implements PipeTransform {

  transform(value: string): string {
    return this.getColorClass(value);
  }

  getColorClass(type: string): string {
    let colorClass: string;

    switch (type) {
      case 'Feu':
        colorClass = 'bg-feu';
        break;
      case 'Eau':
        colorClass = 'bg-eau';
        break;
      case 'Plante':
        colorClass = 'bg-plante';
        break;
      case 'Insecte':
        colorClass = 'bg-insecte';
        break;
      case 'Normal':
        colorClass = 'bg-normal';
        break;
      case 'Roche':
        colorClass = 'bg-roche';
        break;
      case 'Spectre':
        colorClass = 'bg-spectre';
        break;
      case 'Dragon':
        colorClass = 'bg-dragon';
        break;
      case 'Glace':
        colorClass = 'bg-glace';
        break;
      case 'Sol':
        colorClass = 'bg-sol';
        break;
      case 'Électrik':
        colorClass = 'bg-electrique';
        break;
      case 'Vol':
        colorClass = 'bg-vol';
        break;
      case 'Poison':
        colorClass = 'bg-poison';
        break;
      case 'Fée':
        colorClass = 'bg-fee';
        break;
      case 'Psy':
        colorClass = 'bg-psy';
        break;
      case 'Electrik':
        colorClass = 'bg-électrique';
        break;
      case 'Combat':
        colorClass = 'bg-combat';
        break;
      default:
        colorClass = 'grey';
        break;
    }

    return colorClass;
  }

}
