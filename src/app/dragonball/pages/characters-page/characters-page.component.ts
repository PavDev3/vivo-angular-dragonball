import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { rxResource } from '@angular/core/rxjs-interop';
import { DragonballService } from '../../services/dragonball.service';

import { FullscreenLoadingComponent } from '../../../shared/components/fullscreen-loading/fullscreen-loading.component';

@Component({
  selector: 'app-characters-page',
  imports: [RouterLink, FullscreenLoadingComponent],
  templateUrl: './characters-page.component.html',
})
export class CharactersPageComponent {
  dragonballService = inject(DragonballService);
  page = signal<number>(1);

  characterResource = rxResource({
    request: () => ({ page: this.page() }),
    loader: ({ request }) =>
      this.dragonballService.loadCharacters(request.page),
  });

  // characters = signal<Character[]>([]);
  // page = signal<number>(1);
  // isLoading = signal<boolean>(false);

  // ngOnInit(): void {
  //   this.loadCharacters();
  // }

  // loadCharacters(): void {
  //   this.isLoading.set(true);
  //   this.dragonballService
  //     .loadCharacters(this.page())
  //     .subscribe((characters) => {
  //       this.characters.set(characters);
  //       this.isLoading.set(false);
  //     });
  // }

  // nextPage(page: number): void {
  //   this.page.set(page);
  //   this.loadCharacters();
  // }
}
