import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { PokemonInterface } from '../assets/entities';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { PokemonBgColorPipe } from '../assets/pipe/pokemon-bg-color.pipe';
import { PokemonService } from '../assets/service/pokemon.service';

@Component({
    selector: 'app-pokemon-detail',
    standalone: true,
    imports: [CommonModule, PokemonBgColorPipe, RouterLink],
    templateUrl: './pokemon-detail.component.html',
    styleUrl: './pokemon-detail.component.css'
})
export class PokemonDetailComponent implements OnInit, OnDestroy {

    // Définitions des variables
    pokemon: PokemonInterface | undefined;
    private dataPokemonDetail!: Subscription;
    service = inject(PokemonService);
    isShiny: boolean = false;

    // Injection des services
    route = inject(ActivatedRoute);
    router= inject(Router);


    // Méthode appelée lors de l'initialition du composant
    ngOnInit(): void {
        this.getPokemonDetails();
    }

    // Methode appelée lors de la destruction du composant  
    ngOnDestroy(): void {
        this.dataPokemonDetail.unsubscribe();
    }

    getPokemonDetails() {
        const id = this.route.snapshot.paramMap.get('id');
        this.dataPokemonDetail = this.service.fetchById(id).subscribe(
            data => { 
                if(data && data.status !== 404) {
                    this.pokemon = data 
                } else {
                    this.router.navigate(['/404'])
                }
            }
        );
    }

    // Fonction pour afficher l'image du pokemon en skiny
    toggleshiny() {
        this.isShiny = !this.isShiny;
    }

    // Fonction pour que la barre de progression ai une taille de 150
    calculatePercentage(hp: number): number {
        const maxHp = 180;
        return (hp / maxHp) * 100;
    }

}
