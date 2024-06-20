import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PokemonInterface } from '../entities';
import { PokemonListService } from '../Services/pokemon-list.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  title = 'Home';

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

