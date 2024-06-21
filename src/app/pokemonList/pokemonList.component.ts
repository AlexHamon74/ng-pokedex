import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { PokemonInterface } from '../entities';
import { PokemonService } from '../Services/pokemon.service';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';


@Component({
  selector: 'app-pokemonList',
  standalone: true,
  imports: [CommonModule, RouterLink, PokemonTypeColorPipe],
  templateUrl: './pokemonList.component.html',
  styleUrl: './pokemonList.component.css'
})
export class pokemonListComponent implements OnInit{
  title = 'pokemonList';

  constructor(private service: PokemonService, private router: Router){}

  pokemons:PokemonInterface[] = [];

  ngOnInit():void{
    this.getPokemons();
  }

  getPokemons(){
    this.service.fetchAll().subscribe(data =>{
      this.pokemons = data;
    });
  }

  goToPokemonDetail(pokedex_id: number) {
    this.router.navigate(['/pokemon', pokedex_id]);
  }
}

