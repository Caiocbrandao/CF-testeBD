import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({'Conten-Type':'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  private URL_API:string = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  getCarrefour():Observable<any>{
    return this.http.get(`${this.URL_API}/carrefour`,httpOptions);
  }

  getVianense():Observable<any>{
    return this.http.get(`${this.URL_API}/vianense`,httpOptions);
  }

  getGuanabara():Observable<any>{
    return this.http.get(`${this.URL_API}/guanabara`,httpOptions);
  }

  getExtra():Observable<any>{
    return this.http.get(`${this.URL_API}/extra`,httpOptions);
  }
}
