import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokemonInterface } from '../entities';

@Injectable({
  providedIn: 'root'
})
export class PokemonListService {

  constructor(private http:HttpClient) { }

  url = "https://tyradex.vercel.app/api/v1/gen/1";

  fetchAll(){
    return this.http.get<PokemonInterface[]>(this.url);
  }
}
