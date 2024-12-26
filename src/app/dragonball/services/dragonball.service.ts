import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ServiceNameService {
  private http = inject(HttpClient);
  private api = environment.dragonballApi;

  loadCharacters(page: number = 1) {
    return this.http.get(`${this.api}/character?page=${page}`);
  }
}
