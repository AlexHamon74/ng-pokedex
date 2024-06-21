import { Routes } from '@angular/router';
import { pokemonListComponent } from './pokemonList/pokemonList.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';

export const routes: Routes = [
    {path:'pokemons', component:pokemonListComponent},
    {path:'pokemon/:id', component:PokemonDetailComponent},
    {path:'', redirectTo:'pokemons', pathMatch:'full'},
];
