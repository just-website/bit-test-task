import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface Item {
  id: string,
  name: string,
  price: number
}

interface Group {
  id: string,
  name: string
}

export class Goods {
  skus: Item[]
  group: Group
}

const url = 'https://ssdev.superagent.ru/TestApp/Values/GetWithParent';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    public http: HttpClient
  ) { }

  getData(): Observable<any> {
    return this.http.get(url).pipe(
      map( data => {
        return data;
      })
    )
  }

}
