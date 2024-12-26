import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, delay, map, Observable, throwError } from 'rxjs';

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

  loadCharacters(page: number = 1): Observable<Character[]> {
    return this.http
      .get<CharacterResponse>(`${this.api}/characters?page=${page}`)
      .pipe(
        map((response) => response.items)
        // delay(2500)
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
