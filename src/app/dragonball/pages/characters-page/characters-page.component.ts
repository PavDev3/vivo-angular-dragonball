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

  ngOnInit(): void {
    this.dragonballService.loadCharacters().subscribe((characters) => {
      this.characters.set(characters);
    });
  }
}
