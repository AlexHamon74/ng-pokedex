import { Routes } from '@angular/router';
import { PokemonListComponent } from './pokemonList/pokemonList.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { Error404Component } from './error404/error404.component';

export const routes: Routes = [
    {path:'', component:PokemonListComponent},
    {path:'pokemon/:id', component:PokemonDetailComponent},
    {path:'**', component:Error404Component},
];
