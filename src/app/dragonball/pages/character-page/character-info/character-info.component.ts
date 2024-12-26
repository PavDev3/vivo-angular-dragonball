import { Component, input } from '@angular/core';
import {
  Character,
  FullCharacter,
} from 'src/app/dragonball/interfaces/character.interface';

@Component({
  selector: 'app-character-info',
  imports: [],
  templateUrl: './character-info.component.html',
})
export class CharacterInfoComponent {
  character = input.required<FullCharacter>();
}
