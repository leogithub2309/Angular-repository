import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tarjeta } from '../model/tarjeta';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarjetasService {

  private url:string = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  createNewCard(form: Tarjeta): Observable<any>{
    return this.http.post<any>(this.url+"crearTarjeta", form);
  }

  getTarjetas(): Observable<any> {
    return this.http.get<any>(this.url+"tarjetas");
  }
}
