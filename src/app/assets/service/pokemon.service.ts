import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokemonInterface, TypeInterface } from '../../entities';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http:HttpClient) { }

  url = "https://tyradex.vercel.app/api/v1/gen/1";
  urlDetail = "https://tyradex.vercel.app/api/v1/pokemon";
  urlType = "https://tyradex.vercel.app/api/v1/types";

  fetchAll(){
    return this.http.get<PokemonInterface[]>(this.url);
  }

  fetchById(id: any) {
    return this.http.get<PokemonInterface>(`${this.urlDetail}/${id}`);
  }

  fetchAllTypes(){
    return this.http.get<TypeInterface[]>(this.urlType);
  }
}
