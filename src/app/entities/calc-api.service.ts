import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { CalcInputModel, CalcResponseModel } from './calc.model';
import { API_BASE_URL } from '../../constants';

@Injectable({
  providedIn: 'root',
})

export class CalcApiService {
  constructor(private http: HttpClient) {
  }

  public calculate$(obj: CalcInputModel): Observable<CalcResponseModel> {
    return this.http.post(`${API_BASE_URL}`, obj)
      .pipe(
        map((data: unknown): CalcResponseModel => {
          return data as CalcResponseModel;
        })
      );
  }

  public getHistory$(): Observable<CalcResponseModel[]> {
    return this.http.get(`${API_BASE_URL}`)
      .pipe(
        map((data: unknown): CalcResponseModel[] => {
          return data as CalcResponseModel[];
        })
      );
  }

  public clearHistory$(): Observable<CalcResponseModel[]> {
    return this.http.delete(`${API_BASE_URL}`)
      .pipe(
        map((data: unknown): CalcResponseModel[] => {
          return data as CalcResponseModel[];
        })
      );
  }
}
