import { Component, effect, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { rxResource } from '@angular/core/rxjs-interop';

import { DragonballService } from '../../services/dragonball.service';
import { Character } from '../../interfaces/character.interface';
import { FullscreenLoadingComponent } from '../../../shared/components/fullscreen-loading/fullscreen-loading.component';

@Component({
  selector: 'app-characters-page',
  imports: [RouterLink, FullscreenLoadingComponent],
  templateUrl: './characters-page.component.html',
})
export class CharactersPageComponent {
  dragonballService = inject(DragonballService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);

  page = signal<number>(
    Number(this.activatedRoute.snapshot.queryParamMap.get('page') ?? 1)
  );

  pageEffect = effect(() => {
    const currentPage = this.page();
    this.router.navigate([], {
      queryParams: { page: currentPage },
    });
  });

  characterResource = rxResource({
    request: () => ({ page: this.page() }),
    loader: ({ request }) => {
      // this.router.navigate([], {
      //   queryParams: { page: request.page },
      // });
      return this.dragonballService.loadCharacters(request.page);
    },
  });

  // characters = signal<Character[]>([]);
  // isLoading = signal<boolean>(false);
  // hasError = signal<string>('');

  // ngOnInit(): void {
  //   this.loadCharacters();
  // }

  // loadCharacters(): void {
  //   this.isLoading.set(true);
  //   this.dragonballService.loadCharacters(this.page()).subscribe({
  //     next: (characters) => {
  //       this.characters.set(characters);
  //       this.isLoading.set(false);
  //     },
  //     error: (error) => {
  //       this.hasError.set(error);
  //       this.isLoading.set(false);
  //     },
  //   });
  // }

  // nextPage(page: number): void {
  //   this.page.set(page);
  //   this.loadCharacters();
  // }
}
