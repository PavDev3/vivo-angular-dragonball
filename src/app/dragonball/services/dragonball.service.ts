import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, delay, map, Observable, of, tap, throwError } from 'rxjs';

import type {
  Character,
  CharacterResponse,
  FullCharacter,
} from '../interfaces/character.interface';
import { environment } from '@envs/environment.development';

@Injectable({ providedIn: 'root' })
export class DragonballService {
  private http = inject(HttpClient);
  private api = environment.dragonballApi;

  private characterPageCache = new Map<number, Character[]>();

  loadCharacters(page: number = 1): Observable<Character[]> {
    if (this.characterPageCache.has(page)) {
      console.log('Sirviendo del caché');
      return of(this.characterPageCache.get(page)!);
    }

    return this.http
      .get<CharacterResponse>(`${this.api}/characters?page=${page}`)
      .pipe(
        map((response) => response.items),
        delay(2500),
        tap((characters) => this.characterPageCache.set(page, characters)),
        catchError((error) => {
          console.error('Error:', error);
          return throwError(() => `Characters not found ${error.status}`);
        })
      );
  }

  loadCharacter(id: string): Observable<FullCharacter> {
    return this.http.get<FullCharacter>(`${this.api}/characters/${id}`).pipe(
      catchError((error) => {
        console.error('Error:', error);
        return throwError(() => `Character by id ${id} not found`);
      })
      // delay(2500)
    );
  }
}
