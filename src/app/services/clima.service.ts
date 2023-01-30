import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const urlBase = 'https://api.openweathermap.org/data/2.5/weather';
const appId = 'a2b960b44f38105054916db785a680bd';


@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  constructor(private http: HttpClient) { }



  getEstadoClima (ciudad:string, codigo: string) {
    const url= `${ urlBase }?q=${ ciudad },${ codigo }&appid=${appId}`;

    return this.http.get(url);
  }
}
