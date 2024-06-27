import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PokemonInterface, TypeInterface } from '../entities';
import { Subscription } from 'rxjs';
import { PokemonTypeColorPipe } from '../shared/pipes/pokemon-type-color.pipe';
import { PokemonService } from '../shared/pipes/services/pokemon.service';
import { SearchPipe } from '../shared/pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { FilterByTypePipe } from '../shared/pipes/filter-by-type.pipe';


@Component({
  selector: 'app-pokemonList',
  standalone: true,
  imports: [CommonModule, RouterLink, PokemonTypeColorPipe, SearchPipe, FilterByTypePipe,FormsModule],
  templateUrl: './pokemonList.component.html',
  styleUrl: './pokemonList.component.css'
})
export class pokemonListComponent implements OnInit, OnDestroy{

  terms ="";
  title = 'pokemonList';
  dataPokemons!:Subscription;
  dataTypes!:Subscription;

  pokemons:PokemonInterface[] = [];
  types: TypeInterface[] = [];
  selectedType: string = 'all';

  constructor(private service: PokemonService){}

  ngOnInit():void{
    this.getPokemons();
    this.getTypes();
  }
  ngOnDestroy(): void {
      this.dataPokemons.unsubscribe();
      this.dataTypes.unsubscribe();
  }

  getPokemons(){
    this.dataPokemons = this.service.fetchAll().subscribe(data =>{ this.pokemons = data });
  }
  getTypes(){
    this.dataTypes = this.service.fetchAllTypes().subscribe(data =>{this.types = data});
  }


}

