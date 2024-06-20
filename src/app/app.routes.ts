import { Routes } from '@angular/router';
import { pokemonListComponent } from './pokemonList/pokemonList.component';

export const routes: Routes = [
    {path:'', component:pokemonListComponent},
    // {path:'pokemon/:id', component:PokemonComponent},
];
