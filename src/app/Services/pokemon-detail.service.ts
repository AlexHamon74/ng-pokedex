import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokemonDetailInterface } from '../entities';

@Injectable({
  providedIn: 'root'
})
export class PokemonDetailService {

  constructor(private http:HttpClient) { };

  url = "https://tyradex.vercel.app/api/v1/gen/1";

  fetchAll(){
    return this.http.get<PokemonDetailInterface[]>(this.url);
  }
}
