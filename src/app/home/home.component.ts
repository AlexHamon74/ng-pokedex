import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'Home';

  pokemons: any[] = [];
  private url: string = 'https://tyradex.vercel.app/api/v1/gen/1';

  ngOnInit(): void {
    fetch(this.url)
    .then((response) => response.json())
    .then(data =>{
      this.pokemons = data;
      console.log(this.pokemons);
    })
  }

}

