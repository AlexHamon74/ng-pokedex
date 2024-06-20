import { ComponentFixture, TestBed } from '@angular/core/testing';

import { pokemonListComponent } from './pokemonList.component';

describe('pokemonListComponent', () => {
  let component: pokemonListComponent;
  let fixture: ComponentFixture<pokemonListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [pokemonListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(pokemonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
