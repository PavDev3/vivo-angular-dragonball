import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import type {
  Character,
  CharacterResponse,
} from '../interfaces/character.interface';
import { environment } from '@envs/environment.development';

@Injectable({ providedIn: 'root' })
export class DragonballService {
  private http = inject(HttpClient);
  private api = environment.dragonballApi;

  loadCharacters(page: number = 1): Observable<Character[]> {
    return this.http
      .get<CharacterResponse>(`${this.api}/character?page=${page}`)
      .pipe(map((response) => response.items));
  }
}
