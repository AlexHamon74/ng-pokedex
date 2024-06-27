import { CommonModule } from '@angular/common';
import { Component, NgModule, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PokemonInterface } from '../entities';
import { Subscription } from 'rxjs';
import { PokemonTypeColorPipe } from '../shared/pipes/pokemon-type-color.pipe';
import { PokemonService } from '../shared/pipes/services/pokemon.service';
import { SearchPipe } from '../shared/pipes/search.pipe';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-pokemonList',
  standalone: true,
  imports: [CommonModule, RouterLink, PokemonTypeColorPipe, SearchPipe, FormsModule],
  templateUrl: './pokemonList.component.html',
  styleUrl: './pokemonList.component.css'
})
export class pokemonListComponent implements OnInit, OnDestroy{

  terms ="";
  title = 'pokemonList';
  dataPokemons!:Subscription;

  constructor(private service: PokemonService){}

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
}

