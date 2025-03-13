import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PokemonInterface, TypeInterface } from '../entities';
import { Subscription } from 'rxjs';
import { PokemonTypeColorPipe } from '../assets/pipe/pokemon-type-color.pipe';
import { PokemonService } from '../assets/service/pokemon.service';
import { SearchPipe } from '../assets/pipe/search.pipe';
import { FormsModule } from '@angular/forms';
import { FilterByTypePipe } from '../assets/pipe/filter-by-type.pipe';


@Component({
    selector: 'app-pokemonList',
    standalone: true,
    imports: [CommonModule, RouterLink, PokemonTypeColorPipe, SearchPipe, FilterByTypePipe, FormsModule],
    templateUrl: './pokemonList.component.html',
    styleUrl: './pokemonList.component.css'
})
export class PokemonListComponent implements OnInit, OnDestroy {

    // Définitions des variables
    terms = "";
    title = 'pokemonList';
    dataPokemons!: Subscription;
    dataTypes!: Subscription;

    pokemons: PokemonInterface[] = [];
    types: TypeInterface[] = [];
    selectedType: string = 'all';

    // Injection des services
    pokemonService = inject(PokemonService);


    // Méthode appelée lors de l'initialition du composant
    ngOnInit(): void {
        this.getPokemons();
        this.getTypes();
    }

    // Methode appelée lors de la destruction du composant  
    ngOnDestroy(): void {
        this.dataPokemons.unsubscribe();
        this.dataTypes.unsubscribe();
    }

    getPokemons() {
        this.dataPokemons = this.pokemonService.fetchAll().subscribe(data => { this.pokemons = data });
    }
    getTypes() {
        this.dataTypes = this.pokemonService.fetchAllTypes().subscribe(data => { this.types = data });
    }


}

