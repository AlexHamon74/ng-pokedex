import { Component, OnInit } from '@angular/core';
import { PokemonDetailInterface } from '../entities';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../Services/pokemon.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.css'
})
export class PokemonDetailComponent implements OnInit{
  pokemon: PokemonDetailInterface | undefined;

  constructor(private route: ActivatedRoute, private service: PokemonService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getPokemonDetails(parseInt(id, 10));
    }
  }

  getPokemonDetails(id: number) {
    this.service.fetchById(id).subscribe(data => {
      console.log(data);
      this.pokemon = data;
    });
  }
}
