import { Component, inject, OnInit, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { DragonballService } from '../../services/dragonball.service';
import { FullCharacter } from '../../interfaces/character.interface';
import { FullscreenLoadingComponent } from '../../../shared/components/fullscreen-loading/fullscreen-loading.component';
import { CharacterInfoComponent } from './character-info/character-info.component';

@Component({
  selector: 'app-character-page',
  imports: [FullscreenLoadingComponent, CharacterInfoComponent, RouterLink],
  templateUrl: './character-page.component.html',
})
export class CharacterPageComponent implements OnInit {
  route = inject(ActivatedRoute);
  dragonballService = inject(DragonballService);

  isLoading = signal<boolean>(true);
  hasError = signal<string | null>(null);

  id = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('id') ?? ''))
  );
  character = signal<FullCharacter | null>(null);

  ngOnInit(): void {
    this.dragonballService.loadCharacter(this.id() ?? '').subscribe({
      next: (character) => {
        this.character.set(character);
        this.isLoading.set(false);
      },
      error: (error) => {
        this.hasError.set(error);
        this.isLoading.set(false);
      },
    });
  }
}
