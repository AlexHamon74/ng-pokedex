import { Component, OnDestroy, OnInit } from '@angular/core';
import { PokemonDetailInterface } from '../entities';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PokemonService } from '../Services/pokemon.service';
import { CommonModule } from '@angular/common';
import { PokemonBgColorPipe } from '../Services/pokemon-bg-color.pipe';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [CommonModule, PokemonBgColorPipe, RouterLink],
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.css'
})
export class PokemonDetailComponent implements OnInit, OnDestroy{

  pokemon: PokemonDetailInterface | undefined;
  isShiny:boolean = false;
  private dataPokemonDetail!:Subscription;

  constructor(private route: ActivatedRoute, private service: PokemonService) {}

  ngOnInit(): void {
    this.getPokemonDetails();
  }
  ngOnDestroy(): void {
      this.dataPokemonDetail.unsubscribe();
  }

  getPokemonDetails() {
    const id = this.route.snapshot.paramMap.get('id');
    this.dataPokemonDetail = this.service.fetchById(id).subscribe(data => {this.pokemon = data});
  }

  // Fonction pour afficher l'image du pokemon en skiny
  toggleshiny(){
    this.isShiny = !this.isShiny;
  }

  // Fonction pour que la barre de progrssion ai une taille de 150
  calculatePercentage(hp: number): number {
    const maxHp = 180;
    return (hp / maxHp) * 100;
  }

}
