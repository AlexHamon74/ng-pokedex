import { Component, OnInit } from '@angular/core';
import { PokemonDetailService } from '../Services/pokemon-detail.service';
import { PokemonDetailInterface } from '../entities';

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.css'
})
export class PokemonDetailComponent implements OnInit{
title = "PokemonDetail";

constructor(private service:PokemonDetailService){};

pokemonDetail:PokemonDetailInterface[] = [];

ngOnInit(): void {
    this.getPokemonDetail()
}

getPokemonDetail(){
  this.service.fetchAll().subscribe(data =>{
    this.pokemonDetail = data;
  })
}

}
