import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { PokemonInterface } from '../entities';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { PokemonBgColorPipe } from '../shared/pipes/pokemon-bg-color.pipe';
import { PokemonService } from '../shared/pipes/services/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [CommonModule, PokemonBgColorPipe, RouterLink],
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.css'
})
export class PokemonDetailComponent implements OnInit, OnDestroy{

  pokemon: PokemonInterface | undefined;
  private dataPokemonDetail!:Subscription;
  service = inject(PokemonService);

  isShiny:boolean = false;

  constructor(private route: ActivatedRoute) {}

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
