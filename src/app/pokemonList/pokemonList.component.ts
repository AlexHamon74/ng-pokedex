import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { PokemonInterface } from '../entities';
import { PokemonService } from '../Services/pokemon.service';
import { PokemonTypeColorPipe } from '../Services/pokemon-type-color.pipe';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-pokemonList',
  standalone: true,
  imports: [CommonModule, RouterLink, PokemonTypeColorPipe],
  templateUrl: './pokemonList.component.html',
  styleUrl: './pokemonList.component.css'
})
export class pokemonListComponent implements OnInit, OnDestroy{

  title = 'pokemonList';
  dataPokemons!:Subscription;

  constructor(private service: PokemonService, private router: Router){}

  pokemons:PokemonInterface[] = [];

  ngOnInit():void{
    this.getPokemons();
  }
  ngOnDestroy(): void {
      this.dataPokemons.unsubscribe();
  }

  getPokemons(){
    this.dataPokemons = this.service.fetchAll().subscribe(data =>{ this.pokemons = data });
  }

  goToPokemonDetail(pokedex_id: number) {
    this.router.navigate(['/pokemon', pokedex_id]);
  }
}

