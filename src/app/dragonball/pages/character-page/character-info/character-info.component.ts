import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  Character,
  FullCharacter,
} from 'src/app/dragonball/interfaces/character.interface';

@Component({
  selector: 'app-character-info',
  imports: [RouterLink],
  templateUrl: './character-info.component.html',
})
export class CharacterInfoComponent {
  character = input.required<FullCharacter>();
}
