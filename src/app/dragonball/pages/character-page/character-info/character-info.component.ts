import { Component, input } from '@angular/core';
import { FullCharacter } from 'src/app/dragonball/interfaces/character.interface';

@Component({
  selector: 'app-character-info',
  templateUrl: './character-info.component.html',
})
export class CharacterInfoComponent {
  character = input.required<FullCharacter>();
}
