import { Component, inject, OnInit, signal } from '@angular/core';
import { DragonballService } from '../../services/dragonball.service';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-characters-page',
  imports: [],
  templateUrl: './characters-page.component.html',
})
export class CharactersPageComponent implements OnInit {
  dragonballService = inject(DragonballService);

  characters = signal<Character[]>([]);
  page = signal<number>(1);
  isLoading = signal<boolean>(false);

  ngOnInit(): void {
    this.loadCharacters();
  }

  loadCharacters(): void {
    this.isLoading.set(true);
    this.dragonballService
      .loadCharacters(this.page())
      .subscribe((characters) => {
        this.characters.set(characters);
        this.isLoading.set(false);
      });
  }

  nextPage(page: number): void {
    this.page.set(page);
    this.loadCharacters();
  }
}
