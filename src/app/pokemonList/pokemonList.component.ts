import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PokemonInterface } from '../entities';
import { PokemonListService } from '../Services/pokemon-list.service';
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

  constructor(private service: PokemonListService){}

  pokemons:PokemonInterface[] = [];

  ngOnInit():void{
    this.getPokemons();
  }

  getPokemons(){
    this.service.fetchAll().subscribe(data =>{
      this.pokemons = data;
    })
  }

}

