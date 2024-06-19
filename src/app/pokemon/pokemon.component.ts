import { Component } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent {
  pokemon: any[] = [];
  private url: string = 'https://tyradex.vercel.app/api/v1/pokemon';

  ngOnInit(): void {
    fetch(this.url)
    .then((response) => response.json())
    .then(data =>{
      this.pokemon = data;
      console.log(this.pokemon);
    })
  }
}
