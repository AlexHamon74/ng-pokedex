import { Routes } from '@angular/router';
import { pokemonListComponent } from './pokemonList/pokemonList.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';

export const routes: Routes = [
    {path:'', component:pokemonListComponent},
    {path:'pokemon/:id', component:PokemonDetailComponent},
];
